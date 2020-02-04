import angular from 'angular';
import { foo } from './vendor';
import {initializeDirectives} from './directives';
import {initializeScreens} from './screens';

const ngModule = angular.module('user-app', []);
initializeDirectives(ngModule);
initializeScreens(ngModule);
