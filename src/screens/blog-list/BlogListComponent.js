import './blog-list.scss';
import icon from '../../assets/images/road.jpg';

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
  vm.icon = icon;

  vm.onButtonCliked = () => {
    vm.title = $translate.instant('TEST');
  };
}
