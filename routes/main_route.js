const mainController = require("../controllers/main_controller");
var router = require("express").Router();

module.exports = app => {

  router.get("/", mainController.index); 
  // router.get("/index", mainController.index);
  router.get("/contact", mainController.contact)
  router.get("/gallery", mainController.gallery)
  router.get("/about", mainController.about)
  router.get("/gallery", mainController.gallery)
  router.get("/Activities", mainController.Activities)
  router.get("/blog", mainController.blog)
  router.get("/donate", mainController.donate)




  router.post("/save_contact",mainController.saveContact)
  app.use('/', router);
};