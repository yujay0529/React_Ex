import React from 'react';
import "./SecondModal.css"

function SecondModal({setOpenSecondModal}){

    return (
        <div className='secModalback'>
        <div className='secmodalcontainer'>
            <div className='secheader'>
                
                <div className='title'>
                    <span>⚠️ 알림</span>
                  
                </div>
            </div>

            <div className='body'>
                <p className='secinfo'>주문이 전송 처리되지 않았습니다.</p>
                <p className='secinfo'>출력된 주문서를 카운터에 가져다주시면</p>
                <p className='secinfo'>처리해 드리겠습니다.</p>

            </div>

            <div className='secOk' onClick={() => {
                        setOpenSecondModal(false);
                    }}>
                <span className='secok'>확인</span>
            </div>


            
        </div>
        
    </div>
    );
};

export default SecondModal;