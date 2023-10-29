import React from "react"
import { Outlet } from "react-router-dom"
import Navv from "../Two_crud/Navv"
const Layout=()=>{
    return(
        <>
        <Navv/>
        <Outlet/>
       </>
    )
       
    
}
export default Layout