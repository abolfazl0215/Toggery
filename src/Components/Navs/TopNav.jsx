import React from 'react';
import { NavLink } from 'react-router-dom';

 
const TopNav = () => {
  
    return ( 
        <div>
            <div className="navbar-main nav pt-3 pb-1">
           
                <ul className="col-6 list-unstyled list-inline">
                    <li className="mr-5 mx-3 cp">
                        <NavLink to="/" className="text-decoration-none text-black">صفحه اصلی</NavLink>
                    </li>
                    <li  className="mx-3 cp">درباره ما</li>
                    <li  className="mx-3 cp">تماس باما</li>
                </ul>
                
                <div className="col-6 text-end link-nav">
 
                        <div className="ml-3">
                            <NavLink to="#" className="link">ورود</NavLink>
                            {" "}{"/"}{" "}
                            <NavLink to="#" className="link">عضویت</NavLink>
                        </div>
                </div>
           </div>
        </div>
     );
}
 
export default TopNav;
