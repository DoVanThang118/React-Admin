import React, { useState, useEffect } from "react";
import { get } from "../services/staffs.service";

const Staffs = () => {

  const [staff, setStaff] = useState([]);
  const getStaff = async () => {
    const staff = await get();
    setStaff(staff)
  }
  useEffect(() => {
    getStaff();

}, []);


  return (
    <section>
      <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Stt</th>
                        <th scope="col">Name</th>
                        <th scope="col">Role</th>
                        <th scope="col">Birthday</th>
                        <th scope="col">Address</th>
                        <th scope="col">Telephone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Permissions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        staff.map((e, k) => {
                            return (
                                <tr key={k}>
                                    <td>{k + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.role}</td>
                                    <td>{e.birthday}</td>
                                    <td>{e.address}</td>
                                    <td>{e.telephone}</td>
                                    <td>{e.email}</td>
                                    <td>{e.password}</td>
                                    <td>{e.permissions}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    </section>
  );
}
export default Staffs;