import React, { useContext } from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarContext } from 'hooks/useSidebar';
import SLUGS from 'resources/slugs';

const useStyles = createUseStyles((theme) => ({
    container: {
        height: 40
    },
    name: {
        ...theme.typography.itemTitle,
        textAlign: 'right',
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    separator: {
        borderLeft: `1px solid ${theme.color.lightGrayishBlue2}`,
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2,
        '@media (max-width: 768px)': {
            marginLeft: 14,
            marginRight: 0
        }
    },
    title: {
        ...theme.typography.title,
        '@media (max-width: 1080px)': {
            marginLeft: 50
        },
        '@media (max-width: 468px)': {
            fontSize: 20
        }
    },
    iconStyles: {
        cursor: 'pointer',
        marginLeft: 25,
        '@media (max-width: 768px)': {
            marginLeft: 12
        }
    }
}));

function HeaderComponent() {
    const { currentItem } = useContext(SidebarContext);
    const theme = useTheme();
    const classes = useStyles({ theme });

    let title;
    switch (true) {
        case currentItem === SLUGS.dashboard:
            title = 'Dashboard';
            break;
        // edit
        case currentItem === SLUGS.staffs:
            title = 'Staffs';
            break;
        case currentItem === SLUGS.users:
            title = 'Users';
            break;
        case currentItem === SLUGS.positions:
            title = 'Position';
            break;
        case currentItem === SLUGS.departments:
            title = 'Department';
            break;
        case currentItem === SLUGS.revenues:
            title = 'Revenues';
            break;
        case currentItem === SLUGS.expenses:
            title = 'Expenses';
            break;
        //end edit
        default:
            title = '';
    }


    return (
        <Row className={classes.container} vertical='center' horizontal='space-between'>
            <span className={classes.title}>{title}</span>
            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Revenues">
                Create {title}
            </button> */}
        </Row>
    );
}

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;
