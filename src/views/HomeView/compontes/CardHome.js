import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: 20,
    marginTop: 100,
  },
  media: {
   height: 250
  },
});

export default function MediaCard({ nombre, price, img }) {
  const classes = useStyles();
  const [cantidad, setCantidad] = useState(1);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {nombre}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            `Precio: ${price}`
          </Typography>
        </CardContent>
        <Grid container>
          <Grid item xs={4} container justify="center">
            <Button
              color="primary"
              variant="contained"
              onClick={() => setCantidad(cantidad + 1)}
            >
              +
            </Button>
          </Grid>
          <Grid item xs={4} container justify="center">
            <Button>{cantidad}</Button>
          </Grid>
          <Grid item xs={4} container justify="center">
            <Button color="primary" variant="contained" onClick={()=> setCantidad(cantidad-1)}>
              -
            </Button>
          </Grid>
        </Grid>
      </CardActionArea>
      <CardActions>
        <Grid container justify="center">
          <Button size="small" color="primary" variant="outlined">
            Agregar al carrito
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}
