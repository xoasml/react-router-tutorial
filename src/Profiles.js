import React from 'react';
import Profile from "./Profile";
import {NavLink, Route, Routes} from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

function Profiles() {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink
                        to="/profiles/choc"
                        style={({isActive}) => (isActive ? {background: 'black', color: 'white'} : undefined)}
                    >
                        choc
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/profiles/homer"
                        style={({isActive}) => (isActive ? {background: 'black', color: 'white'} : undefined)}
                    >
                        homer
                    </NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="" element={<div>사용자를 선택해주세요</div>}/>
                <Route path=":username" element={<Profile/>}/>
            </Routes>
            <WithRouterSample/>
        </div>
    );
}

export default Profiles;