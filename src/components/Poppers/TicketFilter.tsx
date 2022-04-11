import React from 'react'

import Buttons from '../Buttons/Buttons'
import styles from './TicketFilter.module.scss'

interface Props {
    isThisOpen: boolean,
    setIsThisOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const TicketFilter: React.FC<Props> = ({
    isThisOpen,
    setIsThisOpen,
}) => {
    return (
        <div>
            {isThisOpen 
            ? ( <div>
                    <div className={`${styles['container']}`}>
                        <h1>This is Ticket Filter Component</h1>
                        <div>
                        <div className={`${styles['dateFlex']}`}>
                            <div>
                                <h2>
                                    From date 
                                </h2>
                                <input type="date" />
                            </div>
                            <div>
                                <h2>
                                    To date
                                </h2>
                                <input type="date" />
                            </div>
                        </div>
                            <h2>
                                Status
                            </h2>
                            <form action="">
                                <input type="radio" />
                                <label>All</label>
                                <input type="radio" />
                                <label>Used</label>
                                <input type="radio" />
                                <label>Not used</label>
                                <input type="radio" />
                                <label>Expired</label>
                            </form>
                            <h2>
                                Gate
                            </h2>
                            <input type="checkbox" />
                            <label>All</label>
                            <input type="checkbox" />
                            <label>Gate 1</label>
                            <input type="checkbox" />
                            <label>Gate 2</label>
                            <br />
                            <input type="checkbox" />
                            <label>Gate 3</label>
                            <input type="checkbox" />
                            <label>Gate 4</label>
                            <input type="checkbox" />
                            <label>Gate 5</label>
                        </div>
                        <Buttons
                            type='border'
                            name='Lọc'
                            handleClick={()=>{}}
                        />
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

export default TicketFilter