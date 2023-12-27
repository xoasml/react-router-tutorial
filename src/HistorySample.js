import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

function usePrompt(message, when) {

    useEffect(() => {
        if (!when) return;

        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = message;
        }

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload)
        }
    }, [message, when]);

}

function HistorySample() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    const goHome = () => {
        navigate('/');
    }

    const replaceToHome = () => {
        navigate('/', {replace: true});
    }

    usePrompt('정말 떠나실건가요?', true);

    return (
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
            <button onClick={replaceToHome}>홈으로(Replace)</button>
        </div>
    );
}

export default HistorySample;