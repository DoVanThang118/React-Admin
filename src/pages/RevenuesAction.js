import React, { useContext, useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { find, edit_revenues, remove_revenues } from "../services/revenues.service";
import { useParams } from "react-router-dom";
import SLUGS from '../resources/slugs';


const RevenuesAction = (props) => {
    const { push } = useHistory();
    const { id } = useParams();
    //const { state, dispatch } = useContext(UserContext);
    const [r, setR] = useState({});
    const [revenues, setRevenues] = useState({ name: "" });
    //const [revenues, setRevenues] = useState({name: "", createdat: Date.now});
    const handleInput = (event) => {
        revenues[event.target.name] = event.target.value;
        setRevenues(revenues);
    }


    const findRevenues = async () => {
        const r = await find(id);
        setR(r);
        setRevenues({ ...revenues, name: r.name });
    }

    useEffect(() => {
        findRevenues();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const r = await edit_revenues(revenues);
        console.log(r);
    }

    const deleteRevenues = async (id) => {
        await remove_revenues(id);
    }

    const back = async () => {
        push(SLUGS.revenues);
    }
    return (
        <section>
            <div>
                <button type="button" onClick={back} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Revenues">
                    Back Revenues
                </button>
            </div>
            <form onSubmit={handleSubmit}>
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
                        <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">Update</button>
                        <button type="button" className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#Delete">Delete</button>
                    </div>
                </div>
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
                                <button type="button" onClick={deleteRevenues} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal */}
            </form>
        </section>
    )
}

export default RevenuesAction;