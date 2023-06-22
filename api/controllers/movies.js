class MoviesController {
  static async getAll() {
    const resp = await axios.get(
      baseUrl + "/discover/movie?sort_by=popularity.desc&api_key=" + api_key
    );
    console.log(resp.data);
    return resp.data;
  }

  static async getSingle(id) {
    const resp = await axios.get(
      baseUrl + "/movie/" + id + "?api_key=" + api_key
    );
    return resp.data;
  }
}

module.exports = MoviesController;
