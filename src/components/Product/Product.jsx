import {Grid} from '@mui/material'
import MediaCard from '../MediaCard/MediaCard';
import productsJson from '../../products.json'
import "./product.css"
import { useState } from 'react';


function Product () {
  const products = productsJson.productos

  const [searchText, setSearchText] = useState("")

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchText(e.target.value)
    } 
    
    return (

      <>
        <h1 className='cata'>Catálogo</h1>
        <input style=
          {{ 
            width: 250, 
            padding: '5px 5px',
            position:'relative',
            marginRight:"75rem"
          }} 
          type="text"
          placeholder="Buscar productos por nombre"
          onChange={handleChange}
          />
          <p style={{marginLeft:"71rem",top: "-20px"}} >Ordenar por</p>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 3 }}>
        {products.filter((e)=>e.title.toLowerCase().includes(searchText.toLowerCase())).map ((product,index)=> {
          return(
          <MediaCard key={index} sku={product.sku} title={product.title} price={product.price} />
          )})}
        </Grid>
      </>
    );
}

export default Product;
