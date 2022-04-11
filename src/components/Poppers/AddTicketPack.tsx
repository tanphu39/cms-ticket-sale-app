import React from 'react'

import Buttons from '../Buttons/Buttons'
import styles from './AddTicketPack.module.scss'

interface Props {
    isAdd: boolean,
    isThisOpen: boolean,
    setIsThisOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AddTicketPack: React.FC<Props> = ({
    isAdd,
    isThisOpen,
    setIsThisOpen,
}) => {


    const Adding = () => {
        return (<div>
            <h1 className={`${styles['title']}`}>Thêm gói vé</h1>
            <h2>
                Tên gói vé <span>*</span>
            </h2>
            <input type="text" placeholder="Nhập tên gói vé" className={`${styles['input--border']}`}/>
        </div>)
    }

    const Adjusting = () => {
        return (<div>
            <h1 className={`${styles['title']}`}>Cập nhật thông tin gói vé</h1>
            <div className={`${styles['adjustFlex']}`}>
                <div>
                    <h2>
                        Mã sự kiện <span>*</span>
                    </h2>
                    <input type="text" placeholder="Nhập tên gói vé" className={`${styles['input--border']}`}/>
                </div>
                <div>
                    <h2>
                        Tên sự kiện<span>*</span>
                    </h2>
                    <input type="text" placeholder="Nhập tên gói vé" className={`${styles['input--border']}`}/>
                </div>
            </div>
        </div>)
    }

    return (
        <div>

            {isThisOpen?
            (<div>
                <div className={`${styles['container']}`}>
                    {isAdd 
                        ? <Adding />
                        : <Adjusting />
                    }
                    <div className={`${styles['dateFlex']}`}>
                        <div>
                            <h2>Ngày áp dụng</h2>
                            <input type="date" className={`${styles['input--date']}`}/>
                            <input type="time" className={`${styles['input--date']}`}/>
                        </div>
                        <div>
                            <h2>Ngày hết hạn</h2>
                            <input type="date" className={`${styles['input--date']}`}/>
                            <input type="time" className={`${styles['input--date']}`}/>
                        </div>
                    </div>
                    <h2>
                        Giá vé áp dụng
                    </h2>
                    <div className={`${styles['priceFlex']}`}>
                        <input type="checkbox" className={`${styles['checkbox']}`}/>
                        <p> Vé lẻ (vnđ/vé) với giá </p>
                        <input type="text" placeholder="Giá vé" className={`${styles['input--fill']}`}/>
                        <p> / vé</p>
                    </div>
                    <div className={`${styles['priceFlex']}`}>
                        <input type="checkbox" className={`${styles['checkbox']}`}/>
                        <p> Combo vé với giá </p>
                        <input type="text" placeholder="Giá vé" className={`${styles['input--fill']}`}/>
                        <p> / </p>
                        <input type="text" placeholder="Giá vé" className={`${styles['input--fill']}`}/>
                        <p> vé</p>
                    </div>
                    <h2>
                        Tình trạng
                    </h2>
                    <select id="cars" name="cars" className={`${styles['input--dropdown']}`}>
                        <option value="applying">Đang áp dụng</option>
                        <option value="ended">Đã kết thúc</option>
                    </select>
                    <p><span>*</span> Là thông tin bắt buộc</p>
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
            : ''
            }
        </div>
    )
}

export default AddTicketPack