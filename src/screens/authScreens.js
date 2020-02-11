import { registerLoginComponent } from './auth/login/LoginComponent';
import { registerForgetPasswordComponent } from './auth/forget-password/ForgetPassword';

export function initializeScreens(ngModule) {
  registerLoginComponent(ngModule);
  registerForgetPasswordComponent(ngModule);
}
