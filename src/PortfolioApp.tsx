import { FloatMenu } from "./portfolio/container/FloatMenu"
import { routes } from "./portfolio/routes/routes"
import { RouterApp } from "./router/RouterApp"

export const PortfolioApp = () => {
  return (
    <>
      <RouterApp />
      <FloatMenu routes={ routes }/>
    </>
  )
}
