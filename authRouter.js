const Router = require('express');
const router = new Router();
const controller = require('./authController');
const { check } = require('express-validator');
const authMiddleware = require('./middleware/authMiddleware');
const roleMiddleware = require('./middleware/roleMiddleware');

router.post(
  '/registrationNew',
  [
    check('username', 'Имя пользователя не может быть пустым').notEmpty(),
    check('password', 'Пароль не должен быть больше 4 и меньше 10 символов').isLength({
      min: 4,
      max: 10,
    }),
  ],
  controller.registrationNew,
);
router.post('/login', controller.login);
router.get('/users', controller.getUser);
router.get('/me', authMiddleware, controller.me);

module.exports = router;
