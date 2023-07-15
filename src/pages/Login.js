import React, { useContext, useState } from "react";
import UserContext from "../store/context";
import { auth_login } from "../services/auth.service";
import api from "../services/api";

import { useHistory } from 'react-router-dom'; // demo
import SLUGS from '../resources/slugs'; // demo

const Login = (props) => {
    const { push } = useHistory();

    const { state, dispatch } = useContext(UserContext);
    const [user, setUser] = useState({ email: "", password: "" });
    const handleInput = (event) => {
        user[event.target.name] = event.target.value;
        setUser(user);
    }
    const loginSubmit = async (e) => {
        e.preventDefault();
        const u = await auth_login(user);
        dispatch({ type: "AUTH_LOGIN", payload: u.token });
        state.token = u.token;
        localStorage.setItem("state", JSON.stringify(state));
        api.defaults.headers.common["Authorization"] = `Bearer ${u.token}`;

        push(SLUGS.dashboard); //demo
    }

    return (
        <section>
            <div className='container'>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <form onSubmit={loginSubmit} method="post">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" onChange={handleInput} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" onChange={handleInput} name="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="d-grid gap-2 col-4 mx-auto">
                                <button className="btn btn-primary" type="button">Login</button>
                            </div>
                        </form></div>
                    <div className="col-3"></div>
                </div>
            </div>
        </section>
    );
}
export default Login;