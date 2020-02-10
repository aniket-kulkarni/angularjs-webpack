const { module, inject } = angular.mock;

describe('BlogListComponent', function() {
  let $componentController;
  let component;

  beforeEach(module('user-app'));
  beforeEach(inject($injector => {
    $componentController = $injector.get('$componentController');
    component = $componentController('blogList', { $scope: {} });
  }));

  it('should have the initial title', () => {
    expect(component.title).toBe('Hello');
  });

  it('should change the title on clicking the button', () => {
    component.onButtonCliked();
    expect(component.title).toBe('TEST');
  });
});
