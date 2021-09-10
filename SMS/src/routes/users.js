
var express = require('express');
var router = express.Router();
import userController from '../controllers/users' 

/* GET users listing. */
router.get('/', userController.getAllUsers);
 
router.post('/',userController.addUser);

router.put('/',userController.updateUser)

router.delete('/',userController.deleteUser)


module.exports = router;
