// components/ProductCard.tsx
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Product } from "../types/Products";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends Product {}

export default function ProductCard({ title, image, price }: Props) {
  const priceAsNumber = parseFloat(price); // Convert string to number

  return (
    <Card>
      <CardMedia sx={{ height: 200 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {priceAsNumber.toFixed(2)} EGP
        </Typography>
      </CardContent>
    </Card>
  );
}
