import React , { useState }from 'react';
import './Topic.css';
import { useNavigate } from 'react-router-dom';

export default function Topic({topic,emoticon}) {

    const navigate = useNavigate();
    const [showComponent, setShowComponent] = useState(false);

    const handleMouseEnter = () => {
        setShowComponent(true);
    }

    const handleMouseLeave = () => {
        setShowComponent(false);
    };
    /*const handleClick = () => {
        setShowComponent(false);
    };*/

    return (
        <div className='parentContainer'>
        <div className='TopicContainer'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            {showComponent ? (<> 
            
            <div>
                <div onClick={()=>{navigate(`/Test`,{state:{topic}})}}> {/* /Test페이지로 이동하며 상태 객체 topic 전달 */}
                    TEST Go✍🏻</div>
                <br></br>
                <div onClick={()=>{navigate(`/Interview`,{state:{topic}})}}>
                    인터뷰 Go🎤</div>
            </div>
            </>):
            (
                <>
                <p>{topic}</p> 
            <div className='emoticon'>{emoticon}</div>
            </>)}
        </div>
    </div>
    );
}

