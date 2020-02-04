import './hello.scss';

export default function(ngModule) {
    ngModule.directive('hello', () => {
        return {
            restrict: 'E',
            scope: {},
            template: require('./hello.html'),
            controllerAs: 'vm',
            controller: function() {
                const vm = this;
                vm.greeting = 'Hi Webpack with Angular JS'
            }
        };
    });
};
