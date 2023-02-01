import { useState } from 'react';
import productsJson from '../../products.json'

const Button = ({sku})=> {
    const [cartText, setCartText] = useState('agregar al carrito')
    const cartProduct= productsJson.productos.find(product => product.sku === sku)
    const storageItem = localStorage.getItem('cart')
    const storageArr = storageItem ? JSON.parse(storageItem) : []
    return (
      <button className='verCarrito' onClick={()=>{
        setCartText('ver carrito')
        localStorage.setItem('cart', JSON.stringify([...storageArr , cartProduct]))
  
      } }>{cartText} </button>
    )
  }

  export default Button;

  