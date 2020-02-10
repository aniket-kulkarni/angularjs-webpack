import 'angular';
import 'angular-mocks';  //eslint-disable-line
import './index';

// require all test files using special Webpack feature
// https://webpack.github.io/docs/context.html#require-context
const testsContext = require.context('.', true, /__tests__\/.*\.js$/);
testsContext.keys().forEach(testsContext);
