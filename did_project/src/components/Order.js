import React, { useState } from 'react';
import "./Order.css"
import NumItem from './NumItem';

function Order() {

    return (
        <div className='orderContainer'>

            <div className='orderTitle'>
            <span>주문접수</span>
            </div>
            

            <div className='orderOk'>
                <span>주문이 확인되었습니다.</span>
            </div>


        </div>
    );
}

export default Order;