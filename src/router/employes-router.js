import { Router } from "express";
import { createempoyes, deleteEmpoyes, getempoyes, getempoyesid, updateEmpoyes } from "../controller/employer-controller.js";
const router = Router()

router.get('/getemployes',getempoyes);
router.post('/createemployes',createempoyes);
router.put('/employes/:id',updateEmpoyes );
router.delete('/employes/:id',deleteEmpoyes );
router.get('/employes/:id',getempoyesid);


export default router