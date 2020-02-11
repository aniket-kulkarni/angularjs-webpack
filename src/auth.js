import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-sanitize';
import 'angular-translate';
import 'angular-translate-loader-static-files';

import './assets/styles/app.scss';

import { initializeScreens } from './screens/authScreens';
import { configureTranslations } from './locale';
import { initializeRoutes } from './routes/authRouter';

const ngModule = angular.module('user-app', [
  'ui.router',
  'ngSanitize',
  'pascalprecht.translate'
]);

initializeRoutes(ngModule);
configureTranslations(ngModule);
initializeScreens(ngModule);
