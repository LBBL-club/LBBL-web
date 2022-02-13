import { Route, BrowserRouter } from 'react-router-dom'
import { Home, Love, Msgs, Projects } from '../pages'

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
      <Route path={'/projects'}>
        <Projects />
      </Route>

      <Route path={'/msgs/:code'}>
        <Msgs />
      </Route>
    </BrowserRouter>
  )
}
