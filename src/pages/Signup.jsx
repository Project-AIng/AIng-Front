import React from 'react';
import './pages.css';

export default function Signup() {
    return (
        <div className='container'>
            <h1>회원가입</h1>
            <form className='input_data'>
                <input type="text"/>
                <label>이름을 입력해주세요</label>
            </form>
            <form className='input_data'>
                <input type="text"/>
                <label>이메일을 입력해주세요</label>
            </form>
            <form className='input_data'>
                <input type="password"/>
                <label>비밀번호 설정(최소 8자리)</label>
            </form>
            <form className='input_data'>
                <input type="password"/>
                <label>비밀번호 재입력</label>
            </form>
            <button className='btn'>가입 완료</button>
        </div>
    );
}

