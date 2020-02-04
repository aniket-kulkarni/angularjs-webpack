export default function(ngModule) {
    ngModule
        .component('blogList', {
            template: require('./blog-list.html'),
            controller,
            controllerAs: 'vm'
        });
}

function controller() {
    const vm = this;
    console.log('Hello Controller');

    vm.title = 'Hello';

    vm.onButtonCliked = () => {
        vm.title = 'Clicked';
    };
}
