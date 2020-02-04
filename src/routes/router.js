export function initializeRoutes(ngModule) {
  ngModule.config(function($stateProvider) {
    $stateProvider
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
  });
}
