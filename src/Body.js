import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";
import NotFound from "./NotFound";

function Body() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/profiles/*" element={<Profiles/>} />
            <Route path="/history" element={<HistorySample/>} />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default Body;