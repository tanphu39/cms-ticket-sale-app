import React, {useState, useEffect} from 'react'

import styles from './HomePage.module.scss'


import {getData} from '../firebase/config'

const HomePage = () => {

    
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

        useEffect(() => {
            const loadPost = async () => {
    
                // Till the data is fetch using API 
                // the Loading page will show.
                setLoading(true);
    
                // Await make wait until that 
                // promise settles and return its reult
                const response = await getData()
    
                // After fetching data stored it in posts state.
                setPosts(response);
    
                // Closed the loading page
                setLoading(false);
            }
    
            // Call the function
            loadPost();
        }, []);


    return (
        <div className={`${styles['container']}`}>
            {/* <h1 className={`${styles['title']}`}>Thống kê</h1>
            <div>
                <div>
                    <h2>Doanh thu</h2>

                    <p>Tổng doanh thu theo tuần</p>
                    <h1>525.145.000<span>đồng</span></h1>
                </div>
            </div>
            <div>

            </div> */}
            {loading? (<p>Loading</p>) : `${posts}`}
            {/* {posts} */}
        </div>
    )
}

export default HomePage