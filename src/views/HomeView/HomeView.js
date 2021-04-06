import { Grid } from "@material-ui/core";
import { Fragment } from "react";
import AppBarHome from "./compontes/AppBarHome";
import CardHome from "./compontes/CardHome";



const HomeView = () => {
  const productos = [
    { name: "PC ASUS", price: "700", img: "assets/descarga.jpg" },
    { name: "PC HP", price: "700", img: "assets/descarga.jpg" },
    { name: "PC DELL", price: "700", img: "assets/descarga.jpg" },
    { name: "PC MSI", price: "700", img: "assets/descarga.jpg" },
  ];
  return (
    <Fragment>
      <AppBarHome />
        <Grid container>
        {productos.map((valor) => (   
            <Grid item xs={12} sm={4}>
                <CardHome key={valor.name} nombre={valor.name} price={valor.price} img={valor.img} />
            </Grid>     
        ))}
      </Grid>
      
    </Fragment>
  );
};

export default HomeView;
