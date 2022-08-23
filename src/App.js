import { GlobalStyle } from "./global/GlobalStyle"
import Router from "./router/Router"

export const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Router />
    </div>
  )
}