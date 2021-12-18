import {
  getArticlesPending,
  GET_ARTICLES_PENDING,
  getArticles,
} from "../actions";

describe("articles action", () => {
  it("getArticlesPending returns and action type", () => {
    const expected = {
      type: GET_ARTICLES_PENDING,
    };

    const received = getArticlesPending();

    expect(expected).toEqual(received);
  });

  it("getArticles", () => {
    fetchMock.mockOnce(
      JSON.stringify(
        "the next call to fetch will always return this as the body"
      )
    );
    getArticles()(() => {});
  });
});
