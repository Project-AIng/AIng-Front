import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { BsRobot } from 'react-icons/bs';
import { GiTalk } from 'react-icons/gi';
import { AiOutlineUser } from 'react-icons/ai'; 
import axios from 'axios';
import './Navbar.css';

export default function Navbar() {
  const [user, setUser]=useState();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        const response = await axios.get('http://localhost:8080/mypage', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchUser();
  }, []);

  const handleLogout =()=> {
    try {
      localStorage.removeItem('auth_token');
      alert("로그아웃 완료.");
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };


  const menus = [
    { name: 'TOPIC', link: '/TopicChoice', icon: GiTalk },
    { name: 'MyPage', link: '/MypageMenu', icon: AiOutlineUser }, 
  ];

  const [open, setOpen] = useState(false);
  return (
    <>
      <header className='flex justify-between p-2 border-b border-zinc-300'>
        <section className='flex gap-6'>
          <div
            className={`bg-back h-50 w-40 ${open ? 'h-75 ' : 'h-16'}
            duration-500 text-grey-100`}>

            <div className='bg-back text-basic px-3 py-9 flex justify-start'>
              <BsRobot
                size={40}
                className='cursor-pointer'
                onClick={() => setOpen(!open)}
              />
            </div>

            <div
              className={`mt-4 flex flex-col gap-4 relatvie whitespace-pre duration-500 
              ${!open && 'opacity-0 translate-x-28 overflow-hidden'}
              `}
            >
              {menus?.map((menu, i) => (
                <div
                  key={i}
                  className='text-gray-500 hover:bg-gray-100 transition-all duration-100
                  ease-linear hover:text-basic active:text-basic'>
                  <Link
                    to={menu?.link}
                    className='group flex items-center text-sm gap-3.5 
                    font-medium p-2'>
                    <div>
                      {React.createElement(menu?.icon, { size: '20' })}
                    </div>
                    <h2 className='font-bold'
                      style={{
                        transitionDelay: `${i + 3}00ms`,
                      }}
                    >
                      {menu?.name}
                    </h2>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div>
        <Link to='/'>
          <h1 className='AIng-text'>AIng</h1>
        </Link>
        </div>

        <div className='flex justify-end space-x-3 font-semibold p-5 px-3 '>
          {user ? (
          <>
        <div className='LogSign-container'>
          <Link to='/MypageMenu'>
        <button className='LogSign-text'>{user.name}님</button><span className='line'></span>
        </Link>
        <button className='LogSign-text'onClick={handleLogout}>로그아웃</button>
        </div>
        </>
        ) : (
        <>
        <div className='LogSign-container'>
        <Link to='/signup'>
        <button className='LogSign-text'>회원가입</button><span className='line'></span>
        </Link>
        <Link to='/login'>
          <button className='LogSign-text'>로그인</button>
        </Link></div>
        </>
        )}
        </div>
          
      </header>
    </>
  );
}