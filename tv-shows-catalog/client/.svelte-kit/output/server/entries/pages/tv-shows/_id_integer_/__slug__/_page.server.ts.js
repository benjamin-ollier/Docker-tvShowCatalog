import { A as API_BASE_URL } from "../../../../../chunks/private.js";
import { e as error } from "../../../../../chunks/index.js";
const load = async ({ fetch, params: { id } }) => {
  const response = await fetch(`${API_BASE_URL}/tv-shows/${id}`);
  if (!response.ok) {
    throw error(response.status, await response.json());
  }
  const tvShow = await response.json();
  return {
    tvShow
  };
};
export {
  load
};
