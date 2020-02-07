export function configureTranslations(ngModule) {
  ngModule.config([
    '$translateProvider',
    function($translateProvider) {
      $translateProvider.useSanitizeValueStrategy('escape');
      $translateProvider.useStaticFilesLoader({
        prefix: 'locale/',
        suffix: '.json'
      });
      $translateProvider.preferredLanguage('en_US');
    }
  ]);
}
