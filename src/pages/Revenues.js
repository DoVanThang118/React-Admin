import React, { useState, useEffect } from "react";
import { create_revenues, get } from "../services/revenues.service";
import UserContext from "../store/context";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Revenues = (props) => {
    const { push } = useHistory();
    //const { state, dispatch } = useContext(UserContext);
    const [revenues, setRevenues] = useState({ name: "" });
    //const [revenues, setRevenues] = useState({name: "", createdat: Date.now});
    const handleInput = (event) => {
        revenues[event.target.name] = event.target.value;
        setRevenues(revenues);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const r = await create_revenues(revenues);
        console.log(r);
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
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Revenues">
                    Create Revenues
                </button>
                <form onSubmit={handleSubmit}>
                    <div className="modal fade" id="Revenues" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Form Revenues</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="row g-3">
                                        <input type="text" onChange={handleInput} placeholder="name revenues" className="form-control" required />
                                    </div>
                                    <div className="row g-3 mt-1">
                                        <input type="number" onChange={handleInput} placeholder="status" className="form-control" required />
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
                                        <Link to={"/revenues/" + e.id}>
                                            <button type="button" className="btn btn-danger btn-sm" data-bs-toggle="modal">
                                                Action
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}

export default Revenues;