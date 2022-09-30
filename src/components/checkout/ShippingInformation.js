import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { PageContext } from '../../context/PageContext'

const ShippingInformation = () => {
    const { page, onNextPage, onBackPage,createShipping,shipping } = useContext(PageContext)
    const [direction, setDirection] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [country, setcountry] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [dpto, setDpto] = useState("");
    const backPage = () => {
        onBackPage(page - 1)
    }
    const nextPage = () => {
        onNextPage(page + 1)
    }
    const handleChangeDirection = (event) => {
        setDirection(event.target.value);
    }
    const handleChangeCodPostal = (event) => {
        setPostalCode(event.target.value)
    }
    const handleChangeCity = (event) => {
        setCity(event.target.value)
    }
    const handleChangeProvince = (event) => {
        setProvince(event.target.value)
    }
    const handleChangeCountry = (event) => {
        setcountry(event.target.value)
    }
    const createPeople = () => {
        const people = mappingShippingInformation();
        createShipping(people);
        nextPage()
    }
    const mappingShippingInformation = () => {
        return {direction:direction,postalCode:postalCode,city:city,province:province,contry:country}
    }
    return (
        <form>
            <h4 className='inputs-center'> Tus datos</h4>
            <div className='flex flex-wrap'>
                <div className='w-1/2'>
                    <TextField
                        label="Direccion"
                        style={{ margin: 8, width: "93%" }}
                        fullWidth
                        margin="normal"
                        required
                        onChange={handleChangeDirection}
                        value= {shipping === null ? direction : shipping.direction}
                    />
                </div>
               
                <div className='w-1/2'>
                    <TextField
                        label="Cod postal"
                        style={{ margin: 8, width: "93%" }}
                        fullWidth
                        margin="normal"
                        required
                        onChange={handleChangeCodPostal}
                        value={shipping === null ? postalCode : shipping.postalCode} 
                    />
                </div>
                <div className='w-1/2'>
                    <TextField
                        label="Ciudad"
                        style={{ margin: 8, width: "93%" }}
                        fullWidth
                        margin="normal"
                        required
                        onChange={handleChangeCity}
                        value={shipping === null ? city : shipping.city} 
                    />
                </div>
                <div className='w-1/2'>
                    <TextField
                        label="Provincia"
                        style={{ margin: 8, width: "93%" }}
                        fullWidth
                        margin="normal"
                        required
                        onChange={handleChangeProvince}
                        value= {shipping === null ? province : shipping.province} 
                    />
                </div>
                <div className='w-1/2'>
                    <TextField
                        label="Pais"
                        style={{ margin: 8, width: "93%" }}
                        fullWidth
                        margin="normal"
                        required
                        onChange={handleChangeCountry}
                        value= {shipping === null ? country : shipping.country} 
                    />
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-32  md:w-2/5 md:h-14">
                    <Button
                        style={{ margin: 25 }}
                        onClick={backPage}
                    >
                    Volver a tus datos                        
                    </Button>
                </div>
                <div className="grow-0 md:grow  h-14 ...">

                </div>
                <div className='w-32  md:2/5 md:h-14'>
                    <Button
                        onClick={createPeople}
                        style={{ margin: 25 }}
                    >
                        Siguiente
                    </Button>
                </div>

            </div>
        </form>
    )
}

export default ShippingInformation