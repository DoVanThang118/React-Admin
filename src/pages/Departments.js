import React, { useContext, useState, useEffect } from "react";
import { create_departments, get, remove_departments } from "../services/departments.service";
import { useParams } from "react-router-dom";
import UserContext from "../store/context";

import { useHistory } from 'react-router-dom'; // demo
import SLUGS from '../resources/slugs'; // demo

const Departments = (props) => {
    const { push } = useHistory();

    //const { state, dispatch } = useContext(UserContext);
    const [departments, setDepartments] = useState({name: "", coefficient: ""});
    //const [departments, setDepartments] = useState({name: "", createdat: Date.now});
    const handleInput = (event) => {
        departments[event.target.name] = event.target.value;
        setDepartments(departments);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const r = await create_departments(departments);
        console.log(r);
        
        //push(SLUGS.positions); //demo
    }

    const { id } = useParams();
    const deleteDepartments = async () => {
        await remove_departments(id);
    }

    const [list, setList] = useState([]);
    const getList = async () => {
        const list = await get();
        setList(list)
    }


    useEffect(() => {
        getList();

    }, []);

    return (
        <section>
            <div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Departments">
                    Create Departments
                </button>
                <form onSubmit={handleSubmit}>
                    <div className="modal fade" id="Departments" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Form Departments</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="row g-3">
                                        <input type="text" onChange={handleInput} placeholder="name departments" className="form-control" required />
                                    </div>
                                    <div className="row g-3 mt-1">
                                        <input type="number" onChange={handleInput} placeholder="coefficient" className="form-control" required />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Coefficient</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((e, k) => {
                            return (
                                <tr key={k}>
                                    <td>{k + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.coefficient}</td>
                                    <td>{e.status}</td>
                                    <td>
                                        <section>
                                            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">

                                                <div className="btn-group" role="group" aria-label="Third group">
                                                    <button type="button" className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#Delete">Delete</button>
                                                </div>
                                            </div>
                                        </section>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {/* Modal */}
                    <div className="modal fade" id="Delete">
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5">Delete</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <b>You are sure ?</b>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" onClick={deleteDepartments} className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Modal */}

                </tbody>
            </table>
        </section>
    )
}

export default Departments;