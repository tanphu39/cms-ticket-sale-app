import React from 'react'
import styles from './SearchBar.module.scss'
import cn from 'classnames'

interface Props {
    type: 'primary' | 'secondary'
    className?: string
    placeholder: string
}

const SearchBar: React.FC<Props>  = ({
    type='primary',
    className="",
    placeholder="",
}) => {
    const searchbarClassName = cn({
        [styles['primary']]: type === 'primary',
        [styles['secondary']]: type === 'secondary',
    })

    return (
        <div>
            <input type="text" placeholder={placeholder} className={searchbarClassName}/>
        </div>
    )
}

export default SearchBar