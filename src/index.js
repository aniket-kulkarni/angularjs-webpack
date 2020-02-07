import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-sanitize';
import 'angular-translate';
import 'angular-translate-loader-static-files';

import './assets/styles/app.scss';

import { foo } from './vendor';
import { initializeDirectives } from './directives';
import { initializeScreens } from './screens';
import { configureTranslations } from './locale';
import { initializeRoutes } from './routes/router';

const ngModule = angular.module('user-app', [
  'ui.router',
  'ngSanitize',
  'pascalprecht.translate'
]);

initializeRoutes(ngModule);
configureTranslations(ngModule);
initializeDirectives(ngModule);
initializeScreens(ngModule);
