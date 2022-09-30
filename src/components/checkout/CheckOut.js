import React, { useContext, useEffect } from 'react'
import Stepper from "react-stepper-horizontal";
import { PageContext } from '../../context/PageContext';
import BuyerForm from './BuyerForm';
import ShippingInformation from './ShippingInformation';
import './checkout.css'
import PaymentForm from './PaymentForm';

const CheckOut = () => {
    const { page, steps, soldOut } = useContext(PageContext)
    useEffect(() => {

    }, [soldOut])

    return (
        <>
            <div className='inputs-center' style={{ visibility: soldOut ? 'hidden' : 'visible' }}>
                {page !== 5 && (
                    <Stepper steps={steps} activeStep={page} />
                )}
                {page === 0 && <BuyerForm key={1} />}
                {page === 1 && <ShippingInformation key={2} />}
                {page === 2 && <PaymentForm key={3} />}

            </div>
            <div className='inputs-center' style={{ visibility: soldOut ? 'visible' : 'hidden' }}>
                <h1> acá va la logica de cuando ya compro mostrar algo</h1>
            </div>
        </>
    )
}

export default CheckOut