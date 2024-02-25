import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "../../chunks/ssr.js";
const css$1 = {
  code: "a.svelte-1bkpjgj.svelte-1bkpjgj.svelte-1bkpjgj{background:#03586b;border-radius:0.5rem;color:#fff;display:flex;flex-direction:column;max-width:210px;text-decoration:none}img.svelte-1bkpjgj.svelte-1bkpjgj.svelte-1bkpjgj{border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;display:block}div.svelte-1bkpjgj.svelte-1bkpjgj.svelte-1bkpjgj{display:flex;flex-direction:column;gap:0.5rem;margin:1rem}p.svelte-1bkpjgj.svelte-1bkpjgj.svelte-1bkpjgj{margin:0}.rating.svelte-1bkpjgj>span.svelte-1bkpjgj.svelte-1bkpjgj{font-weight:bold}h2.svelte-1bkpjgj.svelte-1bkpjgj.svelte-1bkpjgj{font-size:1rem;font-weight:bold;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.genres.svelte-1bkpjgj.svelte-1bkpjgj.svelte-1bkpjgj{display:flex;flex-wrap:wrap;gap:0.25rem;list-style-type:none;padding:0}.genres.svelte-1bkpjgj>li.svelte-1bkpjgj>p.svelte-1bkpjgj{background:#5cdb95;border-radius:0.25rem;color:#000;font-size:0.75rem;padding:0.25rem}",
  map: null
};
const TvShowCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tvShow } = $$props;
  const { genres, id, image, name, rating, slug } = tvShow;
  if ($$props.tvShow === void 0 && $$bindings.tvShow && tvShow !== void 0)
    $$bindings.tvShow(tvShow);
  $$result.css.add(css$1);
  return `<a href="${"/tv-shows/" + escape(id, true) + "/" + escape(slug, true)}" class="svelte-1bkpjgj"><img height="295" width="210" loading="lazy"${add_attribute("src", image.medium, 0)} alt="${"Poster of " + escape(name, true)}" class="svelte-1bkpjgj"> <div class="svelte-1bkpjgj"><h2 class="svelte-1bkpjgj">${escape(name)}</h2> <p class="rating svelte-1bkpjgj">⭐ ${rating.average ? `<span class="svelte-1bkpjgj">${escape(Intl.NumberFormat("fr-FR").format(rating.average))}</span><small data-svelte-h="svelte-14cu65z">/10</small>` : `<em data-svelte-h="svelte-t7jgh5">Inconnue</em>`}</p> ${genres.length ? `<ul class="genres svelte-1bkpjgj">${each(genres, (genre) => {
    return `<li class="svelte-1bkpjgj"><p class="svelte-1bkpjgj">${escape(genre)}</p> </li>`;
  })}</ul>` : ``}</div> </a>`;
});
const css = {
  code: "main.svelte-8man6z.svelte-8man6z{padding:1rem 0}main.svelte-8man6z>.svelte-8man6z{margin:0 1rem}hgroup.svelte-8man6z.svelte-8man6z{display:flex;color:#03586b;flex-direction:column;gap:0.5rem;margin-bottom:1.5rem}hgroup.svelte-8man6z>.svelte-8man6z{margin:0}ul.svelte-8man6z.svelte-8man6z{display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;list-style-type:none;padding:0}@media screen and (min-width: 768px){ul.svelte-8man6z.svelte-8man6z{justify-content:space-between}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { tvShows } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-az422b_START -->${$$result.title = `<title>All TV shows | Make Me Watch</title>`, ""}<meta name="description" content="Consultez la liste des meilleures séries TV, à consommer sans modération !"><!-- HEAD_svelte-az422b_END -->`, ""} <main class="container svelte-8man6z"><hgroup class="svelte-8man6z" data-svelte-h="svelte-10dz4dp"><h1 class="svelte-8man6z">Catalogue de séries</h1> <p class="svelte-8man6z">À consommer sans modération !</p></hgroup> <ul class="svelte-8man6z">${each(tvShows, (tvShow) => {
    return `<li>${validate_component(TvShowCard, "TvShowCard").$$render($$result, { tvShow }, {}, {})} </li>`;
  })}</ul> </main>`;
});
export {
  Page as default
};
