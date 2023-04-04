import React, { useState } from 'react';
import './pages.css';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', {
                email: email,
                password: password
            });
            const token = response.data.token;
            localStorage.setItem('auth_token', token);
            // 여기에 로그인 성공 후 다른 작업을 수행하세요
            console.log(response.data);
        } catch (error) {
            console.error(error);
            setAuthError('잘못된 이메일 혹은 비밀번호입니다.');
        }
    }

    return (
        <div className='container'>
            <h1>로그인하기</h1>
            {authError && <div className='alert alert-danger'>{authError}</div>}
            <form className='input_data' onSubmit={handleSubmit}>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>이메일을 입력해주세요</label>
            </form>
            <form className='input_data' onSubmit={handleSubmit}>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>비밀번호를 입력해주세요</label>
            </form>
            <button className='btn' onClick={handleSubmit}>로그인</button>
        </div>
    );
}
