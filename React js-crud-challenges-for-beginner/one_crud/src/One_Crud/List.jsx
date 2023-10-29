import React, { useDebugValue } from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
const List = () => {
  const [liststate, setListstate] = useState([]);
  useEffect(() => {
    async function getListdata() {
      try {
        const stud = await axios.get("http://localhost:3333/students")
        setListstate(stud.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    getListdata()
  }, [])
  async function Delete(id) {
    await axios.delete(`http://localhost:3333/students/${id}`)
    var newliststate = liststate.filter((item) => {
      return item.id !== id;
    })
    setListstate(newliststate);
  }
  return (
    <>
      <div className="col-10 col-sm-10 col-md-6 col-lg-6 col-xxl-6">
        <div className="card">
          <div className="card col-12">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {liststate.map((val, keyval) => {
                    return (
                      <tr key={keyval}>
                        <td scope="col">{keyval + 1}</td>
                        <td scope="col">{val.stuname}</td>
                        <td scope="col">{val.email}</td>
                        <td scope="col">
                          <Link className="Edit m-2" to={`/edit/${val.id}`}><i className="fa fa-bars mr-2"></i></Link>
                          <Link className="view m-2" to={`/view/${val.id}`}><i class="fa-sharp fa-solid fa-eye"></i></Link>
                          <a onClick={() => Delete(val.id)}><i className="fa fa-trash"></i></a></td>
                      </tr>
                    )
                  })}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default List
