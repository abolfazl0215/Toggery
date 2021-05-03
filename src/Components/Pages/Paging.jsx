import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { scrollPageCircle } from './../../Redux/actions/scrollPageCircle';

const Paging = () => {

    
    const dispatch = useDispatch()

    const [page1, setPage1]= useState(false);
    const [page2, setPage2]= useState(false);
    const [page3, setPage3]= useState(false);
    const [page4, setPage4]= useState(false);
    const [page5, setPage5]= useState(false);
    const handlePage1=()=>{
            setPage1(!page1);
            setPage2(false);
            setPage3(false);
            setPage4(false);
            setPage5(false);
        }

    const handlePage2=()=>{
        setPage2(!page2);
        setPage1(false);
        setPage3(false);
        setPage4(false);
        setPage5(false);
        dispatch(scrollPageCircle())
    }
    const handlePage3=()=>{
        setPage3(!page3);
        setPage1(false);
        setPage2(false);
        setPage4(false);
        setPage5(false);
    }
    const handlePage4=()=>{
        setPage4(!page4);
        setPage1(false);
        setPage2(false);
        setPage3(false);
        setPage5(false);
    }
    const handlePage5=()=>{
        setPage5(!page5);
        setPage1(false);
        setPage2(false);
        setPage3(false);
        setPage4(false);
    }
            

    
    return ( 
        <div className="paging">
            <ul className="list-unstyled">
                <li id="page1" className={page1 ? 'bg' : null } title="صفحه اول" onClick={handlePage1}></li>
                <li id="page2" className={page2 ? 'bg' : null } onClick={handlePage2} title="صفحه دوم"></li>
                <li id="page3" className={page3 ? 'bg' : null } title="صفحه سوم" onClick={handlePage3}></li>
                <li id="page4" className={page4 ? 'bg' : null } title="صفحه چهارم" onClick={handlePage4}></li>
                <li id="page5" className={page5 ? 'bg' : null } title="صفحه پنجم" onClick={handlePage5}></li>
            </ul>
        </div>
     );
}
 
export default Paging;