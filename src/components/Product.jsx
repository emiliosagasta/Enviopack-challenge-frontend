import {Grid} from '@mui/material'
import MediaCard from './MediaCard/MediaCard';
import productsJson from '../products.json'
import "./product.css"


function Product () {
  const products = productsJson.productos
    return (
      <>
        <h1 className='cata'>Catálogo</h1>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 3 }}>
        {products.filter((e)=>e).map ((product,index)=> {
          return(
          <MediaCard key={index} sku={product.sku} title={product.title} price={product.price} />
        )})}
      </Grid>
      </>
    );
}

export default Product;
