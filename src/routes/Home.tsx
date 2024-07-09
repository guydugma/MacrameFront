import { Container, Grid } from "@mui/material";
import { useProducts } from "../hooks/useProducts";

const Home = () => {
  const { products, isLoading, error } = useProducts();

  return (<Container className="text-brow">
    <h1>Liz's Shop</h1>
    {isLoading && <div>{isLoading}</div>}
    {error && <div>{error}</div>}
    {(!isLoading && !error) && <Grid container>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
          <div >{product.title}</div>
        </Grid>
      ))}
    </Grid>}
    <Container sx={{ height: "5000px" }}>some section</Container>
  </Container>)
}

export default Home;