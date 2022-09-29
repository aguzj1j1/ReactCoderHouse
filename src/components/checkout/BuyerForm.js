import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageContext } from '../../context/PageContext'
import TextField from "@material-ui/core/TextField";
import { Button} from '@material-ui/core';
const BuyerForm = () => {
    const { page, onNextPage,createPeople,people } = useContext(PageContext);
    const [name, setname] = useState("");
    const [lastName, setLastName] = useState("");
    const [typeDni, setTypeDni] = useState("");
    const [dni, setDni] = useState("");

    const nextPage = () => {
        if (people == null){
            let actualPeople = mappingPeople();
            createPeople(actualPeople)
        }
        onNextPage(page + 1)
    };
    const mappingPeople = () => {
        
        return {name:name,lastName:lastName,typeDni:typeDni,dni:dni}
    }
    const handleChangeName = (event) => {
        setname(event.target.value);
    };
    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    };
    const handleChangeTypeDni = (event) => {
        setTypeDni(event.target.value);
    };
    const handleChangeDni = (event) => {
        setDni(event.target.value);
    };
    return (
        <form>
            <h4 className='inputs-center'> Tus datos</h4>
            <div className='flex flex-wrap'>
                <div className='w-1/2'>
                    <TextField
                        label="Nombre"
                        style={{ margin: 8, width: "93%" }}
                        fullWidth
                        margin="normal"
                        required
                        onChange={handleChangeName}
                        value={people === null ? name : people.name}
                    />
                </div>
                <div className='w-1/2'>
                    <TextField
                        label="Apellido"
                        style={{ margin: 8, width: "93%" }}
                        fullWidth
                        margin="normal"
                        required
                        onChange={handleChangeLastName}
                        value={people === null ? lastName : people.lastName}
                    />
                </div>
                
                <div className='w-1/2'>
                    <TextField
                        label="Tipo"
                        style={{ margin: 8, width: "93%" }}
                        fullWidth
                        margin="normal"
                        required
                        onChange={handleChangeTypeDni}
                        value={people === null ? typeDni : people.typeDni}
                    />
                </div>
                <div className='w-1/2'>
                    <TextField
                        label="DNI"
                        style={{ margin: 8, width: "93%" }}
                        fullWidth
                        margin="normal"
                        required
                        onChange={handleChangeDni}
                        value={people === null ? dni : people.dni}
                    />
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-32  md:w-2/5 md:h-14">
                    <Link to={'/cart'}>
                        <Button
                            style={{ margin: 25 }}
                        >
                            Volver al carrito
                        </Button>
                    </Link>
                </div>
                <div className="grow-0 md:grow  h-14 ...">

                </div>
                <div className='w-32  md:2/5 md:h-14'>
                    <Button
                        onClick={nextPage}
                        style={{ margin: 25 }}
                    >
                        Siguiente
                    </Button>
                </div>

            </div>
        </form>
    )
}

export default BuyerForm