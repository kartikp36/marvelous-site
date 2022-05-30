export const fetchShows = async (schema) => {
  let filterSlug = schema.searchInput === '' ? "" : `&filter=title%3D${schema.searchInput}`;
  try {
    const response =
      await fetch(`https://mcuapi.herokuapp.com/api/v1/${schema.type}?page=${schema.page}&limit=6&order=${schema.order}%2C${schema.chronology}${filterSlug}
  `);
    const result = await response.json();
    return result.data;
  } catch (err) {
    console.error(err);
  }
};
