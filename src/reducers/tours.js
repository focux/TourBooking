const defaultState = [
  {
    id: 5,
    image: 'https://i.ytimg.com/vi/APaabbUNEDM/maxresdefault.jpg',
    location: 'Bayahibe, La Romana',
    departingTime: 3,
    title: 'Excursion para Playa Dominicus',
    price: 50,
    spaces: 2,
    level: 'Facil'
  },
  {
    id: 4,
    image: 'http://coralblanco.com/wp-content/uploads/2014/04/dudu.jpg',
    location: 'Laguna Dudu, Cabrera',
    departingTime: 3,
    title: 'Laguna Dudu',
    price: 50,
    spaces: 2,
    level: 'Facil'
  },
  {
    id: 3,
    image: 'https://uncommoncarib-wpengine.netdna-ssl.com/wp-content/uploads/2015/03/atop-the-Caribbean-on-Pico-Duarte-Dominican-Republic-2048x1152.jpg',
    location: 'Pico Duarte, Manabao',
    departingTime: 3,
    title: 'Viaje al Pico Duarte',
    price: 50,
    spaces: 2,
    level: 'Facil'
  },
  {
    id: 2,
    image: 'https://room-online-pro.s3.amazonaws.com/cobi%2Fmedia%2Fwww.sirenishotels.com%2Fcache%2F80%2Fbe%2F80be2b8b571913c7c95ac0b26560c450.jpg',
    location: 'Higuey, Punta Cana',
    departingTime: 3,
    title: 'Laguna Azul',
    price: 50,
    spaces: 2,
    level: 'Facil'
  },
  {
    id: 2,
    image: 'https://room-online-pro.s3.amazonaws.com/cobi%2Fmedia%2Fwww.sirenishotels.com%2Fcache%2F80%2Fbe%2F80be2b8b571913c7c95ac0b26560c450.jpg',
    location: 'Higuey, Punta Cana',
    departingTime: 3,
    title: 'Laguna Azul',
    price: 50,
    spaces: 2,
    level: 'Facil'
  }
];
const toursReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CREATE_TOUR':
      return [...state, action.tour];
    case 'EDIT_TOUR':
      return state.map(tour => {
        if (tour.id === action.id) {
          return {
            ...tour,
            ...action.updates
          };
        }
        return tour;
      });
    case 'DELETE_TOUR':
      return state.filter(({ id }) => id !== action.id);
    case 'UPDATE_TOUR_RATE':
      return state.map(tour => {
        if (tour.id === action.id) {
          return {
            ...tour,
            stars: action.newRate
          };
        }
        return tour;
      });
    default:
      return state;
  }
};

export default toursReducer;
