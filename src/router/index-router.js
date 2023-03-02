import { Router } from "express";
import { getindex } from "../controller/indexController.js";

const router = Router()
router.get('/ping',getindex);


export default router;
