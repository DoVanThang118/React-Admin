import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import {
    IconLogout,
    IconSubscription,
    // edit
    IconPresident,
    IconPersonnel,
    IconCreateAccount,
    IconRevenues,
    IconExpenses,
    //edit
} from 'assets/icons';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

    async function logout() {
        push(SLUGS.login);
    }

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id={SLUGS.dashboard}
                title='Dashboard'
                icon={IconSubscription}
                onClick={() => onClick(SLUGS.dashboard)}
            />
            {/* start edit */}
            <MenuItem
                id={SLUGS.staffs}
                title='Staffs'
                icon={IconPresident}
                onClick={() => onClick(SLUGS.staffs)}
            />

            <MenuItem
                id={SLUGS.users}
                title='Users'
                icon={IconPresident}
                onClick={() => onClick(SLUGS.users)}
            />

            <MenuItem
                id={SLUGS.positions}
                title='Position'
                icon={IconPresident}
                onClick={() => onClick(SLUGS.positions)}
            />

            <MenuItem
                id={SLUGS.departments}
                title='Departments'
                icon={IconPresident}
                onClick={() => onClick(SLUGS.departments)}
            />

            <MenuItem
                id={SLUGS.revenues}
                title='Revenues'
                icon={IconRevenues}
                onClick={() => onClick(SLUGS.revenues)}
            />
            <MenuItem
                id={SLUGS.expenses}
                title='Expenses'
                icon={IconExpenses}
                onClick={() => onClick(SLUGS.expenses)}
            />
            {/* end edit */}

            <div className={classes.separator}></div>

            <MenuItem id='logout' title='Logout' icon={IconLogout} onClick={logout} />
        </Menu>
    );
}

export default SidebarComponent;
