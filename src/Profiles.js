import React from 'react';
import Profile from "./Profile";
import {Link, Route, Routes} from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

function Profiles() {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li><Link to="/profiles/choc">choc</Link></li>
                <li><Link to="/profiles/homer">homer</Link></li>
            </ul>
            <Routes>
                <Route path="" element={<div>사용자를 선택해주세요</div>}/>
                <Route path=":username" element={<Profile />} />
            </Routes>
            <WithRouterSample/>
        </div>
    );
}

export default Profiles;