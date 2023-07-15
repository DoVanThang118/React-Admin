import React, { useEffect, useState } from 'react';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { auth_profile } from "../../services/auth.service";

const useStyles = createUseStyles((theme) => ({
    avatar: {
        height: 35,
        width: 35,
        minWidth: 35,
        borderRadius: 50,
        marginLeft: 14,
        border: `1px solid ${theme.color.lightGrayishBlue2}`,
        '@media (max-width: 768px)': {
            marginLeft: 14
        }
    },
    container: {
        marginLeft: 32,
        marginRight: 32
    },
    title: {
        ...theme.typography.cardTitle,
        color: theme.color.grayishBlue,
        opacity: 0.7,
        marginLeft: 12
    }
}));

function LogoComponent() {
    const theme = useTheme();
    const classes = useStyles({ theme });

    const [user, setUser] = useState({});
    const getProfile = async () => {
        const u = await auth_profile();
        setUser(u);
    }
    useEffect(() => {
        getProfile();
    }, []);


    return (
        <Row className={classes.container} horizontal='center' vertical='center'>
            
            <img
                src='https://avatars3.githubusercontent.com/u/21162888?s=460&v=4'
                alt='avatar'
                className={classes.avatar}
            />
            <span className={classes.title}>{(user.name)==null?"Dashboard":(user.name)}</span>
        </Row>
    );
}

export default LogoComponent;
