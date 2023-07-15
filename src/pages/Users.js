import React, { useState, useEffect } from "react";
import { create_users, get, remove_users } from "../services/users.service";


const Users = (props) => {
    //const { state, dispatch } = useContext(UserContext);
    const [users, setUsers] = useState({ name: "", birthday: "", address: "", email: "", password: "", telephone: "", role: "", permissions: "", });
    //const [revenues, setRevenues] = useState({name: "", createdat: Date.now});
    const handleInput = (event) => {
        users[event.target.name] = event.target.value;
        setUsers(users);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const r = await create_users(users);
        console.log(r);
    }

    //const { id } = useParams();
    const deleteUsers = async (id) => {
        await remove_users(id);
    }

    const [list, setList] = useState([]);
    const getList = async () => {
        const list = await get();
        setList(list)
    }

    const handlePermissions = (e) => {
        const b = e.target.value;
        setUsers({ ...users, permissions: b });
    }

    const [optionPermissions, setOptionPermissions] = useState([]);
    const getBrandType = async () => {
        const op = await get();
        setOptionPermissions(op);
    }

    useEffect(() => {
        getList();
        getBrandType();
    }, []);

    return (
        <section>
            <div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Users">
                    Create Users
                </button>
                <form onSubmit={handleSubmit}>
                    <div className="modal fade" id="Users" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Form Users</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="row g-3">
                                        <input type="text" name="name" onChange={handleInput} placeholder="name" className="form-control" required />
                                    </div>
                                    <div className="row g-3 mt-1">
                                        <input type="date" name="birthday" onChange={handleInput} placeholder="birthday" className="form-control" required />
                                    </div>
                                    <div className="row g-3 mt-1">
                                        <input type="text" name="address" onChange={handleInput} placeholder="address" className="form-control" required />
                                    </div>
                                    <div className="row g-3 mt-1">
                                        <input type="text" name="email" onChange={handleInput} placeholder="email" className="form-control" required />
                                    </div>
                                    <div className="row g-3 mt-1">
                                        <input type="password" name="password" onChange={handleInput} placeholder="password" className="form-control" required />
                                    </div>
                                    <div className="row g-3 mt-1">
                                        <input type="number" name="telephone" onChange={handleInput} placeholder="telephone" className="form-control" required />
                                    </div>
                                    <div className="row g-3 mt-1">
                                        <input type="text" name="role" onChange={handleInput} placeholder="role" className="form-control" required />
                                    </div>
                                    <div className="row g-3 mt-1">
                                        <input type="text" name="permissions" onChange={handlePermissions} placeholder="permissions" className="form-control" required />
                                    </div>
                                    <div className="row g-3 mt-1">
                                        <select onChange={handlePermissions} className="form-select">
                                            <option selected>select permissions</option>
                                            {optionPermissions.map((e, k) => (
                                                <option value={e.id}>{e.name}</option>
                                            ))}
                                        </select>
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
                                    <td>{e.status}</td>
                                    <td>
                                        <section>
                                            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                                <div className="btn-group" role="group" aria-label="Third group">
                                                    <button onClick={deleteUsers(e.id)} type="button" className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#Delete">Delete</button>
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
                                    <button type="button" onClick={deleteUsers} className="btn btn-danger">Delete</button>
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

export default Users;