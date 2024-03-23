import express from 'express';
import { getData, getFilterData } from '../controllers/data.controller.js';
const router = express.Router();

router.get('/data',getData);
router.get("/filterdata",getFilterData);

export default router