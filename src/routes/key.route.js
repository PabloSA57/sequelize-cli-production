const router = require('express').Router()
const models = require('../db/models/index')

const {Key, User} = models


router.post('/addkey', async (req, res) => {

    try {
        const resp = await Key.create(req.body)
        res.json({msg: resp})
    } catch (error) {
        res.json({state: 404, msg: error})
    }
})

router.get('/getkey', async (req, res) => {
    try {
        const resp = await Key.findOne({where: {user_id: 1}, include: [{model: User}]})
        res.json({msg: resp})
    } catch (error) {
        res.json({msg:error})
    }
})
module.exports = router;