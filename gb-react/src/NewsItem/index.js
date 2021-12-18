import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const NewsItem = ({ article }) => {
  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {article.author}
        </Typography>
        <Typography variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography sx={{ fontSize: 10 }} color="text.secondary">
          {article.publishedAt}
        </Typography>
        <Typography variant="body2">{article.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a href={article.url} target="_blank" rel="noreferrer">
            Подробнее
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
