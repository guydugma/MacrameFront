import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"
import { useCategories } from "../hooks/useCategories";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import { useEffect } from "react";

const Categories = () => {
  const { categories, isLoading, error } = useCategories();

  useEffect(() => {

  }, [error, isLoading])

  return (<Container>
    {isLoading && <div>{isLoading}</div>}
    {error && <div>{error}</div>}
    {(!isLoading && !error) && <Grid container className="flex flex-row  items-center" columnGap={1} rowGap={6} sx={{ justifyContent: "space-around", alignItems: "flex-start" }} >
      {categories.map(category =>
        <Grid item key={category._id} columns={2} sx={{ display: "flex" }}>
          <CategoryCard category={category} />
        </Grid>)}
    </Grid>
    }
  </Container>)
}

export default Categories;

