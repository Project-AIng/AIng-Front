import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { BsRobot} from 'react-icons/bs';
import { BsPen} from 'react-icons/bs';
import { GiTalk} from 'react-icons/gi';

export default function Navbar() {
  const menus = [
    {name:"TEST", link:'/Test',icon:BsPen},
    {name:"Interview", link:'/Interview',icon:GiTalk}
  ];

const [open, setOpen] = useState(true);
  return (
  <>
      <header className='flex justify-between p-2 border-b border-zinc-300'>
    <section className='flex gap-6'>
    <div 
    className={`bg-back h-50 w-40 ${open ? 'h-75':'h-16'}
    duration-500 text-grey-100`}>
        <div className='py-4 flex justify-start'>
          <BsRobot size={40} className='cursor-pointer'
            onClick={()=>setOpen(!open)}/>
        </div>
      
      <div
      className={`mt-4 flex flex-col gap-4 relatvie whitespace-pre duration-500 ${
          !open && "opacity-0 translate-x-28 overflow-hidden"
      }`}>
        {menus?.map((menu,i)=>(
          <Link 
          to={menu?.link}
          key={i} 
          className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md">
        <div>{React.createElement(menu?.icon,{size:"20"})}</div>
        <h2
        style={{
          transitionDelay:`${i+3}00ms`,
        }} 
      >
          {menu?.name}
          </h2>
          </Link>
        ))}
        </div>
      </div>
      </section>
      <Link to='/' className='flex items-center'>
        <h1 className='flex items-center text-3xl font-bold m-auto'>AIng</h1> 
      </Link>
      
      <div className='flex justify-end space-x-3 font-semibold p-5 px-3 '>
      <Link to='/signup'>
      <div className='font-semibold text-center px-3'>회원가입</div></Link>
      <Link to='/Login'>
      <div className=' font-semibold text-center'>로그인</div></Link>
      </div>
    </header>
    </>
  );
}

