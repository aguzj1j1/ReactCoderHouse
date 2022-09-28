import React, { useContext } from 'react'
import Stepper from "react-stepper-horizontal";
import { PageContext } from '../../context/PageContext';
import BuyerForm from './BuyerForm';
import ShippingInformation from './ShippingInformation';
import './checkout.css'
import PaymentForm from './PaymentForm';
const CheckOut = () => {
    const { page,steps } = useContext(PageContext)
    return (
        <div className='inputs-center'>
            {page !== 5 && (
                <Stepper steps={steps} activeStep={page} />
            )}
            {page === 0 && <BuyerForm/>}
            {page === 1 && <ShippingInformation/>}
            {page === 2 && <PaymentForm/>}

        </div>
    )
}

export default CheckOut