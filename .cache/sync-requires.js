const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/tarasiegel/Documents/Code Projects/fullstackkitchen/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/tarasiegel/Documents/Code Projects/fullstackkitchen/src/pages/about.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/tarasiegel/Documents/Code Projects/fullstackkitchen/src/templates/blog-post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/tarasiegel/Documents/Code Projects/fullstackkitchen/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/tarasiegel/Documents/Code Projects/fullstackkitchen/src/pages/index.js"))),
  "component---src-pages-recipes-js": hot(preferDefault(require("/Users/tarasiegel/Documents/Code Projects/fullstackkitchen/src/pages/recipes.js")))
}

