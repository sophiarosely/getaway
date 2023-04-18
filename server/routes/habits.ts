const habitsRoutes = require('express').Router();




habitsRoutes.get('/', (req: any, res: any) => {
    console.log("hi")

        res.send("hi");
    }
)


module.exports = habitsRoutes;