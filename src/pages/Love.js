import { Container, Image, Line, TitleL, Content, Input } from '../components'

import { logo, orange_button } from '../resources/images'

import { useHistory } from 'react-router-dom'
import { isMobile } from '../config'
import { useState } from 'react'
import { createLove, createLovePhoto } from '../data'

export const Love = () => {
  const history = useHistory()
  const [name, setName] = useState()
  const [content, setContent] = useState()

  const setFileName = (e) => {
    let filename = document.getElementById('fileName')
    if (e.target.files[0] === undefined) {
      filename.innerText = ''
      return
    }
    filename.innerText = e.target.files[0].name
  }

  const sendMsgs = () => {
    let file = document.getElementById('regFile')
    let regFile = file.files[0]
    let type
    if (regFile) {
      type = regFile.name.split('.').pop()
    } else {
      alert('사진을 첨부해 주세요!!~!~!')
      return
    }

    let data = {}
    data.name = name
    data.content = content

    createLove(data).then((data) => {
      createLovePhoto(regFile, type, data.code)
      alert('thank you for love !')
      history.push('/')
    })
  }

  return (
    <Container>
      <TitleL
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        Wanna send some love?
        <Image
          width={isMobile ? '70px' : '100px'}
          src={logo}
          onClick={() => history.push('/')}
          style={{ cursor: 'pointer' }}
        />
      </TitleL>

      <Content margin="10vh">
        <div
          style={{
            display: 'flex',
          }}
        >
          <div>From:</div>
          <Input
            width="100%"
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <Line margin="10px" />
        <div>
          <textarea
            style={{
              backgroundColor: '#626262',
              borderRadius: '30px',
              height: '30vh',
              padding: '15px',
              width: '100%',
            }}
            onChange={(e) => {
              setContent(e.target.value)
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '15vh',
          }}
        >
          <div>Attach File: &nbsp;</div>
          <input
            type="file"
            name="file"
            accept="image/*"
            id="regFile"
            onChange={setFileName}
            style={{ display: 'none', cursor: 'pointer' }}
          />
          <label
            htmlFor="regFile"
            style={{
              cursor: 'pointer',
              backgroundColor: '#c4c4c4',
              borderRadius: '10px',
              color: 'black',
              padding: '6px 10px',
            }}
          >
            choose file!
          </label>
          <span id="fileName" style={{ marginLeft: '10px' }}></span>
        </div>
        <Line margin="10px" />

        <div style={{ textAlign: 'end', margin: '30px 0' }}>
          <Image
            width={isMobile ? '80px' : '150px'}
            src={orange_button}
            style={{ cursor: 'pointer' }}
            onClick={sendMsgs}
          />
        </div>
      </Content>
    </Container>
  )
}
