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
        onClick={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            {showComponent ? (<> 
            
            <div>
                <div onClick={()=>{navigate(`/Speak`,{state:{topic}})}}> {/* /Test페이지로 이동하며 상태 객체 topic 전달 */}
                    SPEAK GO👄</div>
                <br></br>
                <div onClick={()=>{navigate(`/Chat`,{state:{topic}})}}>
                    CHAT GO💬</div>
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

