import React from 'react';
import {useLocation} from "react-router-dom";

function NotFound() {
    const location = useLocation();

    return (
        <div>
             <h2>이 페이지는 존재하지 않습니다.</h2>
             <p>{location.pathname}</p>
         </div>
    );
}

export default NotFound;