import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import {
  Container,
  Image,
  ImageS,
  ImageM,
  ImageL,
  TitleL,
  Button,
  TitleM,
  Content,
} from '../components'
import {
  main_picture,
  green_arrow,
  white_star_1,
  white_star_2,
  orange_mark,
} from '../resources/images'
import { fontS, fontL } from '../resources/fonts'
import { getLoves } from '../data'
import { introduces } from '../utils/config'

export const Home = () => {
  const [albumCount, setAlbumCount] = useState(4)
  const history = useHistory()

  useEffect(() => {
    if (isMobile) {
      setAlbumCount(2)
    }
  }, [])
  //
  return (
    <Container>
      {/* 제목 */}
      <TitleL
        margin={isMobile ? '10vw' : '5vw'}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        LBBL club
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button fnc={() => alert('Sorry.. I have no time.... 😂')}>
            <div>Projects</div>
            <ImageS src={green_arrow} alt="->" />
          </Button>

          <Button fnc={() => history.push('/love')}>
            <div>Messages</div>
            <ImageS src={green_arrow} alt="->" />
          </Button>
        </div>
      </TitleL>

      {/* 소개 페이지 */}
      <Content
        margin="0vh"
        style={{ position: 'relative', minHeight: isMobile ? '55vh' : '90vh' }}
      >
        <Image
          src={main_picture}
          alt="LBBL"
          width={isMobile ? '60%' : '70%'}
          style={{
            position: 'absolute',
            top: isMobile ? '10vh' : '10%',
            left: '40%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: isMobile ? '15vh' : '23%',
            left: '0',
          }}
        >
          <ImageL
            className="blink"
            src={white_star_1}
            alt="*"
            style={{
              position: 'absolute',
              left: '-5vw',
              top: '-5vh',
            }}
          />
          <TitleM>Hi, We are </TitleM>
          <TitleM>
            LBBL club.
            <ImageM className="blink" src={white_star_2} alt="*" />
          </TitleM>

          <div
            style={{
              marginTop: '5vh',
            }}
          >
            {introduces.map((text, index) => {
              return (
                <div
                  style={{ paddingTop: 5, fontSize: isMobile ? fontS : fontL }}
                  key={index}
                >
                  {text}
                </div>
              )
            })}
          </div>
        </div>
      </Content>

      {/* 방명록 */}
      <TitleL margin="5vh">Messages from friends</TitleL>
      <div
        style={{
          marginTop: 15,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Image width={isMobile ? '30px' : ''} src={green_arrow} alt="->" />
        <Link
          to="/love♡"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',

            cursor: 'pointer',
          }}
        >
          &ensp;
          {isMobile ? 'Go for' : 'You can leave us some'}
          &nbsp;
          <div style={{ position: 'relative' }}>
            <Image
              width={isMobile ? '48px' : '76px'}
              src={orange_mark}
              alt=""
            />

            <div style={{ position: 'absolute', top: '33%', left: '10%' }}>
              msgs
            </div>
          </div>
          &nbsp;{isMobile ? '' : 'too'}
        </Link>
      </div>
      <Content margin="0vh">
        <PhotoAlbum albumCount={albumCount} />
      </Content>
    </Container>
  )
}

const PhotoAlbum = ({ albumCount }) => {
  const [loves, setLoves] = useState([])

  const history = useHistory()
  const s3Url = 'https://lbbl.s3.ap-northeast-2.amazonaws.com/love/'

  useEffect(() => {
    const init = async () => {
      const loves = await getLoves()
      console.log('loves', loves)
      setLoves(loves)
    }
    init()
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
      }}
    >
      {new Array(albumCount).fill().map((_, albumIndex) => {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '100%',
              margin: 10,
            }}
            key={albumIndex}
          >
            {loves.map((love, loveIndex) => {
              if (loveIndex % albumCount === albumIndex) {
                return (
                  <div key={loveIndex}>
                    <Image
                      width="100%"
                      src={`${s3Url}` + love.code}
                      style={{
                        margin: '20px 0 0 0',
                        borderRadius: '20px',
                        cursor: 'pointer',
                      }}
                      alt="LBBL"
                      onClick={(e) => {
                        history.push(`/msgs/${love.code}`)
                      }}
                    />
                    <p
                      style={{
                        fontSize: '75%',
                        marginTop: 0.5,
                      }}
                    >
                      {love.name} |{' '}
                      {love.created.slice(2, 10).replaceAll('-', '.')}
                    </p>
                  </div>
                )
              } else {
                return undefined
              }
            })}
          </div>
        )
      })}
    </div>
  )
}
