import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import ReactPaginate from 'react-paginate'

import {ReactComponent as NextButton} from '../assets/icons/nextButton.svg'
import {ReactComponent as BackButton} from '../assets/icons/backButton.svg'

import styles from "./TicketPage.module.scss";

import Status from "../components/Status/Status";
import SearchBar from "../components/SearchBar/SearchBar";
import TicketFilter from "../components/Poppers/TicketFilter";
import ChangeTicketDate from "../components/Poppers/ChangeTicketDate";
import Buttons from "../components/Buttons/Buttons";

import {dataProps} from '../interfaces/dataTypes'
import {getDataPage} from '../firebase/config'

const TicketPage = () => {
    const [isChangeDateOpen, setIsChangeDateOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
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
        <div className={`${styles["container"]}`}>
            <h1 className={`${styles["title"]}`}>Danh sách vé</h1>
                <div className={`${styles["headFlex"]}`}>
                    <SearchBar type="secondary" placeholder="Tìm bằng số vé" />
                    <div className={`${styles["buttonsFlex"]}`}>
                    <Buttons
                        type="border"
                        name="Lọc vé"
                        handleClick={(event) => {
                            setIsFilterOpen(true);
                        }}
                    />
                    <Buttons
                        type="border"
                        name="Xuất file (.csv)"
                        handleClick={(event) => {}}
                    />
                    </div>
                </div>
            {loading
            ? <Skeleton />
            : (<div>
                <div className={`${styles["tableContainer"]}`}>
                    <table className={`${styles["table"]}`}>
                    <thead>
                        <tr>
                        <th>STT</th>
                        <th>Booking code</th>
                        <th>Số vé</th>
                        <th>Tên sự kiện</th>
                        <th>Tình trạng sử dụng</th>
                        <th>Ngày sử dụng</th>
                        <th>Ngày xuất vé</th>
                        <th>Cổng check - in</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => {
                            return(
                                <tr>
                                    <td>{indexCurrentPage[index]}</td>
                                    <td>{item.code}</td>
                                    <td>{item.number}</td>
                                    <td>{item.event}</td>
                                    <td><Status name={item.status}/></td>
                                    <td>{new Date(item.dateUse).toLocaleDateString()}</td>
                                    <td>{new Date(item.dateMade).toLocaleDateString()}</td>
                                    <td>{item.gate}</td>
                                    <td>
                                        {(item.status === "Chưa sử dụng")
                                        ? (<Buttons
                                            type="dots"
                                            name=""
                                            handleClick={(event) => {setIsChangeDateOpen(true)}}
                                        />)
                                        : null}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </table>
                </div>

                <TicketFilter isThisOpen={isFilterOpen} setIsThisOpen={setIsFilterOpen} />
                <ChangeTicketDate
                    isThisOpen={isChangeDateOpen}
                    setIsThisOpen={setIsChangeDateOpen}
                />
            </div>)
            }
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
    );
};

export default TicketPage;