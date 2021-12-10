import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NewsItem } from "../../NewsItem";
import { getArticles } from "../../store/articles/actions";
import {
  selectArticles,
  selectArticlesError,
  selectArticlesLoading,
} from "../../store/articles/selectors";

import uniqid from "uniqid";
import { Button, Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const News = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectArticlesError);
  const loading = useSelector(selectArticlesLoading);
  const articles = useSelector(selectArticles);

  const loadNews = () => {
    dispatch(getArticles());
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <Container sx={{ pt: 4 }}>
      {error ? (
        <Box sx={{ textAlign: "center" }}>
          <h3>Ошибка: {error}</h3>
          <div>
            <Button onClick={loadNews}>Обновить новости</Button>
          </div>
        </Box>
      ) : (
        articles.map((article) => <NewsItem article={article} key={uniqid()} />)
      )}
      {loading && (
        <Box sx={{ textAlign: "center" }}>
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
};
