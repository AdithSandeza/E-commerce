import React from "react";

import Product from "./product/Product";

import { Grid } from "@material-ui/core";

const Products = ()=>{
    let products = [
        {id:1,item:"Shoes",description:"Walk like you fly ",price:"$50",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"},
        {id:2,item:"MacBook",description:"Bite me like you do ",price:"$300",image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=539&hei=312&fmt=jpeg&qlt=95&.v=1603332211000"}
    ]
   return(
       <main>
           <Grid container spacing={4} justifyContent="center">
           {
               products.map((product)=>(
                   <Grid key= {product.id} item xs={12} sm={8} md ={4} lg={3}>
                       <Product product={product} />
                    
                   </Grid>
               ))
           }
           </Grid>
       </main>
   )

}


export default Products;
