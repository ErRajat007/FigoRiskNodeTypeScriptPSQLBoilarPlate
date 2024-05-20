import validationLoginData from '../../middlewares/validation/loginMiddleware';
import validateRegistrationData from '../../middlewares/validation/userRegistrationMiddleware'
import validationChangePassword from '../../middlewares/validation/validationChangePassword'
import validationAccessToken from '../../middlewares/validation/validationAccessToken'

import validationLogout from '../validation/logOut'
export {
  validationLoginData,
  validationLogout,
  validateRegistrationData,
  validationChangePassword,
  validationAccessToken,
};
