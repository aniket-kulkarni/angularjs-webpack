import { registerBlogComponent } from './blog-list/BlogListComponent';

export function initializeScreens(ngModule) {
  registerBlogComponent(ngModule);
}
