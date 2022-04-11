import React from 'react'
import styles from './SearchBar.module.scss'
import cn from 'classnames'
import {ReactComponent as Magnifier} from '../../assets/icons/magnifier.svg'

interface Props {
    type: 'primary' | 'secondary'
    placeholder: string
}

const SearchBar: React.FC<Props>  = ({
    type='primary',
    placeholder="",
}) => {
    const searchbarClassName = cn({
        [styles['container']]: true,
        [styles['primary']]: type === 'primary',
        [styles['secondary']]: type === 'secondary',
    })

    return (
        <div className={searchbarClassName}>
            <input type="text" placeholder={placeholder}/>
            <Magnifier/>
        </div>
    )
}

export default SearchBar