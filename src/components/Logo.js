import { Link } from 'react-router-dom'
import { lbbl_ani } from '../resources/images'
import { isMobile } from 'react-device-detect'

export const Logo = () => {
  return (
    <Link to="/">
      <img
        style={{
          width: isMobile ? '80px' : '120px',
        }}
        src={lbbl_ani}
        alt="LBBL"
      />
    </Link>
  )
}
