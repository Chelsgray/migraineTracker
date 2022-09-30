const express = require("express");
const router = express.Router();
// const upload = require("../middleware/multer");

const attacksController = require("../controllers/attacks");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


//Post Routes - simplified for now
router.get("/:id", ensureAuth, attacksController.getAttack);

router.post("/createAttack", attacksController.createAttack);

// router.put("/likePost/:id", postsController.likePost);

router.delete("/deleteAttack/:id", attacksController.deleteAttack);

module.exports = router;
