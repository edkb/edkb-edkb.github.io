const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: `/.well-known/pki-validation/202CE85AB6183690A687F8D4513FAA00.txt/`,
    component: path.resolve(`./src/pages/.well-known/pki-validation/202CE85AB6183690A687F8D4513FAA00.txt/index.js`),
  });
};