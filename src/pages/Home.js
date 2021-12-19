import {
  Container,
  Image,
  ImageS,
  ImageM,
  ImageL,
  Line,
  TitleL,
  Button,
  TitleM,
  Logo,
  Content,
} from '../components'
import {
  main_picture,
  green_arrow,
  white_star_1,
  white_star_2,
  orange_mark,
} from '../resources/images'
import { fontS, fontM, fontL } from '../resources/fonts'
import { introduces } from '../utils/config'
import { test1, test2, test3, test4, test5, test6 } from '../resources/images'

import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

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
          <Button>
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
            <ImageM src={white_star_2} alt="*" />
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
          cursor: 'pointer',
        }}
      >
        <Image width={isMobile ? '30px' : ''} src={green_arrow} alt="->" />
        <Link
          to="/love♡"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
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
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    setPhotos([
      test1,
      test2,
      test5,
      test4,
      test3,
      test6,
      test1,
      test2,
      test5,
      test4,
      test3,
      test6,
      test1,
      test2,
      test5,
      test4,
      test3,
      test6,
    ])
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
            {photos.map((photo, photoIndex) => {
              if (photoIndex % albumCount === albumIndex) {
                return (
                  <div key={photoIndex}>
                    <Image
                      width="100%"
                      src={photo}
                      style={{
                        margin: '20px 0 0 0',
                        borderRadius: '20px',
                      }}
                      alt="test"
                    />
                    <p
                      style={{
                        fontSize: '75%',
                        marginTop: 0.5,
                      }}
                    >
                      다은 | 2020.05.29
                    </p>
                  </div>
                )
              }
            })}
          </div>
        )
      })}
    </div>
  )
}
