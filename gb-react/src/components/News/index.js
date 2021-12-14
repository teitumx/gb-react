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
  // const [articles, setArticles] = useState([]);
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  // const API_URL =
  //   "https://newsapi.org/v2/top-headlines?country=ru&limit=10&category=business&apiKey=1b73ec523b49421d9733db098bec5d41";

  const loadNews = () => {
    dispatch(getArticles());
  };

  // const loadNews = () => {
  //   dispatch(getArticles());
  //   // setLoading(true);
  //   // fetch(API_URL)
  //   //   .then((response) => {
  //   //     if (!response.ok) {
  //   //       throw new Error(`ERROR ${response.status}`);
  //   //     }
  //   //     return response.json();
  //   //   })
  //   //   .then((result) => {
  //   //     setArticles(result.articles);
  //   //     setError("");
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //     setError(err.message);
  //   //   })
  //   //   .finally(() => {
  //   //     setLoading(false);
  //   //   });
  // };

  // useEffect(() => {
  //   loadNews();
  // }, []);

  return (
    <Container component="main">
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
