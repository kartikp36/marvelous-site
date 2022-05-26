import { types, flow } from "mobx-state-tree";

const Show = types.model("Show", {
  id: types.integer,
  title: types.string,
  release_date: types.string,
  overview: types.string,
  cover_url: types.string,
  trailer_url: types.string,
  directed_by: types.string,
  phase: types.integer,
  saga: types.string,
  imdb_id: types.string,
  post_credit_scenes: types.integer,
});
// &filter=title%3DIron
const Shows = types
  .model("Shows", {
    shows: types.array(Show),
  })
  .actions((self) => {
    const getShows = flow(function* (schema) {
      try {
        const response =
          yield fetch(`https://mcuapi.herokuapp.com/api/v1/${schema.type}?page=${schema.page}&limit=6&columns=id%2Ctitle%2Crelease_date%2Cbox_office%2Coverview%2Ccover_url%2Ctrailer_url%2Cdirected_by%2Cphase%2Csaga%2Cchronology%2C%20post_credit_scenes%2C%20imdb_id&order=chronology%2C${schema.chronology}
        `);
        const result = yield response.json();
        console.log("result", result);
        self.shows = result?.data;
      } catch (err) {
        console.error(err);
      }
    });
    return { getShows };
  })
  .create({ shows: [] });

export default Shows;
