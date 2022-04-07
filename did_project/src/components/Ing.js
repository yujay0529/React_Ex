import React from 'react';
import "./Ing.css"

function Ing(props) {
    return (
        <div className='ingContainer'>
            
            <div className='ingTitle'>
            <span>제조중</span>
            </div>
            

            <div className='ingOk'>
                <span>제품을 준비중입니다.</span>
            </div>

        </div>
    );
}

export default Ing;