export function registerLoginComponent(ngModule) {
  ngModule.component('login', {
    template: '<div>Login</div>',
    controller: ['$translate', controller],
    controllerAs: 'vm'
  });
}

function controller($translate) {
  const vm = this;
  console.log('Hello Controller');

  vm.title = 'Hello';

  vm.onButtonCliked = () => {
    vm.title = $translate.instant('TEST');
  };
}
