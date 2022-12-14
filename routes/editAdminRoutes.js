const express = require('express');
const router = express.Router();
const editAdminController = require('../controllers/editAdminController') //EditAdmin Section

router.post('/', editAdminController.editAdmin_create_post);
router.get('/wholesome-food-services', editAdminController.admin_edit_webpage_get2);
router.get('/edit-webpage', editAdminController.admin_edit_webpage_get);


module.exports = router;
