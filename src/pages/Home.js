import {
  Container,
  Image,
  Line,
  TitleL,
  Button,
  TitleM,
  Logo,
} from '../components'
import { introduce_photo } from '../resources/images'
import { introduces } from '../utils/config'
import { test1, test2, test3, test4, test5, test6 } from '../resources/images'

import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { useEffect, useState } from 'react'

export const Home = () => {
  const [albumCount, setAlbumCount] = useState(4)

  useEffect(() => {
    if (isMobile) {
      setAlbumCount(2)
    }
  }, [])

  return (
    <Container>
      {/* 제목 */}
      <TitleL margin={isMobile ? '10%' : '5%'}>
        <Logo />
      </TitleL>
      <Line thick={3} />

      {/* 소개 페이지 */}
      <article style={{ width: '90%', margin: '0 auto' }}>
        <Image src={introduce_photo} alt="test" />

        <TitleM>Hi, We are LBBL club</TitleM>

        <div
          style={{
            fontSize: isMobile ? '100%' : '200%',
          }}
        >
          {introduces.map((text, index) => {
            return (
              <div style={{ paddingTop: 5 }} key={index}>
                {text}
              </div>
            )
          })}
        </div>
        <div style={{ marginTop: 50 }}>
          <Button>projects</Button>
          <Button>pictures</Button>
        </div>
      </article>

      {/* 방명록 */}

      <TitleL margin="15%">Letter from friends</TitleL>
      <Line thick={3} />

      <PhotoAlbum albumCount={albumCount} />
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
    <>
      <Link
        to="/love♡"
        style={{
          marginTop: 10,
          textAlign: 'end',
          cursor: 'pointer',
          fontSize: isMobile ? '100%' : '150%',
        }}
      >
        + add some love♡
      </Link>
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
                key: { albumIndex },
              }}
            >
              {photos.map((photo, photoIndex) => {
                if (photoIndex % albumCount === albumIndex) {
                  return (
                    <div>
                      <Image src={photo} margin="40px 0 0 0" alt="test" />
                      <p
                        style={{
                          fontSize: isMobile ? '80%' : '130%',
                          marginTop: 5,
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
    </>
  )
}
