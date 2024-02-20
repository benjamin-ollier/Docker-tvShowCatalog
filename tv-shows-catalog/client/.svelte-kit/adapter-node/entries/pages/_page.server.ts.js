import { A as API_BASE_URL } from "../../chunks/private.js";
const load = async ({ fetch }) => {
  const response = await fetch(`${API_BASE_URL}/tv-shows`);
  const tvShows = await response.json();
  return {
    tvShows: tvShows.sort((a, b) => b.rating.average - a.rating.average)
  };
};
export {
  load
};
