import angular from 'angular';
import '@uirouter/angularjs';

import { foo } from './vendor';
import {initializeDirectives} from './directives';
import {initializeScreens} from './screens';
import { initializeRoutes } from './routes/router';

const ngModule = angular.module('user-app', ['ui.router']);

initializeRoutes(ngModule);
initializeDirectives(ngModule);
initializeScreens(ngModule);
