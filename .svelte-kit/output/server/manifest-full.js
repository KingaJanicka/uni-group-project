export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["shared.css","vite.svg"]),
	mimeTypes: {".css":"text/css",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DrmxtuEm.js",app:"_app/immutable/entry/app.03lMho0-.js",imports:["_app/immutable/entry/start.DrmxtuEm.js","_app/immutable/chunks/BxSrsSNg.js","_app/immutable/chunks/Bw58evBX.js","_app/immutable/chunks/CJt4MO7-.js","_app/immutable/chunks/D-Mh5WRJ.js","_app/immutable/entry/app.03lMho0-.js","_app/immutable/chunks/Bw58evBX.js","_app/immutable/chunks/CWRXG8yx.js","_app/immutable/chunks/vS_0Giqt.js","_app/immutable/chunks/D_8NnygR.js","_app/immutable/chunks/D-Mh5WRJ.js","_app/immutable/chunks/pm1zZIFm.js","_app/immutable/chunks/DrKZIh0E.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/menu",
				pattern: /^\/menu\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/our-story",
				pattern: /^\/our-story\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/reservations",
				pattern: /^\/reservations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
