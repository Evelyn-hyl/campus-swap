const products = [
  {
    id: 1,
    name: 'Desk Lamp',
    price: '$10.00',
    condition: 'Like New Condition',
    brand: 'Ikea',
    images: [
      'https://i.pinimg.com/736x/ca/81/f8/ca81f83de645f3d77319498559643f16.jpg',
      'https://i.pinimg.com/736x/8d/98/34/8d98342f4c03e351a32cefa26568e3eb.jpg',
      'https://i.pinimg.com/1200x/81/6c/a1/816ca1ad1514f16f4ca2053a67803922.jpg'
    ],
    description:
      'Selling this used desk lamp, sturdy, stylish, and in excellent working condition. Minor signs of use but works perfectly. Ideal for desks or bedside tables. Pick-up only!',
  },
  {
    id: 2,
    name: 'Mini Fridge',
    price: '$30.00',
    condition: 'Good Condition',
    brand: 'GE',
    images: [
      'https://i.pinimg.com/736x/5c/b5/2e/5cb52eef9046125eb24807e07e15e129.jpg',
      'https://i.pinimg.com/1200x/8b/ba/ef/8bbaefbdf9bd9add50ad4273d263ad36.jpg',
      'https://i.pinimg.com/736x/a7/a5/7f/a7a57faccd2eaaf5ee049476f4f1bfb8.jpg',
    ],
    description:
      'Compact mini fridge, great for dorm rooms or offices. Cools well, a few light scratches on the exterior. Clean inside and ready to use.',
  },
  {
    id: 3,
    name: 'Microwave',
    price: '$26.00',
    condition: 'Fair Condition',
    brand: 'Panasonic',
    images: [
      'https://i.pinimg.com/736x/21/7f/22/217f223f5319a423167e9e5e59d3796d.jpg',
      'https://i.pinimg.com/1200x/32/20/26/32202689ffb0c7aab913d70d507144ad.jpg',
      'https://i.pinimg.com/736x/6c/12/78/6c1278865abcf6006c4ad4c023af421a.jpg',
    ],
    description:
      'Used microwave with multiple settings and timer. Heats evenly. Outer door has some cosmetic wear but fully functional.',
  },
  {
    id: 4,
    name: 'Bookshelf',
    price: '$10.00',
    condition: 'Good Condition',
    brand: 'Target',
    images: [
      'https://i.pinimg.com/736x/2f/e3/0b/2fe30b7bfd0f6ebe204ea663670a537e.jpg',
      'https://i.pinimg.com/736x/75/df/06/75df066ccd0cb9ba5220037dbbb23ff5.jpg',
      'https://i.pinimg.com/1200x/c3/4b/96/c34b96c8660eaa97c364163df557ae68.jpg',
    ],
    description:
      'Sturdy wooden bookshelf, four tiers, great for storing books or decor. Minor scratches on the sides. Easy to disassemble for transport.',
  },
  {
    id: 5,
    name: 'Office Chair',
    price: '$9.00',
    condition: 'Like New',
    brand: 'Herman Miller',
    images: [
      'https://i.pinimg.com/736x/9a/a0/ea/9aa0ea55ca86b23d71c5dc6ac34091a2.jpg',
      'https://i.pinimg.com/736x/9a/a0/ea/9aa0ea55ca86b23d71c5dc6ac34091a2.jpg',
      'https://i.pinimg.com/736x/ee/3e/58/ee3e58e2f0d45e49788446528ea1ed13.jpg',
    ],
    description:
      'Ergonomic office chair with adjustable height and armrests. Comfortable cushion, smooth rolling wheels. Almost no visible wear.',
  },
  {
    id: 6,
    name: 'Laundry Basket',
    price: '$4.50',
    condition: 'Good',
    brand: 'Home Basics',
    images: [
      'https://i.pinimg.com/736x/a6/b6/ff/a6b6ffe714725994e32c6e4ee6c5cadd.jpg',
      'https://i.pinimg.com/564x/ea/d3/c2/ead3c2b1d6e8466e9113fc365e4014f2.jpg',
      'https://i.pinimg.com/564x/5d/43/f7/5d43f720563f65b2a6e71e00c7b6b55b.jpg',
    ],
    description:
      'Lightweight laundry basket with handles. Fits a full load of laundry. No cracks, just minor surface wear.',
  },
  {
    id: 7,
    name: 'Storage Bin',
    price: '$2.00',
    condition: 'Good Condition',
    brand: 'Sterilite',
    images: [
      'https://i.pinimg.com/736x/d8/7f/c1/d87fc1521eb069389d5e438572ad493d.jpg',
      'https://i.pinimg.com/564x/6c/83/41/6c83419b36577ec5beed1cbd6f1c3f42.jpg',
      'https://i.pinimg.com/564x/1d/71/84/1d7184195cb760f3d265f3a2ff3b928e.jpg',
    ],
    description:
      'Plastic storage bin with lid, perfect for organizing clothes, toys, or tools. Clean, no cracks or damage.',
  },
  {
    id: 8,
    name: 'Wall Mirror',
    price: '$2.00',
    condition: 'Like New',
    brand: 'HomeGoods',
    images: [
      'https://i.pinimg.com/736x/88/5e/53/885e53921d449684de6446db7f706c40.jpg',
      'https://i.pinimg.com/564x/6f/f6/7a/6ff67a9b0c9e4b31b487e4f8430f4df1.jpg',
      'https://i.pinimg.com/564x/79/c9/f6/79c9f6ff4a7b6f9d6dca47da0b99e5d4.jpg',
    ],
    description:
      'Decorative wall mirror with wooden frame. No scratches or chips. Ready to hang, adds brightness to any room.',
  },
   {
    id: 9,
    name: 'Floor Rug',
    price: '$10.00',
    condition: 'Good Condition',
    brand: 'Urban Outfitters',
    images: [
      'https://i.pinimg.com/736x/77/5c/65/775c6525d22064fa5e3c4313ba12683d.jpg',
      'https://i.pinimg.com/564x/ba/99/56/ba99569410c1549dc72f313e7b51dc8d.jpg',
      'https://i.pinimg.com/564x/b4/9d/6b/b49d6b87fa4bdb7efc7de5b2645f68d5.jpg',
    ],
    description:
      'Soft woven floor rug, great for bedrooms or living rooms. Light wear in one corner but overall excellent shape.',
  },
  {
    id: 10,
    name: 'Table Fan',
    price: '$5.00',
    condition: 'Like New',
    brand: 'Honeywell',
    images: [
      'https://i.pinimg.com/736x/2d/ef/9d/2def9d384aacf2037792a763b74a4f7b.jpg',
      'https://i.pinimg.com/564x/d4/c1/1e/d4c11e905fb14923d9dcdfd7c9e67131.jpg',
      'https://i.pinimg.com/564x/01/58/3f/01583f178f81e8c3f8c0dbe07c948827.jpg',
    ],
    description:
      'Compact table fan, three speed settings. Very quiet and efficient. Barely used.',
  },
  {
    id: 11,
    name: 'Bean Bag',
    price: '$35.00',
    condition: 'Good Condition',
    brand: 'Big Joe',
    images: [
      'https://for-sale.used-secondhand.co.uk/media/used/secondhand/images/95583/13x-black-and-white-bean-bags-devon/500/black-leather-bean-bags-for-sale-987.jpg',
      'https://i.pinimg.com/564x/ae/4b/31/ae4b31b95c3f4b9b9c4c35f13c3097ef.jpg',
      'https://i.pinimg.com/564x/1c/57/1e/1c571e1d2cbb71f540dcbeb6ee89f72b.jpg',
    ],
    description:
      'Large black bean bag, comfy and holds shape well. No tears or stains. Perfect for gaming or lounging.',
  },
  {
    id: 12,
    name: 'Study Desk',
    price: '$50.00',
    condition: 'Like New',
    brand: 'Ikea',
    images: [
      'https://media.karousell.com/media/photos/products/2021/7/20/second_hand_study_desk_table_w_1626778869_2a9f5adc_progressive.jpg',
      'https://i.pinimg.com/564x/3b/0c/76/3b0c7659c56b69fb9a2b5fdf4d98ec43.jpg',
      'https://i.pinimg.com/564x/0e/d3/16/0ed316f7c7893f9f55b3d00d7562d1ab.jpg',
    ],
    description:
      'Modern study desk with metal frame and wood top. No scratches, sturdy and easy to assemble.',
  },
  {
    id: 13,
    name: 'Bedside Table',
    price: '$24.00',
    condition: 'Good Condition',
    brand: 'Wayfair',
    images: [
      'https://i.ebayimg.com/images/g/R6kAAOSwJoljHkIg/s-l1200.jpg',
      'https://i.pinimg.com/564x/b2/51/f4/b251f48dbdf86a4c9ec99980f0ef1c92.jpg',
      'https://i.pinimg.com/564x/6f/f8/43/6ff8437ed7cb7b64d8ea46c14d1341b4.jpg',
    ],
    description:
      'White bedside table with drawer and shelf. Minor wear on top surface but drawer slides smoothly.',
  },
  {
    id: 14,
    name: 'Curtains',
    price: '$3.00',
    condition: 'Like New',
    brand: 'Target',
    images: [
      'https://pinchbackcurtains.co.uk/wp-content/uploads/Great-quality-second-hand-curtains.jpg',
      'https://i.pinimg.com/564x/6e/02/f7/6e02f7b4738abf0c88c7857c21763c49.jpg',
      'https://i.pinimg.com/564x/45/f6/2b/45f62bdef7499c177e06f508ad7056d6.jpg',
    ],
    description:
      'Pair of light gray curtains, blackout lining. Barely used, no stains or rips. Great for bedroom or living room.',
  },
  {
    id: 15,
    name: 'Shoe Rack',
    price: '$8.00',
    condition: 'Good Condition',
    brand: 'Mainstays',
    images: [
      'https://i.etsystatic.com/14191678/r/il/62c868/5389984390/il_fullxfull.5389984390_f1fj.jpg',
      'https://i.pinimg.com/564x/5d/1f/2b/5d1f2b43a5e24d2c94d634b0c7755cc4.jpg',
      'https://i.pinimg.com/564x/28/3b/48/283b48d59e57db94c1a58864d918bdee.jpg',
    ],
    description:
      'Metal shoe rack, holds up to 12 pairs. Lightly used, very stable and easy to assemble.',
  },
  {
    id: 16,
    name: 'Closet Organizer',
    price: '$3.00',
    condition: 'Like New',
    brand: 'ClosetMaid',
    images: [
      'https://di2ponv0v5otw.cloudfront.net/posts/2022/10/26/635904498d7a3c71adb91f37/m_wp_63590455f8c5da0fb78a7f68.webp',
      'https://i.pinimg.com/564x/f3/7a/5b/f37a5b6fc10c9d79c88b53f1fc8010f4.jpg',
      'https://i.pinimg.com/564x/9f/41/26/9f41262336f74a0bb963e79e92e2511c.jpg',
    ],
    description:
      'Hanging closet organizer with 6 shelves. Fabric material, no stains or tears. Perfect for shoes, sweaters, or accessories.',
  },
];

export default products;