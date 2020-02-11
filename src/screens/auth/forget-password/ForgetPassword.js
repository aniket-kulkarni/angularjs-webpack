export function registerForgetPasswordComponent(ngModule) {
  ngModule.component('forgetPassword', {
    template: '<div>Forget Password</div>',
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
