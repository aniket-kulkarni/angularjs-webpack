import './hello.scss';

export function registerHello(ngModule) {
  ngModule.directive('hello', () => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./hello.html'),
      controllerAs: 'vm',
      controller() {
        const vm = this;
        vm.greeting = 'Hi Webpack with Angular JS';
      }
    };
  });
}
