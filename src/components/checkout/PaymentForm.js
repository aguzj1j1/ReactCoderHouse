import { Button, InputLabel, MenuItem, Select } from '@material-ui/core';
import { FormControl, TextField } from '@mui/material';
import React, { useContext } from 'react'
import { useState } from 'react';
import Card from "react-credit-cards";
import 'react-credit-cards/es/styles-compiled.css';
import { PageContext } from '../../context/PageContext';

const PaymentForm = () => {
    const { page,onBackPage } = useContext(PageContext)
    const [cvc, setCvc] = useState("")
    const [expiry, setExpiry] = useState("")
    const [age, setAge] = useState("")
    const [month, setMonth] = useState("")
    const [focus, setFocus] = useState("")
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    const ages = ["22", "23", "24", "25", "26", "27", "28", "29", "30"]
    const handleInputFocus = (e) => {
        setFocus(e.target.name)
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleNumberChange = (e) => {
        setNumber(e.target.value)
    }
 
    const handleExpiryChange = (e) => {
        setExpiry(month + e.target.value);
    }
    const handleCvcChange = (e) => {
        setCvc(e.target.value)
        setFocus(e.target.name)
    }
    const saveOrder = () => {
        
    }
    return (
        <>
            <div className='rccs__card  mt-20'>
                <Card key="1"
                    name={name}
                    number={number}
                    expiry={expiry}
                    cvc={cvc}
                    focus={focus}
                    className="mt-10"
                />
            </div>
            <form className='mt-20'>
                <div className='flex flex-row '>
                    <div className='w-3/5'>
                        <TextField 
                            key={2}
                            id="outlined-basic"
                            type="tel"
                            name="Number"
                            onChange={handleNumberChange}
                            onFocus={handleInputFocus}
                            label="Numero"
                            variant="outlined"
                        />
                    </div>
                    <div className='w-3/5'>
                        <TextField
                            key={3}
                            type="text"
                            className="form-control"
                            value={name}
                            name="name"
                            onChange={handleNameChange}
                            onFocus={handleInputFocus}
                            label="Nombre"
                            variant="outlined"
                        />
                    </div>
                </div>
                <div className='flex flex-row mt-5'>
                    <div className='w-3/5'>
                        <TextField
                            key={4}
                            type="text"
                            className="form-control"
                            value={cvc}
                            name="cvc"
                            onChange={handleCvcChange}
                            onFocus={handleInputFocus}
                            label="Cvc"
                            variant="outlined"
                            pattern="\d*"
                            maxLength="3"
                        />
                    </div>
                    <div className='w-3/5'>
                        <TextField
                            key={4}
                            type="text"
                            className="form-control"
                            value={expiry}
                            name="cvc"
                            onChange={handleExpiryChange}
                            onFocus={handleInputFocus}
                            label="Fecha expiracion mm/dd"
                            variant="outlined"
                            pattern="\d*"
                            maxLength="4"
                        />
                    </div>
                
                    
                </div>
                <div className="flex flex-wrap">
                <div className="w-32  md:w-2/5 md:h-14">
                    <Button
                        style={{ margin: 25 }}
                        onClick={onBackPage}
                    >
                    Volver a datos de envio                        
                    </Button>
                </div>
                <div className="grow-0 md:grow  h-14 ...">

                </div>
                <div className='w-32  md:2/5 md:h-14'>
                    <Button
                        // onClick={nextPage}
                        style={{ margin: 25 }}
                    >
                        Terminar orden
                    </Button>
                </div>

            </div>
            </form>
        </>
    )
}

export default PaymentForm