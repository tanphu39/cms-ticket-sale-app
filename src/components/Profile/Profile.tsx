import React from 'react'
import styles from './Profile.module.scss'
import cn from 'classnames'

import {ReactComponent as EmailIcon} from '../../assets/icons/mail.svg'
import {ReactComponent as BellIcon} from '../../assets/icons/bell.svg'
import ava from '../../assets/img/ava.png'

interface Props {
    className?: string
}

const Profile:React.FC<Props> = ({
    className=""
}) => {

    const profileClassName = cn({
        [styles["container"]]: true,
    })

    return (
        <div className={profileClassName}>
            <EmailIcon/>
            <BellIcon/>
            <img src={ava} alt="avatar" />
        </div>
    )
}

export default Profile