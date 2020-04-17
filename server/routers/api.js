const router = require('express').Router()
const Api1 = require('../api/controllers/api1')
const Api2 = require('../api/controllers/api2')

router.use('/api1', Api1)
router.use('/api2', Api2)

module.exports = router
