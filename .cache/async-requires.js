// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("/Users/tarasiegel/Documents/Code Projects/fullstackkitchen/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-pages-about-js": () => import("/Users/tarasiegel/Documents/Code Projects/fullstackkitchen/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-templates-blog-post-js": () => import("/Users/tarasiegel/Documents/Code Projects/fullstackkitchen/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-pages-404-js": () => import("/Users/tarasiegel/Documents/Code Projects/fullstackkitchen/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/tarasiegel/Documents/Code Projects/fullstackkitchen/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-recipes-js": () => import("/Users/tarasiegel/Documents/Code Projects/fullstackkitchen/src/pages/recipes.js" /* webpackChunkName: "component---src-pages-recipes-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/tarasiegel/Documents/Code Projects/fullstackkitchen/.cache/data.json")

