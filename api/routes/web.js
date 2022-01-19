import express from 'express';
import StudentController from '../controllers/studentController.js';

import forgotController from '../controllers/forgotController.js';

const router = express.Router();
//student
router.get('/', StudentController.getAllDoc)
router.post('/', StudentController.createDoc)
router.get('/:id', StudentController.getSingleDocByid)
router.put('/:id', StudentController.updateDocById)
router.delete('/:id', StudentController.deleteDocById)

//login
// router.get('/login', loginController.getloginDoc)

//  
 router.get('/forgot', forgotController.getForgotData)

export default router