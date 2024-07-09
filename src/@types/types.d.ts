import { ReactNode } from 'react';
export type LoginUser = {
  email: string;
  password: string;
};
// type for the object
export type RegisterUser = {
  name: {
    first: string;
    middle?: string;
    last: string;
  };
  phone: string;
  email: string;
  password: string;
  image?: {
    url: string;
    alt?: string;
  };
  address: {
    state?: string;
    country: string;
    city: string;
    street: string;
    houseNumber: number;
    zip: number;
  };
  isBusiness: boolean;
};

export type ProductType = {
  _id: string;
  title: string;
  description: string;
  price: number;
  imagesUrls: string[];
  stringColors: string[];
  stone: Stone;
  category:string
}

export type StoneType = {
  _id: string;
  name: string;
  zodiacs: string[];
  description: string;
  imageUrl: string;
  wikipediaUrl: string;
}

export type CategoryType = {
  _id: string;
  title: string;
  imagesUrls: string[];
}

export type ErrorType = {
  status: number;
  message: string;
  details: string;
};

export type decodedType = {
  _id: string;
  isBusiness: boolean;
  isAdmin: boolean;
}


// טיפוס לפונקציה שמקבלת ילדים ומחזירה אלמנט של ראקט
export type FCC = ({ children: ReactNode }) => ReactNode;