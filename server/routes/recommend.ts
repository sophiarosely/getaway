import { Router } from 'express';
const recommendRoutes = Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



recommendRoutes.get('/', async (req: any, res: any) => {
  try {
    const user = await prisma.user.findFirst({ where: { googleId: '117568678137566768509' } });
    console.log(user);
    res.send('Success');
  } catch (error) {
    console.log('Error: ', error);
    res.send('Error');
  }
});

//  this route will be for getting the users recommend
recommendRoutes.post('/list', async (req: any, res: any) => {
  try {
    const { googleId } = req.body.data;
    console.log(googleId)
    const recommend = await prisma.recommend.findMany({ where: { user_id: googleId } });
    res.send(recommend);
  } catch (error) {
    console.log('Error: ', error);
    res.send('Error');
  }
});

// this route will be for posting a new recommend
recommendRoutes.post('/newRecommend', async (req: any, res: any) => {
  try {
    const { data } = req.body;
  const { recommend_name, googleId, recommend_type } = data;

  const newObj = {
    recommend_name: recommend_name,
    recommend_type: recommend_type,
    user_id: googleId
  };

    await prisma.recommend.create( {data: newObj} )

    res.send('Success');
  } catch (error) {
    console.log('Error: ', error);
    res.send('Error');
  }
});
// this will before updating recommend completion
recommendRoutes.post('/completed', async (req: any, res: any) => {
  try {
    console.log(req.body.data)
  const { recommend, user, date, completed } = req.body.data;
   const recommendLog = await prisma.recommendLog.create({
  data: {
    recommend: {
      connect: {
        id: recommend,
      },
    },
    user: {
      connect: {
        googleId: user,
      },
    },
    

  },
});
    res.send("good job");
  } catch (error) {
    console.log('Error: ', error);
    res.send('Error');
  }
});

// this will get all the dates a recommend was updated
recommendRoutes.get('/updatedon/:id', async (req: any, res: any) => {

  try {
 const  {id}  = req.params;

 // this is a goofy work around to the : being in the params
 // im sure there is a better way
 console.log(req.params)
  const recommend = await prisma.recommendLog.findMany({
    where: {
      recommend_id: Number(id.slice(1))
    }
  });
    res.send(recommend);
  } catch (error) {
    console.log('Error: ', error);
    res.send('Error');
  }
});

// this will delete a recommend
recommendRoutes.delete('/delete', async (req: any, res: any) => {
  try {
    const { recommendId } = req.body;

    await prisma.recommendLog.deleteMany({
      where: {
        recommend_id: recommendId
      }
    });

    await prisma.recommend.delete({
      where: {
        id: recommendId
      }
    });

    res.send('Success');
  } catch (error) {
    console.log('Error: ', error);
    res.send('Error');
  }
});

export default recommendRoutes