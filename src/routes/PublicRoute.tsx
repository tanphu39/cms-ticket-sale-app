import { Route, Routes } from 'react-router-dom'
import {IRoutes} from '../interfaces/routeTypes'
import {routes} from './config'

function PublicRoute(props: any) {
  return (
    <Routes>
          {routes.map((route: IRoutes) => {
            let Element = route.component;
            return (<Route {...route} key={route.key} element={<Element/>} />)
          })}
    </Routes>
  )
}

export default PublicRoute;