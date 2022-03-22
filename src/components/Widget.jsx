import React,{useState,useEffect} from 'react';
import '../App.css'
const Widget = (props) => {

    const [is15SecPast, setIs15SecPast]= useState(false);
    const [classCircle, setClassCircle] = useState('circle');
    const [isOpenedPrev, setIsOpened] = useState(false);
    const [isWidgetOpened, setIsWidgetOpened]= useState(false);
    
    useEffect(() => {
        count(15000) 
    },[])

    function count(time) {
        setTimeout(() => {
            setIs15SecPast(true);
        },time)
    }
    
    function open(){
        setIsWidgetOpened(true)
        setIsOpened(true)
    }

    function close(){
        if (!isOpenedPrev){
            setIsOpened(true)
        }
        setIsWidgetOpened(false)
        setClassCircle('circleAnim')
    }

    

    if ((is15SecPast && !isOpenedPrev )||(isOpenedPrev&&isWidgetOpened)) {
        return (
            <div className='widgetContainer'>
                <div className='widgetDiv'>
                    <div className='headerMessage'>
                        <div className='messageText' >Text of your message</div>

                        <svg onClick={close} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="18px" height="18px"><path d="M 38.982422 6.9707031 A 2.0002 2.0002 0 0 0 37.585938 7.5859375 L 24 21.171875 L 10.414062 7.5859375 A 2.0002 2.0002 0 0 0 8.9785156 6.9804688 A 2.0002 2.0002 0 0 0 7.5859375 10.414062 L 21.171875 24 L 7.5859375 37.585938 A 2.0002 2.0002 0 1 0 10.414062 40.414062 L 24 26.828125 L 37.585938 40.414062 A 2.0002 2.0002 0 1 0 40.414062 37.585938 L 26.828125 24 L 40.414062 10.414062 A 2.0002 2.0002 0 0 0 38.982422 6.9707031 z"/></svg>
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div className={classCircle} onClick={open}>
            
        </div>
    );
};

export default Widget;