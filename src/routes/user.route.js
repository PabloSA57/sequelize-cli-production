const router = require('express').Router()
const models = require('../db/models/index')

const {User} = models

router.get('/getuser', async (req, res) => {
    try {
        const response = await User.findAll();
        res.json(response)
    } catch (error) {
        res.status(500).json({msg:'No hay usuario'})
    }
    res.json({msg: 'getuser'})
})

router.post('/adduser', async (req, res) => {
    const {firstName, lastName, email, password} = req.body;

    console.log(firstName)
    try {
        const resp = await   User.create(req.body)
        res.json({msg: resp})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;