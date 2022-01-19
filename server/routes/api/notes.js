const { Notes: controller } = require('../../controllers');
const router = require('express').Router();

router.get("/", controller.findAll);

router.post("/", controller.create);

router.delete("/:id", controller.delete);

module.exports = router;