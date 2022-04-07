import React from 'react';
import "./Clear.css"

function clear(props) {
    return (
        <div>
             <div className='clearContainer'>
            
            <div className='clearTitle'>
            <span>준비완료</span>
            </div>
            

            <div className='clearOk'>
                <span>주문하신 제품이 준비 되었습니다.</span>
            </div>

        </div>
        </div>
    );
}

export default clear;