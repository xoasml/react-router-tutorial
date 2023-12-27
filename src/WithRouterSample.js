import React from 'react';
import {useLocation, useParams, useNavigate} from 'react-router-dom';
const WithRouterSample = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
        <div>
            <h4>params</h4>
            <textarea readOnly value={JSON.stringify(params)} />
            <h4>location</h4>
            <textarea readOnly value={JSON.stringify(location, null, 2)} />
            <h4>navigate</h4>
            <button onClick={()=> navigate('/')}>홈으로</button>
        </div>
    );
};

export default WithRouterSample;