const { sendQueryEmail , sendContactQueryEmail } = require('../baseController/emailSender');
const Contact = require('../models/contact');

exports.index = async (req, res) => {
  try {
    res.render("index");
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

exports.contact = async (req, res) => {
  try {
    res.render("contact");
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

exports.saveContact = async (req, res) => {
  try {
    let { userName, userEmail,subject, message } = req.body;

    //database save logic
    const contact = new Contact(req.body);
    await contact.save();


    await sendQueryEmail(userName, userEmail,subject, message);
    res.redirect("/contact");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

exports.gallery = async (req, res) => {
  try {
    res.render("gallery");
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

exports.blog = async (req, res) => {
  try {
    res.render("blog");
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

exports.Activities = async (req, res) => {
  try {
    res.render("Activities");
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

exports.about = async (req, res) => {
  try {
    res.render("about");
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

exports.donate = async (req, res) => {
  try {
    res.render("donate");
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};