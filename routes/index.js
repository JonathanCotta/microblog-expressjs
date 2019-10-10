const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const userCtrl = require("../controllers/user");
const postCtrl = require("../controllers/post");
const commentCtrl = require("../controllers/comment");

router.get("/user/", auth, userCtrl.getAll);
router.get("/user/:id", auth, userCtrl.getOne);
router.get("/user/create/", auth("admin"), userCtrl.createForm);
router.post("/user/create/", auth("admin"), userCtrl.create);
router.get("/user/edit/:id", auth, userCtrl.updateForm);
router.post("/user/", auth, userCtrl.update);
router.get("/user/login/", userCtrl.loginForm);
router.post("/user/login/", userCtrl.login);
router.get("/user/logout/", auth, userCtrl.logout);
router.delete("/user/:id", auth("admin"), userCtrl.delete);

router.get("/post/", auth, postCtrl.getAll);
router.get("/post/:id", auth, postCtrl.getOne);
router.get("/post/create/", auth, postCtrl.createForm);
router.post("/post/create/", auth, postCtrl.create);
router.get("/post/edit/:id", auth, postCtrl.updateForm);
router.post("/post/", auth, postCtrl.update);
router.delete("/user/:id", auth("admin"), userCtrl.delete);

router.get("/comment/", auth, commentCtrl.getAll);
router.get("/comment/create/", auth, commentCtrl.createForm);
router.post("/comment/create/", auth, commentCtrl.create);

module.exports = router;