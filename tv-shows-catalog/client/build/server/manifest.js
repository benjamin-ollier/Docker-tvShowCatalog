const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.RSBM1UIG.js","app":"_app/immutable/entry/app.QItFwavQ.js","imports":["_app/immutable/entry/start.RSBM1UIG.js","_app/immutable/chunks/entry.weKqOsms.js","_app/immutable/chunks/scheduler.N6VJfDEH.js","_app/immutable/entry/app.QItFwavQ.js","_app/immutable/chunks/scheduler.N6VJfDEH.js","_app/immutable/chunks/index.Z58yM-qa.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-OCQOgupl.js')),
			__memo(() => import('./chunks/1-s4EZff4G.js')),
			__memo(() => import('./chunks/2-UpDiMCnu.js')),
			__memo(() => import('./chunks/3-01-Nto3B.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/tv-shows/[id=integer]/[[slug]]",
				pattern: /^\/tv-shows\/([^/]+?)(?:\/([^/]+))?\/?$/,
				params: [{"name":"id","matcher":"integer","optional":false,"rest":false,"chained":false},{"name":"slug","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: integer } = await import ('./chunks/integer-WKFjw6ou.js');
			return { integer };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
