import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
import ReactPaginate from 'react-paginate'

import {ReactComponent as NextButton} from '../assets/icons/nextButton.svg'
import {ReactComponent as BackButton} from '../assets/icons/backButton.svg'
import SearchBar from '../components/SearchBar/SearchBar'
import Buttons from '../components/Buttons/Buttons'
import styles from './InvoicePage.module.scss'

import { getDataPage } from '../firebase/config'
import {dataProps} from '../interfaces/dataTypes'

const InvoicePage = () => { 

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([{} as dataProps]);
    //Change Items displayed per page here
    const itemPerPage = 12;

    const [indexCurrentPage, setIndexCurrentPage] = useState(Array.from(Array(itemPerPage).keys()));

    const [currentItems, setCurrentItems] = useState([{} as dataProps]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);
            let response = await getDataPage();
            setData(response);
            setLoading(false);
        };
        loadPost();
    }, []);

    useEffect(() => {
        const endOffset = itemOffset + itemPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemPerPage));
    }, [itemOffset, data]);

    const handlePageClick = (gotoPage: number) => {
        const newOffset = (gotoPage * itemPerPage) % data.length;
        const start = gotoPage * itemPerPage;

        setIndexCurrentPage(Array.from(Array(itemPerPage).keys()).map((current, index) => {
            return start + index + 1;
        }))
        setItemOffset(newOffset);
    };

    return (
        <div className={`${styles['container']}`}>
            <div className={`${styles['mainFlex']}`}>
                <h1 className={`${styles['title']}`}>Đối soát vé</h1>
                <div className={`${styles['headFlex']}`}>
                    <SearchBar type="secondary" placeholder="Tìm bằng số vé"/>
                    <Buttons
                        type='fill' 
                        name='Chốt đối soát'
                        handleClick={(event) => {}}    
                    />
                </div>
                <div className={`${styles['tableContainer']}`}>
                    {loading
                    ?<Skeleton/>
                    :(
                        <table className={`${styles['table']}`}>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Số vé</th>
                                <th>Tên sự kiện</th>
                                <th>Ngày sử dụng</th>
                                <th>Loại vé</th>
                                <th>Cổng check - in</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((doc, index) => {
                                return(
                                    <tr>
                                        <td>{indexCurrentPage[index]}</td>
                                        <td>{doc.number}</td>
                                        <td>{doc.event}</td>
                                        <td>{new Date(doc.dateUse).toLocaleDateString()}</td>
                                        <td>{doc.type}</td>
                                        <td>{doc.gate}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        </table>
                    )}
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel={<NextButton />}
                        pageRangeDisplayed={5}
                        marginPagesDisplayed={1}
                        onPageChange={(selectedItem) => handlePageClick(selectedItem.selected)}
                        pageCount={pageCount}
                        previousLabel={<BackButton/>}
                        renderOnZeroPageCount={undefined}
                        containerClassName={`${styles['paginateContainer']}`}
                        activeClassName={`${styles['activePage']}`}
                        pageClassName={`${styles['pages']}`}
                    />
                </div>
            </div>
            <div className={`${styles['filterFlex']}`}>
                <h1 className={`${styles['title']}`}>Lọc vé</h1>
                <select>
                    <option value="">Hội chợ triển lãm tiêu dùng 2021</option>
                </select>
                <div className={`${styles['formContainer']}`}>
                    <div>
                        <p>Tình trạng đối soát</p>
                        <p>Loại vé</p>
                        <p>Từ ngày</p>
                        <p>Đến ngày</p>
                    </div>
                    <div className={`${styles['inputContainer']}`}>
                        <input type="radio" />Tất cả
                        <input type="radio" />Đã đối soát
                        <input type="radio" />Chưa đối soát
                        <p>Vé cổng</p>
                        <input type="date" />
                        <input type="date" />
                    </div>
                </div>
                <Buttons
                    type='border'
                    name='Lọc'
                    handleClick={(event) => {}}
                />
            </div>
        </div>
    )
}

export default InvoicePage