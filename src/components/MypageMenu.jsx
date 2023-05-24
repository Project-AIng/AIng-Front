import React from 'react';
import { Link,Route,Routes } from 'react-router-dom';
import Mypage from '../pages/Mypage';
import Deep from '../pages/Deep';
import './css/MypageMenu.css';


export default function MypageMenu() {
    return (
        <div className='MyContainer'>
            <div className='MyPageMenuBar'>
                <div className='p-2'>마이 페이지</div>
                <div className='p-3 h-10 w-20 hover:bg-gray-200'>
                    <Link to="MyPage">내 정보</Link></div>
                <div className='p-3 h-10 w-20 hover:bg-gray-200'>
                    <Link to="Deep">분석</Link></div>
            </div>
                <div className='MyPageContent'>
                <div className='p-2'>
                    <Routes>
                        <Route path="MyPage" element={<Mypage/>}/>
                        <Route path="Deep" element={<Deep/>}/>
                        <Route/>
                    </Routes>
                </div> 
            </div>
        </div>
    );
}

