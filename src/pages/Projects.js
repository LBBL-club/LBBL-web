import {
  Container,
  Image,
  TitleL,
  TitleM,
  Content,
  Line,
  ImageXL,
} from '../components'
import { logo } from '../resources/images'
import { isMobile } from '../config'
import { useHistory } from 'react-router-dom'
import { COLORS } from '../resources/colors'
import { useState, useEffect } from 'react'
import { fontS, fontM, fontL } from '../resources/fonts'
import { kor_gray, kor_orange, eng_gray, eng_orange } from '../resources/images'

export const Projects = () => {
  const [language, setLanguage] = useState('kor')
  const [data, setData] = useState(dataKor)
  const [langButton, setLangButton] = useState([kor_orange, eng_gray])
  const history = useHistory()

  useEffect(() => {
    console.log(language)
    switch (language) {
      case 'eng':
        setData(dataEng)
        setLangButton([kor_gray, eng_orange])

      default:
        setData(dataKor)
        setLangButton([kor_orange, eng_gray])
    }
  }, [language])
  return (
    <Container>
      <TitleL
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        Our projects.
        <br />
        sometimes just for fun
        <Image
          width={isMobile ? '70px' : '130px'}
          src={logo}
          onClick={() => history.push('/')}
          style={{ cursor: 'pointer' }}
        />
      </TitleL>

      <Content margin="3vh">
        <TitleM
          fontFamily="CourierPrime"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          LBBL
          {/*
          <div style={{ position: 'relative' }}>
            <ImageXL src={langButton[0]} alt="kor" />
            <ImageXL src={langButton[1]} alt="kor" />
          </div>
          */}
        </TitleM>
        <Line margin="10px" />
        {data.LBBL.map((d) => {
          return <Description data={d} />
        })}
        <TitleM
          fontFamily="CourierPrime"
          margin="5vh"
          style={{ display: 'flex' }}
        >
          L{' '}
          <div style={{ lineHeight: 2, marginLeft: '2vw' }}>our@408.co.kr</div>
        </TitleM>
        <Line margin="10px" />
        {data.L.map((d) => {
          return <Description data={d} />
        })}
        <TitleM
          fontFamily="CourierPrime"
          margin="5vh"
          style={{ display: 'flex' }}
        >
          B <div style={{ lineHeight: 2, marginLeft: '2vw' }}>iam@daunb.in</div>
        </TitleM>
        <Line margin="10px" />
        {data.B.map((d) => {
          return <Description data={d} />
        })}
      </Content>
    </Container>
  )
}

const Description = ({ data }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          marginTop: '4vh',
        }}
      >
        {data.category.map((category, i) => {
          let title = data.title[i]
          return (
            <p
              style={{
                fontSize: isMobile ? '20px' : fontL,
                marginRight: isMobile ? '0px' : '20px',
                marginBottom: '2px',
              }}
            >
              {category} {'<'}
              <a
                href={data.link[i]}
                style={{
                  cursor: 'pointer',
                  fontSize: isMobile ? '20px' : fontL,
                  textDecorationColor: 'white',
                  textUnderlinePosition: 'under',
                }}
              >
                {title}
              </a>
              {'>'}
            </p>
          )
        })}
      </div>
      <div style={{ marginTop: '2vh', whiteSpace: 'pre-line' }}>
        {data.content}
      </div>
      <div
        style={{ color: COLORS.gray, marginTop: '1vh', marginBottom: '6vh' }}
      >
        {data.date}
      </div>
    </>
  )
}

const dataKor = {
  LBBL: [
    {
      category: ['Podcast'],
      title: ['백수라 시간이 많아요'],
      content:
        '회사에서 9-6로 일하지 않다보니, Netflix, Tving, Wavve 가릴 것 없이 콘텐츠를 흡수하는 헤비 컨수머가 되었답니다. \n 이 팟캐스트에서는 저희가 재밌게 본 영상을 리뷰해요. \n 한 번 들을 때 마다 저희한테 1원 씩 떨어진다는 사실 ;)',
      date: 'Jan 17,2022~',
      link: ['https://podbbang.page.link/GjhX2fSBXx3A4Uez6'],
    },
  ],
  L: [
    {
      category: ['Project'],
      title: ['개미도 때론 돈을 번다'],
      content:
        '주식 초보 개미들을 위한 서비스! 증권사의 애널리스트들의 리포트를 모아서 가장 많이 선정된 종목을 알려줍니다.\n 더불어 투자자들의 심리 안정 서비스도 제공 합니다. ',
      date: 'Jun 23,2021~',
      link: ['https://antsmakemoney.com'],
    },
  ],
  B: [
    {
      category: ['Brunch', 'Blog'],
      title: ['Bin', "I've bin thinking"],
      content:
        '다양한 생각과 읽은 것, 공부한 것을 남기고 싶어 브런치와 개인 블로그를 시작했어요. \n 현재는 테크 트렌드에 대한 내용이 많군요-',
      date: 'Jan 04,2022~',
      link: ['https://brunch.co.kr/@tkv', 'http://daunb.in'],
    },
    {
      category: ['Youtube'],
      title: ['TKV'],
      content:
        '구독자 24명의 꼬마 유튜버입니다. (>-<) \n 테크와 컬쳐, 브랜드 그 사이의 이야기를 경계 없이 전하고 싶어 이름은 테컬브로 지었습니다. \n 구독 눌러주십셔!',
      date: 'Jan 05,2022~',
      link: ['https://www.youtube.com/channel/UChHihS_K2iBGRqBK0AF27Cg'],
    },
    {
      category: ['Instagram'],
      title: ['@jibbabyo'],
      content:
        '저희의 집밥에 대한 애정을 담아 집밥 여정을 기록하는 인스타그램입니다. \n 현대 사회 최고의 사치 직접 건강한 음식을 해 먹는 기쁨을 오래 오래 누리고 싶어요. \n 카레 사진이 가장 자주 올라오는 것 같은 것은 굉장히 기분 탓입니다. ',
      date: 'Oct 14,2021~',
      link: ['https://instagram.com/jibbabyo'],
    },
  ],
}

const dataEng = {
  LBBL: [
    {
      category: ['Podcast'],
      title: ['백수라 시간이 많아요'],
      content:
        'As we don’t work 9-6PM at a company, we are such a binge watchers of all media plaforms incld. Netflix, Tving and even Wavve. \n This is a podcast reviewing of what we’ve watched. \n We get 1 won everytime you listen to our podcast ;)',
      date: 'Jan 17,2022~',
      link: ['https://podbbang.page.link/GjhX2fSBXx3A4Uez6'],
    },
  ],
  L: [
    {
      category: ['Project'],
      title: ['개미도 때론 돈을 번다'],
      content:
        '주식 초보 개미들을 위한 서비스! 증권사의 애널리스트들의 리포트를 모아서 가장 많이 선정된 종목을 알려줍니다.\n 더불어 투자자들의 심리 안정 서비스도 제공 합니다. ',
      date: 'Jun 23,2021~',
      link: ['https://antsmakemoney.com'],
    },
  ],
  B: [
    {
      category: ['Brunch', 'Blog'],
      title: ['Bin', "I've bin thinking"],
      content:
        '다양한 생각과 읽은 것, 공부한 것을 남기고 싶어 브런치와 개인 블로그를 시작했어요. \n 현재는 테크 트렌드에 대한 내용이 많군요-',
      date: 'Jan 04,2022~',
      link: ['https://brunch.co.kr/@tkv', 'http://daunb.in'],
    },
    {
      category: ['Youtube'],
      title: ['TKV'],
      content:
        '구독자 24명의 꼬마 유튜버입니다. (>-<) \n 테크와 컬쳐, 브랜드 그 사이의 이야기를 경계 없이 전하고 싶어 이름은 테컬브로 지었습니다. \n 구독 눌러주십셔!',
      date: 'Jan 05,2022~',
      link: ['https://www.youtube.com/channel/UChHihS_K2iBGRqBK0AF27Cg'],
    },
    {
      category: ['Instagram'],
      title: ['@jibbabyo'],
      content:
        '저희의 집밥에 대한 애정을 담아 집밥 여정을 기록하는 인스타그램입니다. \n 현대 사회 최고의 사치 직접 건강한 음식을 해 먹는 기쁨을 오래 오래 누리고 싶어요. \n 카레 사진이 가장 자주 올라오는 것 같은 것은 굉장히 기분 탓입니다. ',
      date: 'Oct 14,2021~',
      link: ['https://instagram.com/jibbabyo'],
    },
  ],
}
