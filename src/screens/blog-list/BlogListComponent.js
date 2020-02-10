import './blog-list.scss';

export function registerBlogComponent(ngModule) {
  ngModule.component('blogList', {
    template: require('./blog-list.html'),
    controller: ['$translate', controller],
    controllerAs: 'vm'
  });
}

function controller($translate) {
  const vm = this;

  vm.title = 'Hello';

  vm.onButtonCliked = () => {
    vm.title = $translate.instant('TEST');
  };
}
