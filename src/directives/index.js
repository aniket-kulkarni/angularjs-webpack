import { registerHello } from './hello/hello';

export function initializeDirectives(ngModule) {
  registerHello(ngModule);
}
