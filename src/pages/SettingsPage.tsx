import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
import ReactPaginate from 'react-paginate'

import {ReactComponent as NextButton} from '../assets/icons/nextButton.svg'
import {ReactComponent as BackButton} from '../assets/icons/backButton.svg'

import styles from './SettingsPage.module.scss'

import Status from '../components/Status/Status'
import SearchBar from '../components/SearchBar/SearchBar'
import Buttons from '../components/Buttons/Buttons'
import AddTicketPack from '../components/Poppers/AddTicketPack'

import {packageProps} from '../interfaces/dataTypes'
import {getPackagePage} from '../firebase/config'

const SettingsPage = () => {

    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isAdjustOpen, setIsAdjustOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [pack, setPack] = useState([{} as packageProps]);

    //Change Items displayed per page here
    const itemPerPage = 12;

    const [indexCurrentPage, setIndexCurrentPage] = useState(Array.from(Array(itemPerPage).keys()));

    const [currentItems, setCurrentItems] = useState([{} as packageProps]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const loadPost = async () => {
        // Till the pack is fetch using API
        // the Loading page will show.
        setLoading(true);

        // Await make wait until that
        // promise settles and return its reult
        let response = await getPackagePage();

        // After fetching pack stored it in posts state.
        setPack(response);

        // Closed the loading page
        setLoading(false);
        };
        // Call the function
        loadPost();
    }, []);

    useEffect(() => {
        const endOffset = itemOffset + itemPerPage;
        setCurrentItems(pack.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(pack.length / itemPerPage));
    }, [itemOffset, pack]);

    const handlePageClick = (gotoPage: number) => {
        const newOffset = (gotoPage * itemPerPage) % pack.length;
        const start = gotoPage * itemPerPage;

        setIndexCurrentPage(Array.from(Array(itemPerPage).keys()).map((current, index) => {
            return start + index + 1;
        }))
        setItemOffset(newOffset);
    };

    return (
        <div className={`${styles['container']}`}>
            <h1 className={`${styles['title']}`}>
                Danh sách gói vé
            </h1>

            <div className={`${styles['headFlex']}`}>
                <SearchBar type="secondary" placeholder="Tìm bằng số vé"/>
                <div className={`${styles['buttonsFlex']}`}>
                    <Buttons
                        type='border' 
                        name='Xuất file (.csv)'
                        handleClick={(event) => {}}    
                    />
                    <Buttons 
                        type="fill" 
                        name="Thêm gói vé"
                        handleClick={(event) => {setIsAddOpen(true)}}
                    />
                </div>
            </div>
            
            <div className={`${styles['tableContainer']}`}>
                {loading 
                ? <Skeleton/>
                :(
                <table className={`${styles['table']}`}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã gói</th>
                            <th>Tên gói vé</th>
                            <th>Ngày áp dụng</th>
                            <th>Ngày hết hạn</th>
                            <th>Giá vé (VNĐ/Vé)</th>
                            <th>Giá Combo (VNĐ/Combo)</th>
                            <th>Tình trạng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {currentItems.map((doc, index) => {
                            return(
                                <tr>
                                    <td>{indexCurrentPage[index]}</td>
                                    <td>{doc.code}</td>
                                    <td>{doc.name}</td>
                                    <td>{new Date(doc.dateMade).toLocaleDateString()}</td>
                                    <td>{new Date(doc.dateExpire).toLocaleDateString()}</td>
                                    <td>{doc.priceSingle}</td>
                                    <td>{doc.priceCombo}</td>
                                    <td><Status name={doc.status}/></td>
                                    <td>
                                        <Buttons
                                            type="borderless" 
                                            name="Cập nhật"
                                            handleClick={(event) => {setIsAdjustOpen(true)}}
                                        />
                                    </td>
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

            <AddTicketPack isAdd isThisOpen={isAddOpen} setIsThisOpen={setIsAddOpen}/>
            <AddTicketPack isAdd={false} isThisOpen={isAdjustOpen} setIsThisOpen={setIsAdjustOpen}/>
        </div>
    )
}

export default SettingsPage