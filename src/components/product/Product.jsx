import React from "react";

import {Card, CardMedia, Typography, IconButton, CardContent, CardActions} from "@material-ui/core";

import { AddShoppingCart } from "@material-ui/icons";

import  useStyles  from "./styles"


const Product = ({product})=>{

    const classes = useStyles()

    return(
        <Card className={classes.root}>
            <CardMedia className={classes.media} image = {product.image} title = {product.item} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                            {product.item}
                    </Typography>
                    <Typography variant="h5">
                            {product.price}
                    </Typography>
                </div>
                <Typography variant="h3" color="textSecondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
                    
        )
}


export default Product;