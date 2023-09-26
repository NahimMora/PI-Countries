import { Route, BrowserRouter, Routes } from "react-router-dom"
import landing from "./views/landing/landing"
import Home from "./views/Home/Home"
import Details from "./views/Details/Details"
import Create from "./views/Create/Create"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path={"/"} Component={landing}/>
        <Route path={"/home"} Component={Home}/>
        <Route path={"/details/:id"} Component={Details}/>
        <Route path={"/Create"} Component={Create}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
