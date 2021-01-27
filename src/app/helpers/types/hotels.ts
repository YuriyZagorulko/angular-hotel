export interface IHotel {
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
export enum hotelAmenities{
  wifi = 0,
  parking = 0,
  cafe = 0,
  bar = 0,
  elevator = 0
}
