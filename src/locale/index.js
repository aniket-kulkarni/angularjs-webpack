export function configureTranslations(ngModule) {
  ngModule.config([
    '$translateProvider',
    function($translateProvider) {
      $translateProvider.useSanitizeValueStrategy('escape');
      $translateProvider.useStaticFilesLoader({
        // refer webpack.common.js for the reason of use of LOCALE_BASE
        prefix: LOCALE_BASE + `locale/`, // eslint-disable-line prefer-template
        suffix: '.json'
      });
      $translateProvider.preferredLanguage('en_US');
    }
  ]);
}
