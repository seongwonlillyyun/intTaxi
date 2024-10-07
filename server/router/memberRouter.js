import express from 'express'
import * as controller from '../controller/memberController';

export default router = express.Router();
    router.post('/signup', controller.getSignup)