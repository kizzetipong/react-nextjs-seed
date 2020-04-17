const _ = require('lodash')

const DATA_INITIAL = [
  {
    id: '01',
    value: 'AA',
  },
  {
    id: '02',
    value: 'BB',
  },
  {
    id: '03',
    value: 'CC',
  },
  {
    id: '04',
    value: 'DD',
  },
]

module.exports = (() => {
  let instance

  const init = () => {
    let inMemoryModel = DATA_INITIAL // TODO: Connect to real database
    const thisObj = {
      getAll: () => inMemoryModel,
      find: (id) => _.find(inMemoryModel, { id }),
      add: (id, value) => {
        if (thisObj.find(id)) {
          return null
        }
        const newItem = { id, value }
        inMemoryModel = [...inMemoryModel, newItem]
        return inMemoryModel
      },
      update: (id, value) => {
        const updateIdx = _.findIndex(inMemoryModel, { id })
        if (updateIdx > -1) {
          inMemoryModel.splice(updateIdx, 1, {
            id,
            value,
          })
          return true
        }
        return false
      },
      delete: (id) => {
        const removeItem = thisObj.find(id)
        if (removeItem) {
          _.remove(inMemoryModel, { id })
          return true
        }
        return false
      },
    }

    return thisObj
  }

  return {
    getInstance: () => {
      if (!instance) { instance = init() }
      return instance
    },
  }
})()
