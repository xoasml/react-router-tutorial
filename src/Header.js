import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <ul>
            <li>
                <Link to="/">홈</Link>
            </li>
            <li>
                <Link to="/about">소개</Link>
            </li>
            <li>
                <Link to="/profiles">프로필 목록</Link>
            </li>
            <li>
                <Link to="/history">예제</Link>
            </li>
        </ul>
    );
}

export default Header;