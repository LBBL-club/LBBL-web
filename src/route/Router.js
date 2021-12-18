import { Route, BrowserRouter } from 'react-router-dom'
import { Home, Love } from '../pages'

export const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path={'/'}>
        <Home />
      </Route>
      <Route path={'/love♡'}>
        <Love />
      </Route>
      <Route path={'/love'}>
        <Love />
      </Route>
    </BrowserRouter>
  )
}
