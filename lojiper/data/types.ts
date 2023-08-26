export type SeatType = {
  seatNumber: number;
  gender: "male" | "female" | "other";
};

export type Sefer = {
  companyname: string;
  time: number;
  location: string;
  departure: string;
  price: number;
  totalSeats: number;
  occupiedSeats: SeatType[];
};
export type User = {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  gender: "male" | "female";
};
