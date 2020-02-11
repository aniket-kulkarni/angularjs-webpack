export function initializeRoutes(ngModule) {
  ngModule.config([
    '$urlRouterProvider',
    '$stateProvider',
    function($urlRouterProvider, $stateProvider) {
      $stateProvider
        .state({
          name: 'root',
          url: '/',
          template: '<p>Login bhai Login </p>'
        })
        .state({
          name: 'login',
          url: '/login',
          template: '<login></login>'
        })
        .state({
          name: 'forget-password',
          url: '/forget-password',
          template: '<forget-password></forget-password>'
        });

      $urlRouterProvider.otherwise('/');
    }
  ]);
}
