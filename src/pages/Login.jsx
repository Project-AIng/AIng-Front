import React from 'react';
import './pages.css';

export default function Login() {
    return (
        <div className='container'>
            <h1>로그인하기</h1>
            <form className='input_data'>
                <input type="text"/>
                <label>이메일을 입력해주세요</label>
            </form>
            <form className='input_data'>
                <input type="password"/>
                <label>비밀번호를 입력해주세요</label>
            </form>
            <button className='btn'>로그인</button>
        </div>
    );
}

