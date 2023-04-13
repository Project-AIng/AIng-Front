import React from 'react';
import { useLocation } from 'react-router-dom';
export default function Test() {
    const {state: {topic}, // topic 값 추출 
    }=useLocation();
    return (
        <div className='text-black'>
            {topic}에 대해서 테스트 하기
            <br></br>
            Test PAGE
        </div>
    );
}

