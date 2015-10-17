

export function* getArticles(next) {
  this.body = {
    results: ['test', 'is', 'passed']
  };
}

export function* getSingleArticle(next) {
}
