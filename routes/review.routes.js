import { Router } from 'express';
import { getReviews } from './../controller/review.controller.js';

const router = Router();

//define routes...
router.get("/getReviews", getReviews);

export default router