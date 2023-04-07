const carData = [
  {
    id: 1,
    brand: 'Tesla',
    rating: 112,
    carName: 'Tesla Malibu',
    imgUrl:
      'https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    model: 'Model 3',
    price: 50,
    speed: '20kmpl',
    gps: 'GPS Navigation',
    seatType: 'Heated seats',
    automatic: 'Automatic',
    description:
      ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
  },

  {
    id: 2,
    brand: 'Toyota',
    rating: 102,
    carName: 'Toyota Aventador',
    imgUrl:
      'https://images.unsplash.com/photo-1626072557464-90403d788e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    model: 'Model-2022',
    price: 50,
    speed: '20kmpl',
    gps: 'GPS Navigation',
    seatType: 'Heated seats',
    automatic: 'Automatic',
    description:
      ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
  },

  {
    id: 3,
    brand: 'BMW',
    rating: 132,
    carName: 'BMW X3',
    imgUrl:
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
    model: 'Model-2022',
    price: 65,
    speed: '20kmpl',
    gps: 'GPS Navigation',
    seatType: 'Heated seats',
    automatic: 'Automatic',
    description:
      ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
  },

  {
    id: 4,
    brand: 'Nissan',
    rating: 102,
    carName: 'Nissan Mercielago',
    imgUrl:
      'https://images.unsplash.com/photo-1620688894128-5a51d14ffcc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    model: 'Model-2022',
    price: 70,
    speed: '20kmpl',
    gps: 'GPS Navigation',
    seatType: 'Heated seats',
    automatic: 'Automatic',
    description:
      ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
  },

  {
    id: 5,
    brand: 'Ferrari',
    rating: 94,
    carName: 'Ferrari Camry',
    imgUrl:
      'https://images.unsplash.com/photo-1555472287-01af5165c01c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    model: 'Model-2022',
    price: 45,
    speed: '20kmpl',
    gps: 'GPS Navigation',
    seatType: 'Heated seats',
    automatic: 'Automatic',
    description:
      ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
  },

  {
    id: 6,
    brand: 'Mercedes',
    rating: 119,
    carName: 'Mercedes Benz XC90',
    imgUrl:
      'https://images.unsplash.com/photo-1577615792595-d38014354328?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    model: 'Model-2022',
    price: 85,
    speed: '20kmpl',
    gps: 'GPS Navigation',
    seatType: 'Heated seats',
    automatic: 'Automatic',
    description:
      ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
  },

  {
    id: 7,
    brand: 'Audi',
    rating: 82,
    carName: 'Audi Fiesta',
    imgUrl:
      'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    model: 'Model 3',
    price: 50,
    speed: '20kmpl',
    gps: 'GPS Navigation',
    seatType: 'Heated seats',
    automatic: 'Automatic',
    description:
      ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
  },

  {
    id: 8,
    brand: 'Colorado',
    rating: 52,
    carName: 'Rolls Royce Colorado',
    imgUrl:
      'https://images.unsplash.com/photo-1624804269473-828dcc30a210?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
    model: 'Model 3',
    price: 50,
    speed: '20kmpl',
    gps: 'GPS Navigation',
    seatType: 'Heated seats',
    automatic: 'Automatic',
    description:
      ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
  },
];

module.exports = carData;
