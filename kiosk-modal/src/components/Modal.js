import React from 'react';
import "./Modal.css";
import { useState } from 'react';
import receipt from './img/r1.png'
import SecondModal from './SecondModal';

function Modal({setOpenModal}) {

    const [secondModal, setSecondModal] = useState(false);

    return (
        <div className='modalback'>
            <div className='modalcontainer'>
                <div className='header'>
                    <div className='closeBtn'>
                        <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        >
                      X
                    </button>
                    </div>
                    
                    <div className='title'>
                        <span>🤑 결제 완료</span>
                    </div>
                </div>

                <div className='body'>
                    <p className='info'>결제가 완료되었습니다.</p>
                    <p className='info'>메뉴가 준비되면 주문번호를 확인해주세요.</p>

                    <h2>주문번호</h2>

                    <span className='No'>822</span>
                <div>
                    <img className='img' src = {receipt}/>
                </div>
                    <p>영수증이 출력되었습니다.</p>



                </div>

                <div className="okBtn"
                  onClick={() => {
                    setSecondModal(true);
                    }}>
                    <span className='ok'>확인</span>
                    {secondModal && <SecondModal setOpenSecondModal={setSecondModal} />}
               
                </div>


                
            </div>
            
        </div>
    );
}

export default Modal;