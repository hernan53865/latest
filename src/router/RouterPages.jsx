import { Route, Routes, createBrowserRouter } from "react-router-dom"
import App from "../components/pages/App"
import Characters from "../components/pages/Characters"
import Error404 from "../components/pages/Error404"
import Login from "../components/pages/Login"

const RouterPages = () => {
    
   return(
      <Routes >
         <Route path="/" element={<App />} ></Route>
         <Route path="/characters/:id" element={<Characters />} ></Route>
         <Route path="/login" element={<Login />} ></Route>
      </Routes >
   )
 }

export default RouterPages