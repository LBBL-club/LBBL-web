import Caver from 'caver-js'
import {
  contractABI,
  contractAddress,
  creatorAddress,
  privateKey,
} from './config'
import { isMobile } from '../config'
import { getRandom } from '../utils'

export const test = () => {
  alert('aaa')
}

export const mint = async () => {
  if (isMobile) {
    alert('모바일에서는 민팅할 수 없습니다! PC로 접속해 주세요.')
    return
  }

  let res = await checkKaiKas()

  // tranaction
  if (res.status) {
    await transaction(res.account)
  }
}

const checkKaiKas = async () => {
  const { klaytn } = window

  let res = {
    status: true,
    account: undefined,
  }

  if (klaytn) {
    try {
      const accounts = await klaytn.enable()
      res.account = accounts[0]
    } catch (error) {
      res.status = false
      console.log('User denied account access')
    }
  } else {
    res.status = false
    alert(
      'kaikas 지갑이 크롬에 설치되어 있지 않습니다. kaikas 지갑을 설치해 주세요!'
    )
    console.log(
      'Non-Kaikas browser detected. You should consider trying Kaikas!'
    )
  }

  return res
}

const transaction = async (account) => {
  const caverK = new Caver(window.klaytn)
  caverK.klay.accounts.wallet.add(privateKey, creatorAddress)
  let ranInt = getRandom(1, 4)
  let uri = `https://lbbl-club.s3.ap-northeast-2.amazonaws.com/nft/meta_00${ranInt}.json`

  const myContract = new caverK.klay.Contract(contractABI, contractAddress)
  let res = await myContract.methods.balanceOf(account).call()

  const inputData = await myContract.methods.mintLBBL(uri).encodeABI()

  console.log('balanceOf', res)

  if (res > 0) {
    alert('한 사람당 1개의 NFT만 소유할 수 있습니다. 🥲')
  } else {
    console.log(`${account} 0개 소유`)

    try {
      const { rawTransaction: senderRawTransaction } =
        await caverK.klay.signTransaction({
          type: 'FEE_DELEGATED_SMART_CONTRACT_EXECUTION',
          from: account,
          to: contractAddress,
          data: inputData,
          gas: '300000',
          value: caverK.utils.toPeb('0', 'KLAY'),
        })

      await caverK.klay
        .sendTransaction({
          senderRawTransaction: senderRawTransaction,
          feePayer: creatorAddress,
        })
        .then((e) => {
          alert('NFT 민팅 성공! opensea에서 확인하세요! 😊')
        })
    } catch (error) {
      if (error.message.includes('User denied')) {
        alert('트랜젝션이 거부되었습니다.')
      } else {
        console.log(error.message)
      }
    }
  }
}
