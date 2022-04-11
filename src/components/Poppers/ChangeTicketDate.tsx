import React from 'react'

import Buttons from '../Buttons/Buttons'
import styles from './ChangeTicketDate.module.scss'

interface Props {
    isThisOpen: boolean,
    setIsThisOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ChangeTicketDate: React.FC<Props> = ({
    isThisOpen,
    setIsThisOpen,
}) => {

    return (
        <div>
            {isThisOpen 
            ? (<div>
                    <div className={`${styles['container']}`}>
                        <h1 className={`${styles['title']}`}>
                            Đổi ngày sử dụng vé
                        </h1>
                        <div className={`${styles['infoFlex']}`}>
                            <div>
                                <h2>Số vé</h2>
                                <h2>Loại vé</h2>
                                <h2>Tên sự kiện</h2>
                                <h2>Hạn sử dụng</h2>
                            </div>
                            <div>
                                <h2>Ticket.number</h2>
                                <h2>Ticket.type</h2>
                                <h2>Ticket.event</h2>
                                <h2>Ticket.date</h2>
                            </div>
                        </div>
                        <div className={`${styles['buttonsFlex']}`}>
                            <Buttons
                                type='border' 
                                name='Hủy'
                                handleClick={(event) => {setIsThisOpen(false)}}    
                            />
                            <Buttons
                                type='fill' 
                                name='Lưu'
                                handleClick={(event) => {}}    
                            />
                        </div>
                    </div>
                    <Buttons
                        type='shadow' 
                        name=''
                        handleClick={(event) => {setIsThisOpen(false)}}    
                    />
                </div>) 
            : ''}
        </div>
    )
}

export default ChangeTicketDate