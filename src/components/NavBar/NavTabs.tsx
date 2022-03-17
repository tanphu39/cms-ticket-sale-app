import React from 'react'
import cn from 'classnames'
import styles from './NavTabs.module.scss'

import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg'
import { ReactComponent as InvoiceIcon } from '../../assets/icons/invoice.svg'
import { ReactComponent as SettingsIcon } from '../../assets/icons/setting.svg'
import { ReactComponent as TicketIcon } from '../../assets/icons/ticket.svg'

// import { ReactComponent as ListIcon } from '../../assets/icons/list.svg'
// import { ReactComponent as MonitorICon } from '../../assets/icons/monitor.svg'

interface Props {
    key: number;
    isActive: boolean,
    title: string,
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, toPage: string) => void
}

const NavTabs: React.FC<Props> = ({
    key,
    isActive,
    title,
    handleClick
}) => {

    const navtabsClassName = cn({
        [styles['container']]: true,
        [styles['isActive']]: isActive,
    })

    const getLogo = (title: string) => {
        switch(title) {
            case 'Home':
                return <HomeIcon />
            case 'Ticket':
                return <TicketIcon />
            case 'Invoice':
                return <InvoiceIcon />
            case 'Settings':
                return <SettingsIcon />
            default: 
                return <div></div>
        }
    }

    const getTitle = (title: string) => {
        switch(title) {
            case 'Home':
                return 'Trang chủ';
            case 'Ticket':
                return 'Quản lý vé';
            case 'Invoice':
                return 'Đối soát vé';
            case 'Settings':
                return 'Cài đặt';
            default: 
                return '';
        }
    }

    let Logo = getLogo(title);
    let userTitle = getTitle(title);
    let toPage = title + 'Page';
    
    return (
        <div className={navtabsClassName}>
            <button key={key} onClick={(event) => {handleClick(event, toPage)}}>
                {Logo}
                {userTitle}
            </button>
        </div>
    )
}

export default NavTabs