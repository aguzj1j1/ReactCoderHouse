import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { FormControl, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import Cards from "react-credit-cards";
import 'react-credit-cards/es/styles-compiled.css';

const PaymentForm = () => {
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
    const handleMonthChange = (e) => {
        setMonth(e.target.value);
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value)
        setExpiry(month + e.target.value);
    }
    const handleCvcChange = (e) => {
        setCvc(e.target.value)
        setFocus(e.target.name)
    }
    return (
        <div className='rccs__card '>
            <Cards
                name={name}
                number={number}
                expiry={expiry}
                cvc={cvc}
                focus={focus}
            />
            <form>
                <TextField
                    id="outlined-basic"
                    type="tel"
                    name="Number"
                    onChange={handleNumberChange}
                    onFocus={handleInputFocus}
                    label="Numero"
                    variant="outlined"
                />
                <TextField
                    type="text"
                    className="form-control"
                    value={name}
                    name="name"
                    onChange={handleNameChange}
                    onFocus={handleInputFocus}
                    label="Nombre"
                    variant="outlined"
                />
                <TextField
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
                <FormControl sx={{ m: 1 }} variant="standard">
                    <InputLabel id="demo-customized-select-label">Mes</InputLabel>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={month}
                        name="Month"
                        onChange={handleMonthChange}
                        onFocus={handleInputFocus}
                    >

                        {months.map(mon => <MenuItem value={mon}>{mon}</MenuItem>)}

                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1 }} variant="standard">
                    <InputLabel id="demo-customized-select-label">Año</InputLabel>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={age}
                        name="Age"
                        onChange={handleAgeChange}
                        onFocus={handleInputFocus}
                    >
                        <MenuItem value={ages[0]}>
                            <em>{ages[0]}</em>
                        </MenuItem>
                        {ages.map(age => <MenuItem value={age}>{age}</MenuItem>)}

                    </Select>
                </FormControl>

            </form>
        </div>
    )
}

export default PaymentForm