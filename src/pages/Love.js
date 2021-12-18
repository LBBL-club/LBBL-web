import { Container, Image, Line, TitleL, Button, TitleM } from '../components'
import { lbbl_ani, introduce_photo } from '../resources/images'
import { introduces } from '../utils/config'
import { test1, test2, test3, test4, test5, test6 } from '../resources/images'

import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { useEffect, useState } from 'react'

export const Love = () => {
  return (
    <Container>
      <TitleL>Add some love♡</TitleL>
      <Line />
    </Container>
  )
}
