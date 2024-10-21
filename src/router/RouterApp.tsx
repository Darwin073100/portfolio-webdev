import { Navigate, Route, Routes } from "react-router-dom"
import { routes } from "../portfolio/routes/routes"

export const RouterApp = () => {
  return (
    <>
      <Routes>
        {
          routes.map(({path, Component}) => <Route path={ path } element={ <Component />}/>)
        }
        <Route path="/*" element={ <Navigate to='/home'/>}/>
      </Routes>
    </>
  )
}
