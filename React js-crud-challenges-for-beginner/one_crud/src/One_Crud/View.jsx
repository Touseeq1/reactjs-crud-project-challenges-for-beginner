import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios";

const View = () => {
  const { id } = useParams();   //useParms return object which have id in dynamic form. reat-router-dom giv us id.
  const navigate = useNavigate();
  const [stateID, setStateID] = useState([]);
  useEffect(() => {
    async function getID() {
      try {
        const getID = await axios.get(`http://localhost:3333/students/${id}`)
        setStateID(getID.data)
      }
      catch (error) {

      }
    }
    getID()
  }, [id])
  function ViewBack() {
    navigate('/');
  }
  return (
    <>
      <div class="container-fluid">
        <div class="col-12">
          <div class="row">
            <div class="card col-12">
              <div class="card-body">
                <h1>Students Detail</h1>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Student ID</th>
                      <th scope="col">Student Name</th>
                      <th scope="col">Student Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="col">{stateID.id}</td>
                      <td scope="col">{stateID.stuname}</td>
                      <td scope="col">{stateID.email}</td>
                    </tr>
                  </tbody>
                </table>
                <div class="row"><button className="p-2" onClick={ViewBack}>Back To Home</button></div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
export default View
