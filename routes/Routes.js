import express from "express";
import {
    getValues,
    deleteValues,
    createValue
} from "../controllers/Controller.js";

const router = express.Router();

router.get('/*', getValues);
router.post('/*', createValue);
router.delete('/*', deleteValues);

export default router;