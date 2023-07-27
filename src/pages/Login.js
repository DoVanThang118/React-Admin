import React, { useContext, useState } from "react";
import UserContext from "../store/context";
import { auth_login } from "../services/auth.service";
import { createUseStyles } from 'react-jss';
import background from "../assets/images/background.jpg";

import api from "../services/api";

import { useHistory } from 'react-router-dom'; // demo
import SLUGS from '../resources/slugs'; // demo


const useStyles = createUseStyles({
    all: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    section: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    login: {
        position: 'relative',
        width: '400px',
        height: '450px',
        background: 'transparent',
        border: '2px solid rgba(225,225,225,0.5)',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundFilter: 'blur(15px)',
        color: 'white',
    }
})

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

    const classes = useStyles();

    return (
        <section className={classes.section}>
            <div className={classes.login}>
                <form onSubmit={loginSubmit} method="post">
                    <h1 className="mb-5" style={{textAlign: 'center'}}><b>LOGIN</b></h1>

                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-4 col-form-label">Email</label>
                        <div class="col-sm-8">
                            <input type="email" name="email" onChange={handleInput} class="form-control" id="inputEmail3"/>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-4 col-form-label">Password</label>
                        <div class="col-sm-8">
                            <input type="password" name="password" onChange={handleInput} class="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-4 mt-4 mx-auto">
                    <button className="btn btn-primary" type="button">Login</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Login;