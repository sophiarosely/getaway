const routes = require("express").Router();
const passportRoute = require("passport");
const CLIENT_URL= process.env.CLIENT_URL;

routes.get("/login/success", (req:any, res:any)=>{
  if (req.user){
    res.status(200).json({
      success: true,
      message: "Succesful",
      user: req.user,
      cookies:req.cookies
    })
  }

})

routes.get("/login/failed", (req:any, res:any)=>{
  res.status(401).json({
    success: false,
    message: "failure",
  })
});

routes.get('/logout', (req:any, res:any) => {
  req.logout(() => {
    if (req.session) {
      req.session.destroy();
    }
  });
  res.redirect('/');
});

routes.get("/google", passportRoute.authenticate("google", { scope: ["profile"] }));

routes.get("/google/callback", passportRoute.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed"
}));


module.exports = routes