import React from "react";
import Ch_pass from "./Ch_pass";
import { useNavigate} from "react-router-dom";
const Dashbord = () => {
    const navigate = useNavigate();
    const handlelogout=()=>{
        navigate('/logreg');
    }
    return (
        <>
            <div class="row">
                <div class="col-12">
                    <div class="row">
                        <div class="col-3">
                            <h1>Email:</h1><br/>
                            <button class="p-2" onClick={handlelogout}>LOG OUT</button>
                        </div>
                        <div className="col-8"> <Ch_pass/></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashbord

