import { LocalRootState } from './../store/reducers/index';
export const initialReduxStore: LocalRootState = {
  admin: {
    isLoading: false,
    error: null,
    isDeleted: false,
    isUploaded: false,
    isUpdating: false,
    isUpdated: false,
    isCreated: false,
  },
  products: {
    products: [
      {
        department: 'men',
        colors: ['Pearl', 'White', ''],
        size: ['10.5'],
        _id: '60ec4b0d182a728b9d356c34',
        brand: 'Air Jordan',
        description:
          "In 1992, Michael Jordan laced up his Air Jordan VII sneakers to win a 2nd consecutive NBA Championship, and a gold medal with the 'Dream Team' in the Olympic Games. For this Air Jordan, Tinker Hatfield drew inspiration from West African tribal art and created a unique design. But the Air Jordan VII isn't just looks, this sneaker was also applauded for comfort on the court due to its neoprene sockliner, which provides a snug fit.",
        images: [
          {
            _id: '60ec4b0d182a728b9d356c35',
            public_id: 'sneaker-maniacs/products/cummusiuf80rolweuzjs',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626098444/sneaker-maniacs/products/cummusiuf80rolweuzjs.png',
          },
        ],
        model: 'VII (7) Retro',
        price: 399,
        styleCode: '304775-281',
      },
      {
        department: 'men',
        colors: ['White', 'Black'],
        size: ['7.5'],
        _id: '60ec4beb182a728b9d356c44',
        brand: 'Nike',
        description: 'Nike Air Vapormax Plus',
        images: [
          {
            _id: '60ec4beb182a728b9d356c45',
            public_id: 'sneaker-maniacs/products/cljhv7wwz3va5rg5pilr',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626098663/sneaker-maniacs/products/cljhv7wwz3va5rg5pilr.png',
          },
          {
            _id: '60ec4beb182a728b9d356c46',
            public_id: 'sneaker-maniacs/products/cr1ter0wc7y4mtzjli8z',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626098666/sneaker-maniacs/products/cr1ter0wc7y4mtzjli8z.png',
          },
        ],
        model: 'Air Vapormax Plus',
        price: 270,
        styleCode: 'mss-cw6974100',
      },
      {
        department: 'men',
        colors: ['Olive', 'Green', 'Black'],
        size: ['11'],
        _id: '60ec4ed2d388149e14b8176c',
        brand: 'Air Jordan',
        description: 'Air Jordan 6 Retro SP Travis Scott',
        images: [
          {
            _id: '60ed38efcc67692e872368ae',
            public_id: 'sneaker-maniacs/products/x5wvjejbjpyrbmrxv7pq',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626159343/sneaker-maniacs/products/x5wvjejbjpyrbmrxv7pq.png',
          },
        ],
        model: 'Air Jordan 6 Retro SP Travis Scott',
        price: 800,
        styleCode: 'xyzA23zx',
      },
      {
        department: 'women',
        colors: ['Sail', 'Mocha', 'Black', 'White'],
        size: ['7', '7.5', '8', '9', '10', '11', '12', '12.5'],
        _id: '60ec87e907700a3bef404d32',
        brand: 'Air Jordan',
        description: 'OG Travis Scott',
        images: [
          {
            _id: '60eee93bf6551d566f99253e',
            public_id: 'sneaker-maniacs/products/dxskvzzxt3wgeisai9wi',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626270008/sneaker-maniacs/products/dxskvzzxt3wgeisai9wi.png',
          },
          {
            _id: '60eee93bf6551d566f99253f',
            public_id: 'sneaker-maniacs/products/xwakwmjm1n9jcimi6efz',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626270010/sneaker-maniacs/products/xwakwmjm1n9jcimi6efz.png',
          },
        ],
        model: 'OG Travis Scott',
        price: 1200,
        styleCode: 'zxy-cw6974100',
      },
      {
        department: 'men',
        colors: ['black', 'gold', 'greene'],
        size: ['7'],
        _id: '60ed779ff236a82619a8002e',
        brand: 'Adidas',
        description:
          'Adidas teamed up Pharrell Williams on this limited sneaker. The Adidas Pharrell Williams Solar HU Glide is crafted with a breathable mesh upper, sock-like construction, energy-returning Boost technology, molded heel counter, and a rubber outsole.',
        images: [
          {
            _id: '60ed779ff236a82619a8002f',
            public_id: 'sneaker-maniacs/products/miptshnlp3oexshskdj6',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626175387/sneaker-maniacs/products/miptshnlp3oexshskdj6.png',
          },
          {
            _id: '60ed779ff236a82619a80030',
            public_id: 'sneaker-maniacs/products/whgljjbwwrms4ho0ee3x',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626175391/sneaker-maniacs/products/whgljjbwwrms4ho0ee3x.png',
          },
        ],
        model: 'Pharrell Williams Solar HU Glide',
        price: 320,
        styleCode: 'bb8042',
      },
      {
        department: 'men',
        colors: ['Orange', 'Black', 'White'],
        size: ['11'],
        _id: '60ed77e0f236a82619a80034',
        brand: 'Adidas',
        description:
          'Boasting a design inspired by several classic Adidas models (Micro Pacer, Rising Star, and Boston Super), the Adidas NMD Runner is an ultra comfortable sneaker with a contemporary design. They are crafted with a breathable and flexible Primeknit upper, energy-returning Boost technology, leather heel badge, bootie construction, and a webbed rubber outsole.',
        images: [
          {
            _id: '60ed784ef236a82619a8003a',
            public_id: 'sneaker-maniacs/products/ffsscrm5ghlruvyugkdy',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626175566/sneaker-maniacs/products/ffsscrm5ghlruvyugkdy.png',
          },
        ],
        model: 'NMD_R1',
        price: 140,
        styleCode: 'ac8171',
      },
      {
        department: 'men',
        colors: ['Black'],
        size: ['11'],
        _id: '60edd01c01d3ca10f5eafa49',
        brand: 'Adidas',
        description:
          'Developed by Kanye West, the Adidas Yeezy 500 is a sporty and stylish model. They are crafted with a combination of premium suede, leather, and mesh, feature an adiPRENE sole, piping details, pull tab, and a rubber outsole.',
        images: [
          {
            _id: '60edd01c01d3ca10f5eafa4a',
            public_id: 'sneaker-maniacs/products/xmh4goid166sizjv83b1',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626198036/sneaker-maniacs/products/xmh4goid166sizjv83b1.png',
          },
          {
            _id: '60edd01c01d3ca10f5eafa4b',
            public_id: 'sneaker-maniacs/products/ofml12qnkwlrdvlofwl5',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626198038/sneaker-maniacs/products/ofml12qnkwlrdvlofwl5.png',
          },
          {
            _id: '60edd01c01d3ca10f5eafa4c',
            public_id: 'sneaker-maniacs/products/rr3ivdk0o7vvwd1qb1wg',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626198041/sneaker-maniacs/products/rr3ivdk0o7vvwd1qb1wg.png',
          },
          {
            _id: '60edd01c01d3ca10f5eafa4d',
            public_id: 'sneaker-maniacs/products/thypql9jsyvgyie0qglr',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626198043/sneaker-maniacs/products/thypql9jsyvgyie0qglr.png',
          },
        ],
        model: 'Yeezy 500',
        price: 550,
        styleCode: 'f36640',
      },
      {
        department: 'men',
        colors: ['Enflame', 'Orange'],
        size: ['7', '8', '9', '10', '10.5', '11', '11.5', '12'],
        _id: '60eee5c7f6551d566f992501',
        brand: 'Adidas',
        description:
          'Developed by Kanye West, the Adidas Yeezy 500 is a sporty and stylish model. They are crafted with a combination of premium suede, leather, and mesh, feature an adiPRENE sole, piping details, pull tab, and a rubber outsole. Adidas Yeezy 500 (Enflame) gz5541 is first released in May 2021',
        images: [
          {
            _id: '60eee5c7f6551d566f992502',
            public_id: 'sneaker-maniacs/products/fatvqe7fmnjk26efvqwh',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626269121/sneaker-maniacs/products/fatvqe7fmnjk26efvqwh.png',
          },
          {
            _id: '60eee5c7f6551d566f992503',
            public_id: 'sneaker-maniacs/products/ysd5w3zmfhn4voeo0ekt',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626269127/sneaker-maniacs/products/ysd5w3zmfhn4voeo0ekt.png',
          },
        ],
        model: 'Yeezy 500 (Enflame)',
        price: 300,
        styleCode: 'gz5541',
      },
      {
        department: 'men',
        colors: ['Olive', 'Duck', 'Camo'],
        size: ['7', '7.5', '9', '10', '11.5', '12'],
        _id: '60eeea4af6551d566f992547',
        brand: 'Adidas',
        description:
          'Boasting a design inspired by several classic Adidas models (Micro Pacer, Rising Star, and Boston Super), the Adidas NMD_XR1 is an ultra comfortable sneaker with a contemporary design. They are crafted with a breathable and flexible knit upper, energy-returning Boost technology, TPU midfoot cage, bootie construction, and a webbed rubber outsole.',
        images: [
          {
            _id: '60eeea4af6551d566f992548',
            public_id: 'sneaker-maniacs/products/jgsp889cuc7hg95xrhxk',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626270276/sneaker-maniacs/products/jgsp889cuc7hg95xrhxk.png',
          },
          {
            _id: '60eeea4af6551d566f992549',
            public_id: 'sneaker-maniacs/products/ex8vpv4hn3rmfx5mrooj',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626270279/sneaker-maniacs/products/ex8vpv4hn3rmfx5mrooj.png',
          },
          {
            _id: '60eeea4af6551d566f99254a',
            public_id: 'sneaker-maniacs/products/vhegozjatjeuqwawykyd',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626270281/sneaker-maniacs/products/vhegozjatjeuqwawykyd.png',
          },
        ],
        model: 'NMD_XR1',
        price: 190,
        styleCode: 'ba7232',
      },
    ],
    product: {
      department: 'men',
      colors: ['White', 'Black'],
      size: ['7.5'],
      _id: '60ec4beb182a728b9d356c44',
      brand: 'Nike',
      description: 'Nike Air Vapormax Plus',
      images: [
        {
          _id: '60ec4beb182a728b9d356c45',
          public_id: 'sneaker-maniacs/products/cljhv7wwz3va5rg5pilr',
          url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626098663/sneaker-maniacs/products/cljhv7wwz3va5rg5pilr.png',
        },
        {
          _id: '60ec4beb182a728b9d356c46',
          public_id: 'sneaker-maniacs/products/cr1ter0wc7y4mtzjli8z',
          url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626098666/sneaker-maniacs/products/cr1ter0wc7y4mtzjli8z.png',
        },
      ],
      model: 'Air Vapormax Plus',
      price: 270,
      styleCode: 'mss-cw6974100',
    },
    filters: {
      brand: '',
      color: '',
      size: '',
      department: '',
    },
    filteredProducts: [
      {
        department: 'men',
        colors: ['Pearl', 'White', ''],
        size: ['10.5'],
        _id: '60ec4b0d182a728b9d356c34',
        brand: 'Air Jordan',
        description:
          "In 1992, Michael Jordan laced up his Air Jordan VII sneakers to win a 2nd consecutive NBA Championship, and a gold medal with the 'Dream Team' in the Olympic Games. For this Air Jordan, Tinker Hatfield drew inspiration from West African tribal art and created a unique design. But the Air Jordan VII isn't just looks, this sneaker was also applauded for comfort on the court due to its neoprene sockliner, which provides a snug fit.",
        images: [
          {
            _id: '60ec4b0d182a728b9d356c35',
            public_id: 'sneaker-maniacs/products/cummusiuf80rolweuzjs',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626098444/sneaker-maniacs/products/cummusiuf80rolweuzjs.png',
          },
        ],
        model: 'VII (7) Retro',
        price: 399,
        styleCode: '304775-281',
      },
      {
        department: 'men',
        colors: ['White', 'Black'],
        size: ['7.5'],
        _id: '60ec4beb182a728b9d356c44',
        brand: 'Nike',
        description: 'Nike Air Vapormax Plus',
        images: [
          {
            _id: '60ec4beb182a728b9d356c45',
            public_id: 'sneaker-maniacs/products/cljhv7wwz3va5rg5pilr',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626098663/sneaker-maniacs/products/cljhv7wwz3va5rg5pilr.png',
          },
          {
            _id: '60ec4beb182a728b9d356c46',
            public_id: 'sneaker-maniacs/products/cr1ter0wc7y4mtzjli8z',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626098666/sneaker-maniacs/products/cr1ter0wc7y4mtzjli8z.png',
          },
        ],
        model: 'Air Vapormax Plus',
        price: 270,
        styleCode: 'mss-cw6974100',
      },
      {
        department: 'men',
        colors: ['Olive', 'Green', 'Black'],
        size: ['11'],
        _id: '60ec4ed2d388149e14b8176c',
        brand: 'Air Jordan',
        description: 'Air Jordan 6 Retro SP Travis Scott',
        images: [
          {
            _id: '60ed38efcc67692e872368ae',
            public_id: 'sneaker-maniacs/products/x5wvjejbjpyrbmrxv7pq',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626159343/sneaker-maniacs/products/x5wvjejbjpyrbmrxv7pq.png',
          },
        ],
        model: 'Air Jordan 6 Retro SP Travis Scott',
        price: 800,
        styleCode: 'xyzA23zx',
      },
      {
        department: 'women',
        colors: ['Sail', 'Mocha', 'Black', 'White'],
        size: ['7', '7.5', '8', '9', '10', '11', '12', '12.5'],
        _id: '60ec87e907700a3bef404d32',
        brand: 'Air Jordan',
        description: 'OG Travis Scott',
        images: [
          {
            _id: '60eee93bf6551d566f99253e',
            public_id: 'sneaker-maniacs/products/dxskvzzxt3wgeisai9wi',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626270008/sneaker-maniacs/products/dxskvzzxt3wgeisai9wi.png',
          },
          {
            _id: '60eee93bf6551d566f99253f',
            public_id: 'sneaker-maniacs/products/xwakwmjm1n9jcimi6efz',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626270010/sneaker-maniacs/products/xwakwmjm1n9jcimi6efz.png',
          },
        ],
        model: 'OG Travis Scott',
        price: 1200,
        styleCode: 'zxy-cw6974100',
      },
      {
        department: 'men',
        colors: ['black', 'gold', 'greene'],
        size: ['7'],
        _id: '60ed779ff236a82619a8002e',
        brand: 'Adidas',
        description:
          'Adidas teamed up Pharrell Williams on this limited sneaker. The Adidas Pharrell Williams Solar HU Glide is crafted with a breathable mesh upper, sock-like construction, energy-returning Boost technology, molded heel counter, and a rubber outsole.',
        images: [
          {
            _id: '60ed779ff236a82619a8002f',
            public_id: 'sneaker-maniacs/products/miptshnlp3oexshskdj6',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626175387/sneaker-maniacs/products/miptshnlp3oexshskdj6.png',
          },
          {
            _id: '60ed779ff236a82619a80030',
            public_id: 'sneaker-maniacs/products/whgljjbwwrms4ho0ee3x',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626175391/sneaker-maniacs/products/whgljjbwwrms4ho0ee3x.png',
          },
        ],
        model: 'Pharrell Williams Solar HU Glide',
        price: 320,
        styleCode: 'bb8042',
      },
      {
        department: 'men',
        colors: ['Orange', 'Black', 'White'],
        size: ['11'],
        _id: '60ed77e0f236a82619a80034',
        brand: 'Adidas',
        description:
          'Boasting a design inspired by several classic Adidas models (Micro Pacer, Rising Star, and Boston Super), the Adidas NMD Runner is an ultra comfortable sneaker with a contemporary design. They are crafted with a breathable and flexible Primeknit upper, energy-returning Boost technology, leather heel badge, bootie construction, and a webbed rubber outsole.',
        images: [
          {
            _id: '60ed784ef236a82619a8003a',
            public_id: 'sneaker-maniacs/products/ffsscrm5ghlruvyugkdy',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626175566/sneaker-maniacs/products/ffsscrm5ghlruvyugkdy.png',
          },
        ],
        model: 'NMD_R1',
        price: 140,
        styleCode: 'ac8171',
      },
      {
        department: 'men',
        colors: ['Black'],
        size: ['11'],
        _id: '60edd01c01d3ca10f5eafa49',
        brand: 'Adidas',
        description:
          'Developed by Kanye West, the Adidas Yeezy 500 is a sporty and stylish model. They are crafted with a combination of premium suede, leather, and mesh, feature an adiPRENE sole, piping details, pull tab, and a rubber outsole.',
        images: [
          {
            _id: '60edd01c01d3ca10f5eafa4a',
            public_id: 'sneaker-maniacs/products/xmh4goid166sizjv83b1',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626198036/sneaker-maniacs/products/xmh4goid166sizjv83b1.png',
          },
          {
            _id: '60edd01c01d3ca10f5eafa4b',
            public_id: 'sneaker-maniacs/products/ofml12qnkwlrdvlofwl5',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626198038/sneaker-maniacs/products/ofml12qnkwlrdvlofwl5.png',
          },
          {
            _id: '60edd01c01d3ca10f5eafa4c',
            public_id: 'sneaker-maniacs/products/rr3ivdk0o7vvwd1qb1wg',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626198041/sneaker-maniacs/products/rr3ivdk0o7vvwd1qb1wg.png',
          },
          {
            _id: '60edd01c01d3ca10f5eafa4d',
            public_id: 'sneaker-maniacs/products/thypql9jsyvgyie0qglr',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626198043/sneaker-maniacs/products/thypql9jsyvgyie0qglr.png',
          },
        ],
        model: 'Yeezy 500',
        price: 550,
        styleCode: 'f36640',
      },
      {
        department: 'men',
        colors: ['Enflame', 'Orange'],
        size: ['7', '8', '9', '10', '10.5', '11', '11.5', '12'],
        _id: '60eee5c7f6551d566f992501',
        brand: 'Adidas',
        description:
          'Developed by Kanye West, the Adidas Yeezy 500 is a sporty and stylish model. They are crafted with a combination of premium suede, leather, and mesh, feature an adiPRENE sole, piping details, pull tab, and a rubber outsole. Adidas Yeezy 500 (Enflame) gz5541 is first released in May 2021',
        images: [
          {
            _id: '60eee5c7f6551d566f992502',
            public_id: 'sneaker-maniacs/products/fatvqe7fmnjk26efvqwh',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626269121/sneaker-maniacs/products/fatvqe7fmnjk26efvqwh.png',
          },
          {
            _id: '60eee5c7f6551d566f992503',
            public_id: 'sneaker-maniacs/products/ysd5w3zmfhn4voeo0ekt',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626269127/sneaker-maniacs/products/ysd5w3zmfhn4voeo0ekt.png',
          },
        ],
        model: 'Yeezy 500 (Enflame)',
        price: 300,
        styleCode: 'gz5541',
      },
      {
        department: 'men',
        colors: ['Olive', 'Duck', 'Camo'],
        size: ['7', '7.5', '9', '10', '11.5', '12'],
        _id: '60eeea4af6551d566f992547',
        brand: 'Adidas',
        description:
          'Boasting a design inspired by several classic Adidas models (Micro Pacer, Rising Star, and Boston Super), the Adidas NMD_XR1 is an ultra comfortable sneaker with a contemporary design. They are crafted with a breathable and flexible knit upper, energy-returning Boost technology, TPU midfoot cage, bootie construction, and a webbed rubber outsole.',
        images: [
          {
            _id: '60eeea4af6551d566f992548',
            public_id: 'sneaker-maniacs/products/jgsp889cuc7hg95xrhxk',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626270276/sneaker-maniacs/products/jgsp889cuc7hg95xrhxk.png',
          },
          {
            _id: '60eeea4af6551d566f992549',
            public_id: 'sneaker-maniacs/products/ex8vpv4hn3rmfx5mrooj',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626270279/sneaker-maniacs/products/ex8vpv4hn3rmfx5mrooj.png',
          },
          {
            _id: '60eeea4af6551d566f99254a',
            public_id: 'sneaker-maniacs/products/vhegozjatjeuqwawykyd',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626270281/sneaker-maniacs/products/vhegozjatjeuqwawykyd.png',
          },
        ],
        model: 'NMD_XR1',
        price: 190,
        styleCode: 'ba7232',
      },
    ],
    isLoading: false,
    error: null,
  },
  ui: {
    isModalOpen: false,
    modalYposition: 0,
    modalContent: null,
  },
  auth: {
    user: null,
    isLoading: false,
    isAuthenticated: false,
    isRegistered: false,
    success: false,
    error: null,
    isUpdated: false,
  },
  cart: {
    cart: [
      {
        productID: '60eeea4af6551d566f992547',
        brand: 'Adidas',
        model: 'NMD_XR1',
        price: 190,
        productImg:
          'https://res.cloudinary.com/vovaushenko/image/upload/v1626270276/sneaker-maniacs/products/jgsp889cuc7hg95xrhxk.png',
        size: '7',
      },
    ],
    discount: 0,
    total: 190,
    productAmount: 1,
  },
  recentlyViewed: {
    viewedProducts: [
      {
        department: 'men',
        colors: ['Pearl', 'White', ''],
        size: ['10.5'],
        _id: '60ec4b0d182a728b9d356c34',
        brand: 'Air Jordan',
        description:
          "In 1992, Michael Jordan laced up his Air Jordan VII sneakers to win a 2nd consecutive NBA Championship, and a gold medal with the 'Dream Team' in the Olympic Games. For this Air Jordan, Tinker Hatfield drew inspiration from West African tribal art and created a unique design. But the Air Jordan VII isn't just looks, this sneaker was also applauded for comfort on the court due to its neoprene sockliner, which provides a snug fit.",
        images: [
          {
            _id: '60ec4b0d182a728b9d356c35',
            public_id: 'sneaker-maniacs/products/cummusiuf80rolweuzjs',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626098444/sneaker-maniacs/products/cummusiuf80rolweuzjs.png',
          },
        ],
        model: 'VII (7) Retro',
        price: 399,
        styleCode: '304775-281',
      },
      {
        department: 'men',
        colors: ['Enflame', 'Orange'],
        size: ['7', '8', '9', '10', '10.5', '11', '11.5', '12'],
        _id: '60eee5c7f6551d566f992501',
        brand: 'Adidas',
        description:
          'Developed by Kanye West, the Adidas Yeezy 500 is a sporty and stylish model. They are crafted with a combination of premium suede, leather, and mesh, feature an adiPRENE sole, piping details, pull tab, and a rubber outsole. Adidas Yeezy 500 (Enflame) gz5541 is first released in May 2021',
        images: [
          {
            _id: '60eee5c7f6551d566f992502',
            public_id: 'sneaker-maniacs/products/fatvqe7fmnjk26efvqwh',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626269121/sneaker-maniacs/products/fatvqe7fmnjk26efvqwh.png',
          },
          {
            _id: '60eee5c7f6551d566f992503',
            public_id: 'sneaker-maniacs/products/ysd5w3zmfhn4voeo0ekt',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626269127/sneaker-maniacs/products/ysd5w3zmfhn4voeo0ekt.png',
          },
        ],
        model: 'Yeezy 500 (Enflame)',
        price: 300,
        styleCode: 'gz5541',
      },
      {
        department: 'men',
        colors: ['Black'],
        size: ['11'],
        _id: '60edd01c01d3ca10f5eafa49',
        brand: 'Adidas',
        description:
          'Developed by Kanye West, the Adidas Yeezy 500 is a sporty and stylish model. They are crafted with a combination of premium suede, leather, and mesh, feature an adiPRENE sole, piping details, pull tab, and a rubber outsole.',
        images: [
          {
            _id: '60edd01c01d3ca10f5eafa4a',
            public_id: 'sneaker-maniacs/products/xmh4goid166sizjv83b1',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626198036/sneaker-maniacs/products/xmh4goid166sizjv83b1.png',
          },
          {
            _id: '60edd01c01d3ca10f5eafa4b',
            public_id: 'sneaker-maniacs/products/ofml12qnkwlrdvlofwl5',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626198038/sneaker-maniacs/products/ofml12qnkwlrdvlofwl5.png',
          },
          {
            _id: '60edd01c01d3ca10f5eafa4c',
            public_id: 'sneaker-maniacs/products/rr3ivdk0o7vvwd1qb1wg',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626198041/sneaker-maniacs/products/rr3ivdk0o7vvwd1qb1wg.png',
          },
          {
            _id: '60edd01c01d3ca10f5eafa4d',
            public_id: 'sneaker-maniacs/products/thypql9jsyvgyie0qglr',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626198043/sneaker-maniacs/products/thypql9jsyvgyie0qglr.png',
          },
        ],
        model: 'Yeezy 500',
        price: 550,
        styleCode: 'f36640',
      },
      {
        department: 'men',
        colors: ['Olive', 'Duck', 'Camo'],
        size: ['7', '7.5', '9', '10', '11.5', '12'],
        _id: '60eeea4af6551d566f992547',
        brand: 'Adidas',
        description:
          'Boasting a design inspired by several classic Adidas models (Micro Pacer, Rising Star, and Boston Super), the Adidas NMD_XR1 is an ultra comfortable sneaker with a contemporary design. They are crafted with a breathable and flexible knit upper, energy-returning Boost technology, TPU midfoot cage, bootie construction, and a webbed rubber outsole.',
        images: [
          {
            _id: '60eeea4af6551d566f992548',
            public_id: 'sneaker-maniacs/products/jgsp889cuc7hg95xrhxk',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626270276/sneaker-maniacs/products/jgsp889cuc7hg95xrhxk.png',
          },
          {
            _id: '60eeea4af6551d566f992549',
            public_id: 'sneaker-maniacs/products/ex8vpv4hn3rmfx5mrooj',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626270279/sneaker-maniacs/products/ex8vpv4hn3rmfx5mrooj.png',
          },
          {
            _id: '60eeea4af6551d566f99254a',
            public_id: 'sneaker-maniacs/products/vhegozjatjeuqwawykyd',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626270281/sneaker-maniacs/products/vhegozjatjeuqwawykyd.png',
          },
        ],
        model: 'NMD_XR1',
        price: 190,
        styleCode: 'ba7232',
      },
      {
        department: 'men',
        colors: ['black', 'gold', 'greene'],
        size: ['7'],
        _id: '60ed779ff236a82619a8002e',
        brand: 'Adidas',
        description:
          'Adidas teamed up Pharrell Williams on this limited sneaker. The Adidas Pharrell Williams Solar HU Glide is crafted with a breathable mesh upper, sock-like construction, energy-returning Boost technology, molded heel counter, and a rubber outsole.',
        images: [
          {
            _id: '60ed779ff236a82619a8002f',
            public_id: 'sneaker-maniacs/products/miptshnlp3oexshskdj6',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626175387/sneaker-maniacs/products/miptshnlp3oexshskdj6.png',
          },
          {
            _id: '60ed779ff236a82619a80030',
            public_id: 'sneaker-maniacs/products/whgljjbwwrms4ho0ee3x',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626175391/sneaker-maniacs/products/whgljjbwwrms4ho0ee3x.png',
          },
        ],
        model: 'Pharrell Williams Solar HU Glide',
        price: 320,
        styleCode: 'bb8042',
      },
      {
        department: 'men',
        colors: ['Orange', 'Black', 'White'],
        size: ['11'],
        _id: '60ed77e0f236a82619a80034',
        brand: 'Adidas',
        description:
          'Boasting a design inspired by several classic Adidas models (Micro Pacer, Rising Star, and Boston Super), the Adidas NMD Runner is an ultra comfortable sneaker with a contemporary design. They are crafted with a breathable and flexible Primeknit upper, energy-returning Boost technology, leather heel badge, bootie construction, and a webbed rubber outsole.',
        images: [
          {
            _id: '60ed784ef236a82619a8003a',
            public_id: 'sneaker-maniacs/products/ffsscrm5ghlruvyugkdy',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626175566/sneaker-maniacs/products/ffsscrm5ghlruvyugkdy.png',
          },
        ],
        model: 'NMD_R1',
        price: 140,
        styleCode: 'ac8171',
      },
      {
        department: 'men',
        colors: ['Olive', 'Green', 'Black'],
        size: ['11'],
        _id: '60ec4ed2d388149e14b8176c',
        brand: 'Air Jordan',
        description: 'Air Jordan 6 Retro SP Travis Scott',
        images: [
          {
            _id: '60ed38efcc67692e872368ae',
            public_id: 'sneaker-maniacs/products/x5wvjejbjpyrbmrxv7pq',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626159343/sneaker-maniacs/products/x5wvjejbjpyrbmrxv7pq.png',
          },
        ],
        model: 'Air Jordan 6 Retro SP Travis Scott',
        price: 800,
        styleCode: 'xyzA23zx',
      },
      {
        department: 'women',
        colors: ['Sail', 'Mocha', 'Black', 'White'],
        size: ['7', '7.5', '8', '9', '10', '11', '12', '12.5'],
        _id: '60ec87e907700a3bef404d32',
        brand: 'Air Jordan',
        description: 'OG Travis Scott',
        images: [
          {
            _id: '60eee93bf6551d566f99253e',
            public_id: 'sneaker-maniacs/products/dxskvzzxt3wgeisai9wi',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626270008/sneaker-maniacs/products/dxskvzzxt3wgeisai9wi.png',
          },
          {
            _id: '60eee93bf6551d566f99253f',
            public_id: 'sneaker-maniacs/products/xwakwmjm1n9jcimi6efz',
            url: 'https://res.cloudinary.com/vovaushenko/image/upload/v1626270010/sneaker-maniacs/products/xwakwmjm1n9jcimi6efz.png',
          },
        ],
        model: 'OG Travis Scott',
        price: 1200,
        styleCode: 'zxy-cw6974100',
      },
    ],
    isLoading: false,
  },
};
