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

import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

export const Love = () => {
  const history = useHistory()

  const setFileName = (e) => {
    let filename = document.getElementById('fileName')
    if (e.target.files[0] == undefined) {
      filename.innerText = ''
      return
    }
    filename.innerText = e.target.files[0].name
  }

  const sendMsgs = () => {
    console.log('send')
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
          <Input width="100%" />
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
            id="bizFile"
            onChange={setFileName}
            style={{ display: 'none', cursor: 'pointer' }}
          />
          <label
            htmlFor="bizFile"
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
