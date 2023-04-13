import React from 'react';
import Topic from '../components/Topic';
import './TopicChoice.css';

export default function TopicChoice() {
    return (
        <>
        <h1>주제를 선택해주세요!</h1>
        <div className='TopicChoiceContainer'>
        <Topic id='1' topic='영화' emoticon='📽️'/>
        <Topic id='2' topic='어린시절' emoticon='👧🏻'/>
        <Topic id='3' topic='음악' emoticon='🎧'/>
        <Topic id='4' topic='패션' emoticon='🛍️'/>
        <Topic id='5' topic='음식' emoticon='🍚'/>
        <Topic id='6' topic='사랑' emoticon='💓'/>
    
        </div>
        </>
    );
}

