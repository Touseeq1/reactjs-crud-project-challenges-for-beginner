import React from "react";
import { useState } from "react";
import car from "./Img/car.png"
import Login from "./Login";
import Regis from "./Regis";
const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
        <div role='tabpanel' hidden={value !== index}>
            {
                value == index && (<div>{children}</div>)
            }
        </div>);
}
const LogReg = () => {
    const [value, setValue] = useState(0)
    const handleChange = (event, newVal) => {
        setValue(newVal);
    }
    return (
        <>
            <div className="row">
                <div className="col-12 col-sm-12 col-lg-12 col-xxl-12">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
                            <div className="card">
                                <div className="card-body">
                                    <ul className="nav nav-tabs" value={value} onChange={handleChange}>
                                        <li className="nav-tab p-1">
                                            <a className="nav-link" >Login</a>
                                        </li>
                                        <li className="nav-tab p-1">
                                            <a className="nav-link" >Regis</a>
                                        </li>
                                    </ul>
                                </div>
                                <TabPanel value={value} index={0}><Login/></TabPanel>
                                <TabPanel value={value} index={1}><Regis/></TabPanel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LogReg