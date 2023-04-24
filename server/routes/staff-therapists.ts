import { Router } from "express";
require('dotenv').config();
const router = Router()
import axios from "axios";
import therapistFakeData from "../therapistFakeData";
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();


router.post('/create', (req:any, res: any) => {
const {name, licenseType, photoURL, aboutMe, profExp, yearsExp, licInfo, skills, reviews} = req.body.data
  prisma.staffTherapist.create({
    data: {
            name: name,
            licenseType: licenseType,
  photoURL: photoURL,
  aboutMe: aboutMe,
  profExp: profExp,
  yearsExp: yearsExp,
  licInfo: licInfo,
  skill: {
    create: skills.map((skill:any) => ({
      skill: {
        connectOrCreate: {
          where: { name: skill },
          create: { name: skill }
        }
      }
    }))
  },
  TherapistReviews: {
    create: reviews.map((review:any) => ({
      date: review.date,
      text: review.text,
      rating: review.rating
    }))
  }
   },
  include: {
    TherapistReviews: true,
    skill: true
  }
      })
      .then((response:any)=>{
        res.status(201).send('created a staff therapist', response)
      })
      .catch((err:any)=>{
        res.status(500)
        console.error('did not create staff',err)
      })


    });









export default router;