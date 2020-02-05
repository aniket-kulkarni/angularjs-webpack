import './blog-list.scss';

export default function(ngModule) {
    ngModule
        .component('blogList', {
            template: require('./blog-list.html'),
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
