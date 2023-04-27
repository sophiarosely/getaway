import { Router } from "express";
require('dotenv').config();
const router = Router()
import axios from "axios";
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();



router.post('/save', (req:any, res: any) => {
  const{ googleId } = req.body.data
  const painting = req.body.data

   prisma.user.findFirst({ where: { googleId: googleId } })
   .then((user:any)=>{
console.log(user)
  prisma.paintings
    .create({
      data: {
        url: painting.url,
        user: {
          connect: { id: user.id }
        }
      }
      })
      .then((savedPainting:any) => {
        return prisma.user.update({
          where: { id: user.id },
          data: {
            Paintings: {
              connect: { id: savedPainting.id }
            }
          }
        })
      })
    .then(() => {
      res.status(201).send("successfully saved painting");
    })
    .catch((err: Error) => {
      res.status(500);
      console.error("could not save a painting", err);
    })
   })
   .catch((err:Error)=>{
    res.status(500);
    console.error("could not find user")
   })


});


router.get("/all-paintings", (req, res)=>{
  const { googleId } = req.query
  prisma.user.findFirst({ where: { googleId: googleId }, include: { Paintings: true } })
  .then((user:any)=>{
    res.status(200).send(user.Paintings)
  })
  .catch((err:Error)=>{
    console.error("couldnt fetch user saved therapists", err)
  })
})


export default router;