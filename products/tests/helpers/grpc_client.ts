const withDiscount = {
  calcDiscount: (param, callback) => {
    const response = {
      getDiscount: () => 10,
    }

    callback(null, response)
  },
}

const withoutDiscount = {
  calcDiscount: (param, callback) => {
    const response = {
      getDiscount: () => 0,
    }

    callback(null, response)
  },
}

const discountSecondProductError = {
  calcDiscount: ({ array: [ productId ] }, callback) => {
    if (productId === 2) {
      return callback('error', null)
    }

    const response = {
      getDiscount: () => 10,
    }

    callback(null, response)
  },
}

export {
  withDiscount,
  withoutDiscount,
  discountSecondProductError,
}
