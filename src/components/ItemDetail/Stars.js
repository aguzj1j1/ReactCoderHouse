import React from 'react'
import './Stars.css'
const Stars = () => {
    return (
        <>
            <form className='clasificacion'>
                    <input id="radio1" type="radio" name="estrellas" value="5" />
                    <label htmlFor="radio1">★</label>
                    <input id="radio2" type="radio" name="estrellas" value="4" />
                    <label htmlFor="radio2">★</label>
                    <input id="radio3" type="radio" name="estrellas" value="3" />
                    <label htmlFor="radio3">★</label>
                    <input id="radio4" type="radio" name="estrellas" value="2" />
                    <label htmlFor="radio4">★</label>
                    <input id="radio5" type="radio" name="estrellas" value="1" />
                    <label htmlFor="radio5">★</label>

            </form>
        </>
    )
}

export default Stars