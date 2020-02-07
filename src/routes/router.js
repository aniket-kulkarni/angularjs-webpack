export function initializeRoutes(ngModule) {
  ngModule.config([
    '$urlRouterProvider',
    '$stateProvider',
    function($urlRouterProvider, $stateProvider) {
      $stateProvider
        .state({
          name: 'root',
          url: '/',
          template: '<p>Packup bhai packup </p>'
        })
        .state({
          name: 'hello',
          url: '/hello',
          template: '<hello></hello>'
        })
        .state({
          name: 'blogs',
          url: '/blogs',
          template: '<blog-list></blog-list>'
        });

      $urlRouterProvider.otherwise('/');
    }
  ]);
}
