import React from 'react'

import {ReactComponent as Circle} from '../../assets/icons/circle.svg'
import styles from './Status.module.scss'

interface Props {
    name: string,
}

const Status: React.FC<Props> = ({
    name,
}) => {


    let type: string = '';

    switch (name) {
        case('Đã sử dụng'): {
            type = 'indigo';
            break;
        }
        case('Chưa sử dụng'): {
            type = 'green';
            break;
        }
        case('Đang áp dụng'): {
            type = 'green';
            break;
        }
        case('Hết hạn'): {
            type = 'red';
            break;
        }
        case('Tắt'): {
            type = 'red';
            break;
        }
        default: {
            break;
        }
    }



    return (
            <div className={`${styles[type]}`}>
                <Circle className={`${styles['circle']}`}/>
                {name}
            </div>
    )
}

export default Status