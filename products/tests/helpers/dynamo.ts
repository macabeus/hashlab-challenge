const dynamoProducts: any = {
  scan: (query, callback) => {
    callback(null, {
      Items: [
        {
          Title: { S: 'Bola' },
          Id: { N: '1' },
          Description: { S: 'Esfera chutavel.' },
          Price: { N: '125' },
        },
      ],
    })
  },
}

const dynamoTwoProducts: any = {
  scan: (query, callback) => {
    callback(null, {
      Items: [
        {
          Title: { S: 'Bola' },
          Id: { N: '1' },
          Description: { S: 'Esfera chutavel.' },
          Price: { N: '125' },
        },
        {
          Title: { S: 'Pirulito' },
          Id: { N: '2' },
          Description: { S: 'Tipo o do quico.' },
          Price: { N: '200' },
        },
      ],
    })
  },
}

const dynamoFail: any = {
  scan: (query, callback) => {
    callback('error', null)
  },
}

export {
  dynamoProducts,
  dynamoTwoProducts,
  dynamoFail,
}
