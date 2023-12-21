const movie = {
  title: "Wonka",
  director: "Paul King",
  year: 2023,
  rating: "8",
  ratingJudging() {
    if (this.rating > 8) {
      return true;
    } else if (this.rating <= 8) {
      return false;
    }
  },
};

console.log(movie.ratingJudging());
