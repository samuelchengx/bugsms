const pkg = require('../package.json')
const postcssGlobalImport = require('postcss-global-import')
const postcssImport = require('postcss-import')
const postcssCustomProperties = require('postcss-custom-properties')
const postcssCustomMedia = require('postcss-custom-media')
const postcssMediaMinmax = require('postcss-media-minmax')
const postcssCustomSelectors = require('postcss-custom-selectors')
const postcssCalc = require('postcss-calc')
const postcssNesting = require('postcss-nesting')
const postcssNested = require('postcss-nested')
const postcssColorFunction = require('postcss-color-function')
const pleeeaseFilters = require('pleeease-filters')
const pixrem = require('pixrem')
const postcssSelectorMatches = require('postcss-selector-matches')
const postcssSelectorNot = require('postcss-selector-not')
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes')
const autoprefixer = require('autoprefixer')

module.exports = () => ({
  plugins: [
    postcssGlobalImport(),
    postcssImport(),
    postcssCustomProperties(),
    postcssCustomMedia(),
    postcssMediaMinmax(),
    postcssCustomSelectors(),
    postcssCalc(),
    postcssNesting(),
    postcssNested(),
    postcssColorFunction(),
    pleeeaseFilters(),
    pixrem(),
    postcssSelectorMatches(),
    postcssSelectorNot(),
    postcssFlexbugsFixes(),
    autoprefixer(pkg.browserList),
  ],
})
