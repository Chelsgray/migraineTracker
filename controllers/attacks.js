const Attack = require("../models/Attack");


module.exports = {
  getDashboard: async (req, res) => {
    try {
      const attacks = await Attack.find({ user: req.user.id })
      res.render("dashboard.ejs", { attacks: attacks, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getNewAttack: async (req, res) => {
    try{
      const attacks = await Attack.find({ user: req.user.id});
      res.render("newAttack.ejs", {attacks: attacks, user: req.user})
    } catch (err) {
      console.log(err);
    }
  },
  // getFeed: async (req, res) => {
  //   try {
  //     const posts = await Post.find().sort({ createdAt: "desc" }).lean();
  //     res.render("feed.ejs", { posts: posts });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  getAttack: async (req, res) => {
    try {
      const attack = await Attack.findById(req.params.id);
      res.render("attack.ejs", { attack: attack, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createAttack: async (req, res) => {
    try {
      // const attacks = await Attack.find({ user: req.user.id});
      console.log(req.body)
      await Attack.create({
        user: req.user.id,
        startDate: req.body.startDate, 
        endDate: req.body.endDate,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        painLevel: req.body.painLevel,
        triggers: req.body.triggers,
        aura: req.body.aura,
        medicineTaken: req.body.medicineTaken,
        otherRelief: req.body.otherRelief,
        notes: req.body.notes,
      });
      console.log("Report has been added!");
      // res.redirect("/dashboard");
      res.redirect("/dashboard")
    } catch (err) {
      console.log(err);
    }
  },
  deleteAttack: async (req, res) => {
    try {
      // Find post by id
      let attack = await Attack.findById({ _id: req.params.id });
      // Delete post from db
      await Attack.remove({ _id: req.params.id });
      console.log("Deleted Report");
      res.redirect("/dashboard");
    } catch (err) {
      res.redirect("/dashboard");
    }
  },
};
