interface IProduct {
  id: string
  title: string
  description: string
  price_in_cents: number
  discount: {
    pct: number
    value_in_cents: number
  }
}

const index: () => IProduct[] = () => [
  {
    id: '1',
    price_in_cents: 100,
    title: 'Bola',
    description: 'Esfera chutavel.',
    discount: {
      pct: 0,
      value_in_cents: 0,
    },
  },
]

export { index }
