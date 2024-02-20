import { c as create_ssr_component, e as escape, d as add_attribute } from "../../../../../chunks/ssr.js";
const css = {
  code: "main.svelte-1t6muft{display:grid;grid-template-columns:minmax(0, 1fr)}img.svelte-1t6muft{aspect-ratio:auto;display:block;width:100%}article.svelte-1t6muft{display:flex;flex-direction:column;gap:1rem;padding:1rem}h1.svelte-1t6muft,h2.svelte-1t6muft{margin:0}.information.svelte-1t6muft{background:#8ee4af;border-radius:0.5rem;display:flex;flex-direction:column;gap:1rem;padding:1rem}dl.svelte-1t6muft{display:flex;flex-direction:column;gap:0.25rem;margin:0}dt.svelte-1t6muft{font-size:0.75rem;font-style:italic}dt.svelte-1t6muft:not(:first-of-type){margin-top:0.5rem}dd.svelte-1t6muft{margin:0}article.svelte-1t6muft>p{margin:0}.externals.svelte-1t6muft{display:flex;flex-wrap:wrap;gap:0.5rem}.button.svelte-1t6muft{border-radius:0.5rem;font-weight:bold;padding:0.5rem 1rem;text-decoration:none}.button.thetvdb.svelte-1t6muft{background:#6cd591;color:#1b2626}.button.imdb.svelte-1t6muft{background:#f5c518;color:#000}@media screen and (min-width: 1024px){main.svelte-1t6muft{grid-template-columns:minmax(0, 1fr) minmax(0, 1fr);height:100vh}img.svelte-1t6muft{height:100%;object-fit:cover;width:100%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { tvShow: { ended, externals, genres, image, name, network, officialSite, premiered, slug, status, summary } } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-po8jo1_START -->${$$result.title = `<title>${escape(name)} | Make Me Watch</title>`, ""}<meta name="description" content="${"Apprenez-en plus sur " + escape(name, true) + ", l'une des meilleures séries TV du moment ! À consommer sans modération."}"><!-- HEAD_svelte-po8jo1_END -->`, ""} <main class="svelte-1t6muft"><img${add_attribute("src", image.original, 0)} alt="${"Original poster of " + escape(name, true)}" class="svelte-1t6muft"> <article class="svelte-1t6muft"><div><h1 class="svelte-1t6muft">${escape(name)}</h1> <a href="/" title="Retourner au catalogue de séries TV" data-svelte-h="svelte-p4z23n">⬅️ Retour au catalogue</a></div> <section class="information svelte-1t6muft"><h2 class="svelte-1t6muft" data-svelte-h="svelte-10jgn6h">Informations</h2> <dl class="svelte-1t6muft"><dt class="svelte-1t6muft">Genre${genres.length > 1 ? `s` : ``} </dt><dd class="svelte-1t6muft">${genres.length ? `${escape(genres.join(", "))}` : `<em data-svelte-h="svelte-hqlm0b">Non renseigné</em>`} </dd><dt class="svelte-1t6muft" data-svelte-h="svelte-j3jdb5">Statut</dt><dd class="svelte-1t6muft">${status === "To Be Determined" ? `À déterminer` : ``} ${status === "Running" ? `En cours` : ``} ${status === "Ended" ? `Terminée` : ``} </dd>${premiered ? `<dt class="svelte-1t6muft" data-svelte-h="svelte-1j77qz8">Date de première diffusion</dt> <dd class="svelte-1t6muft"><time${add_attribute("datetime", premiered, 0)}>${escape(Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(Date.parse(premiered)))}</time></dd>` : ``}${ended ? `<dt class="svelte-1t6muft" data-svelte-h="svelte-gabstr">Date de dernière diffusion</dt> <dd class="svelte-1t6muft"><time${add_attribute("datetime", ended, 0)}>${escape(Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(Date.parse(ended)))}</time></dd>` : ``}${network ? `<dt class="svelte-1t6muft" data-svelte-h="svelte-1jlchfl">Produite par</dt> <dd class="svelte-1t6muft"><a${add_attribute("href", network.officialSite, 0)} target="_blank">${escape(network.name)}</a></dd>` : ``}${officialSite ? `<dt class="svelte-1t6muft" data-svelte-h="svelte-17rmxyo">Site officiel de la série</dt> <dd class="svelte-1t6muft"><a${add_attribute("href", officialSite, 0)} title="${"Visiter le site officiel de la série " + escape(name, true)}" target="_blank">${escape(new URL(officialSite).hostname)}</a></dd>` : ``}</dl></section>  <!-- HTML_TAG_START -->${summary}<!-- HTML_TAG_END --> <div class="externals svelte-1t6muft">${externals.thetvdb ? `<a class="button thetvdb svelte-1t6muft" href="${"https://thetvdb.com/series/" + escape(slug, true)}" target="_blank" title="${"Voir la fiche de " + escape(name, true) + " sur TVDb"}">${escape(name)} sur TVDb</a>` : ``} ${externals.imdb ? `<a class="button imdb svelte-1t6muft" href="${"https://imdb.com/title/" + escape(externals.imdb, true)}" target="_blank" title="${"Voir la fiche de " + escape(name, true) + " sur IMDb"}">${escape(name)} sur IMDb</a>` : ``}</div></article> </main>`;
});
export {
  Page as default
};
