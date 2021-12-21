import {
  Container,
  Image,
  ImageL,
  Line,
  TitleL,
  Content,
  Input,
} from '../components'

import { logo, orange_button } from '../resources/images'

import { Link, useParams } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { createLove, createLovePhoto, getLovesDetail } from '../data'

export const Msgs = () => {
  const { code } = useParams()
  const history = useHistory()
  const [name, setName] = useState()
  const [content, setContent] = useState()

  useEffect(() => {
    const init = async () => {
      const loves = await getLovesDetail(code)
      setName(loves.name)
      setContent(loves.content)
    }

    init()
  })

  return (
    <Container>
      <TitleL
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        Message
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
          <Input width="100%" defaultValue={name} style={{ color: 'white' }} />
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
              color: 'white',
            }}
            defaultValue={content}
          />
        </div>

        <div style={{ textAlign: 'start', margin: '30px 0' }}>
          <Image
            width={isMobile ? '80px' : '150px'}
            src={orange_button}
            style={{ cursor: 'pointer', transform: 'rotate(180deg)' }}
            onClick={() => history.push('/')}
          />
        </div>
      </Content>
    </Container>
  )
}
