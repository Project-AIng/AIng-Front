import React from 'react';
import { useLocation } from 'react-router-dom';
import Room from "../components/Room";

export default function Chat() {
    const {state: {topic}, // topic 값 추출 
    }=useLocation();
    return (
        <div className='text-black'>
            {topic}에 대해서 CHAT 
            <br></br>
            <Room/>
        </div>
    );
}

