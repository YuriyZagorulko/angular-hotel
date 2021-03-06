import {IHotelRoom, ISliderReview} from '../types/hotels';

export const reviews: ISliderReview[] = [
  {
    avatar: 'K',
    countryName: 'United states',
    name: 'Karen',
    flag: '',
    color: '#8585e0',
    text: 'Receptionist remembered me from my last visit which was 6 weeks ago!  She was very efficient friendly and helpful.  In my opinion this is the best hotel in the City.'
  },
  {
    avatar: 'A',
    countryName: 'United Kingdom',
    name: 'Anonymous',
    flag: '',
    color: '#33ff77',
    text: 'Very Good Hotel and the persons of the hotel are client service oriented. The room are very clean and quiet. I like this hotel very much and I will go back once again …'
  },
  {
    avatar: 'Z',
    countryName: 'Czech Republic',
    name: 'Zlatko',
    flag: '',
    color: '#ff8533',
    text: 'Breakfast good , location near Everything,  helpful staff.'
  },
  {
    avatar: 'R',
    countryName: 'Austria',
    name: 'Russell',
    flag: '',
    color: '#ff3333',
    text: 'A beautiful old hotel. I particularly enjoyed the steam room!'
  }
];
const facilities1 = [
  'Free toiletries',
  'Safe Toilet',
  'Bathtub or shower Towels',
  'Linens Socket near the bed',
  'Desk', 'TV',
  'SlippersMosquito net',
  'Telephone',
  'Ironing facilities',
  'Satellite channels',
  'Iron',
  'Radio',
  'Heating Hairdryer',
  'Walk-in closet',
  'Towels/Sheets (extra fee)',
  'Carpeted Wake-up service',
  'Wardrobe or closet',
  'Upper floors accessible by stairs only',
  'Clothes rack',
  'Drying rack for clothing',
  'Toilet paper'
];
const facilitiesIcons1: {img: string, title: string} [] = [
  {title: 'Air conditioning', img: 'assets/images/prefill/hotel-page/icons/air-conditioner.svg'},
  {title: 'Balcony', img: 'assets/images/prefill/hotel-page/icons/balcony.svg'},
  {title: 'Flat-screen TV', img: 'assets/images/prefill/hotel-page/icons/television.svg'},
  {title: 'Free WiFi', img: 'assets/images/prefill/hotel-page/icons/wifi.svg'},
  {title: 'Attached bathroom', img: 'assets/images/prefill/hotel-page/icons/shower.svg'},
  {title: 'City view', img: 'assets/images/prefill/hotel-page/icons/building.svg'},
  {title: 'Minibar', img: 'assets/images/prefill/hotel-page/icons/minibar.svg'},
  {title: 'Soundproof', img: 'assets/images/prefill/hotel-page/icons/no-sound.svg'},
];
export const hotelRooms: IHotelRoom [] = [
  {
    additionalPrice: 64,
    beds: {
      normal: 1,
      queen: 1,
      sofa: 0,
      twin: 0,
    },
    quantity: {
      options: [0, 1, 2, 3],
      selected: 0
    },
    name: 'Standard Double or Twin Room',
    price: 250,
    rating: { score: 8.8, description: 'Excellent'},
    sleeps: [1, 2, 3],
    facilities: facilities1,
    facilitiesIcons: facilitiesIcons1
  },
  {
    additionalPrice: 22,
    beds: {
      normal: 0,
      queen: 0,
      sofa: 0,
      twin: 1,
    },
    quantity: {
      options: [0, 1, 2, 3],
      selected: 0
    },
    name: 'Standard Double or Twin Room',
    price: 120,
    rating: { score: 9.0, description: 'Excellent'},
    sleeps: [1, 2],
    facilities: facilities1,
    facilitiesIcons: facilitiesIcons1
  },
  {
    additionalPrice: 36,
    beds: {
      normal: 0,
      queen: 1,
      sofa: 0,
      twin: 0,
    },
    quantity: {
      options: [0, 1, 2, 3],
      selected: 0
    },
    name: 'Standard Double or Twin Room',
    price: 160,
    rating: { score: 8.5, description: 'Excellent'},
    sleeps: [1, 2],
    facilities: facilities1,
    facilitiesIcons: facilitiesIcons1
  }
]
