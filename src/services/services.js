export const fetchShows = async (schema) => {
  let filterSlug = schema.searchInput === '' ? "" : `&filter=title%3D${schema.searchInput}`;
  try {
    const response =
      await fetch(`https://mcuapi.herokuapp.com/api/v1/${schema.type}?page=${schema.page}&limit=6&columns=id%2Ctitle%2Crelease_date%2Cbox_office%2Coverview%2Ccover_url%2Ctrailer_url%2Cdirected_by%2Cphase%2Csaga%2Cchronology%2C%20post_credit_scenes%2C%20imdb_id&order=chronology%2C${schema.chronology}${filterSlug}
  `);
    const result = await response.json();
    return result.data;
  } catch (err) {
    console.error(err);
  }
};
