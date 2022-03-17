import React from 'react'
import cn from 'classnames'
import styles from './Buttons.module.scss'

interface Props {
    name: string;
    type: 'fill' | 'border'
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Buttons:React.FC<Props> = ({
    name,
    type,
    handleClick,
}) => {
    const buttonsClassName = cn({
        [styles['container']]: true,
        [styles['fill']]: type === 'fill',
        [styles['border']]: type === 'border',
    })

    return (
        <div className={buttonsClassName}>
            <button onClick={(event) => {handleClick(event)}}>
                {name}
            </button>
        </div>
    )
}

export default Buttons