import React, { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import TopNav from './../Navs/TopNav';
import Paging from './Paging';


const Section1 = () => {
    const scrollPageCircles = useSelector(state => state.scrollPageCircle)

    return ( 
        <div>
            
                <div className="section-container">  
                    <div className={scrollPageCircles ? "section-box spinner" : "section-box"}>
                        <div className="section1">
                            <TopNav/>
                            <Paging/>
                            <div id="parallax">
                                <h1 id="brand">Plus</h1>
                            </div>
                        </div>
                        <div className="section2" style={{backgroundColor:"red"}}>
                            <TopNav/>
                            <Paging/>
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default Section1;
