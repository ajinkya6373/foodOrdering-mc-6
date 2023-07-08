import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
export default function MenuCard({menuData,restaurantName}) {
    const{ name,imgSrc,price,qty}= menuData
  return (
    <Card sx={{ width:300,cursor:'pointer' }}>
      <CardMedia
        component="img"
        height="194"
        image={imgSrc}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
           <h4> {name }</h4>
           <p>Rs {price} for {qty}</p>
           <span>{restaurantName}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}