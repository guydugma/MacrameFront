import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { CategoryType } from "../../@types/types";
import "./CategoryCard.scss";

type Props = {
  category: CategoryType;
}

const CategoryCard = (props: Props) => {
  const category = props.category;
  console.log(category.imagesUrls[0])

  return (

    <Card sx={{ flexGrow: 1, position: 'relative', height: 400, width: 400, borderRadius: '50px' }}>
      <CardActionArea className="category-card" sx={{ flexDirection: 'column', position: 'relative', display: 'flex', padding: 0, alignItems: 'flex-end', justifyContent: 'flex-start' }}>

        <Typography sx={{ flexShrink: 1, zIndex: 1, position: 'absolute', marginX: 4, marginY: 2, fontSize: 50 }}>{category.title}</Typography>

        <CardMedia title={category.title} component="img" image={category.imagesUrls[0]} sx={{ height: '100%', position: 'relative', zIndex: 0 }} />

      </CardActionArea>
    </Card>

  )
}

export default CategoryCard;