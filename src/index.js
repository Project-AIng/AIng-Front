import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Test from './pages/Test';
import Interview from './pages/Interview';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MyPage from './pages/Mypage'; // 추가

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/Test', element: <Test /> },
      { path: '/Interview', element: <Interview /> },
      { path: '/Signup', element: <Signup /> },
      { path: '/Login', element: <Login /> },
      { path: '/mypage', element: <MyPage /> }, // 추가
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
