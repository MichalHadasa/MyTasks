const router=require("express").Router();
const user=require("../controllers/user")
const task=require("../controllers/task")
const authenticateToken=require("../middelwares/authenticateToken");
const decodeIDToken=require("../middelwares/authMiddleware");

router.get('/login/:email/:password',decodeIDToken,user.getUserByEmailAndPassword)
router.get('/getAllUsers',user.getAllUsers)
router.post('/register',decodeIDToken,user.saveUser)
router.put('/update/:id',authenticateToken,user.updateUserById)

router.post('/saveTask',authenticateToken,task.saveTask)
router.get('/getTaskByUserId/:id',authenticateToken,task.getTaskByUserId)
router.delete('/deleteTask/:id',authenticateToken,task.deleteTask);
router.put('/updateTask/:id',authenticateToken,task.updateTask);
module.exports=router;