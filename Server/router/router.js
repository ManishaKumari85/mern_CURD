import express from "express"
const router = express.Router()
import studentController from "../controller/studentController.js"


router.post('/create',studentController.createstudent)
router.get('/get',studentController.getStudent)
router.get("/getId/:id",studentController.getId)
router.put("/update/:id",studentController.updateStudent)
router.delete('/delete',studentController.deleteStudent)
router.delete('/deleteId/:id',studentController.deleteId)


export default router
