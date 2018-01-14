var express = require('express');
var router = express.Router();
var items = require('../controllers/cart');


router.get('/', items.list);
router.get("/new", items.newPage);
router.get("/:id/edit", items.getEdit);
router.post("/", items.new);
//router.put("/:id", items.editPost);
router.delete("/:id", items.deletePost);


module.exports = router;