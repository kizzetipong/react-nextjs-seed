const router = require('express').Router()
const model = require('../models/api1').getInstance()

router.get('/', (req, res) => {
  const allColumns = model.getAll()
  res.json(allColumns)
})

router.get('/:id', (req, res) => {
  const { params } = req
  const api1 = model.find(params.id)
  if (api1) {
    res.json(api1)
  } else {
    res.status(404).send(`api1 id ${params.id} is not found`)
  }
})

router.put('/:id', (req, res) => {
  const { params, body } = req
  const { header } = body
  const success = model.update(params.id, header)
  if (success) {
    res.status(200).send('Update Success')
  } else {
    res.status(500).send(`api1 id ${params.id} is failed to update`)
  }
})

router.delete('/:id', (req, res) => {
  const { params } = req
  const delSuccess = model.delete(params.id)
  if (delSuccess) {
    res.status(200).send('Delete Success')
  } else {
    res.status(500).send(`api1 id ${params.id} is failed to delete`)
  }
})

module.exports = router
