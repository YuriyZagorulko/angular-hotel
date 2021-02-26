export interface IHotel {
  id: any;
  img: string;
  name: string;
  rating: number;
  reviews: number;
  stars: number;
  price: number;
  discountPrice: number;
  moreOptions: string [];
  place: string;
  amenities?: hotelAmenities;
}
export interface ISliderReview{
  text: string;
  avatar: string;
  name: string
  countryName: string;
  flag: string;
  color: string
}
export interface IHotelRoom {
  name: string;
  facilitiesIcons: {img: string, title: string} [];
  facilities: string [];
  sleeps: number;
  price: number;
  additionalPrice: number;
  quantity: {
    options: number [];
    selected: number;
  };
  rating: { score: number; description: string};
  beds: {sofa: number, queen: number, normal: number, twin: number};
}
export enum hotelAmenities{
  wifi = 0,
  parking = 0,
  cafe = 0,
  bar = 0,
  elevator = 0
}
