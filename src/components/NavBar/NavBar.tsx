import React, {useState} from 'react'
import cn from 'classnames'
import styles from './NavBar.module.scss'

import { useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg'
import NavTabs from './NavTabs'

interface Props {
    className?: string,
}

const NavBar: React.FC<Props> = ({
    className="",
}) => {
    const navbarClassName = cn({
        [styles['container']]: true,
    })

    const location = useLocation();
    const navigate = useNavigate();

    const getActiveTabName = (pathname: string) => {
        switch(pathname) {
            case '/SettingsPage':
                return 'Settings';
            case '/TicketPage':
                return 'Ticket';
            case '/InvoicePage':
                return 'Invoice';
            default:
                return 'Home';
        }
    }

    const [activeTab, setActiveTab] = useState(
        getActiveTabName(location.pathname)
    );
    
    const navTabs: {title: string}[] = [
        {title: 'Home'},
        {title: 'Ticket'},
        {title: 'Invoice'},
        {title: 'Settings'},
    ];

    const changePage = (title: string) => {
        setActiveTab(getActiveTabName('/' + title))
        let toPage = '../';
        if (title !== 'HomePage') {
            toPage = toPage + title;
        }
        navigate(toPage, {replace: true})
    }

    return (
        <div >
            <LogoIcon />
            <div className={navbarClassName}>
                {navTabs.map((tab, index) => (
                    <NavTabs
                        key={index}
                        title = {tab.title}
                        isActive = {activeTab === tab.title}
                        handleClick={(event, toPage) => {changePage(toPage)}}
                    />
                ))}
            </div>
        </div>
    )
}

export default NavBar;