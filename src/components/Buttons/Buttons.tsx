import React from 'react'
import cn from 'classnames'
import styles from './Buttons.module.scss'
import {ReactComponent as Dots} from '../../assets/icons/dots.svg'
import {ReactComponent as Filter} from '../../assets/icons/filter.svg'
import {ReactComponent as Edit} from '../../assets/icons/edit.svg'
interface Props {
    name: string;
    type: 'fill' | 'border' | 'shadow' | 'dots' | 'borderless'
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
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
        [styles['shadow']]: type === 'shadow',
        [styles['dots']]: type === 'dots',
        [styles['borderless']]: type === 'borderless',
    })

    return (
            <button onClick={(event) => {handleClick(event)}} className={buttonsClassName}>
                {type === 'dots' ? (<Dots />) : null}
                {name === 'Lọc vé' ? (<Filter />) : null}
                {name === 'Cập nhật' ? (<Edit />) : null}
                {name}
            </button>
    )
}

export default Buttons