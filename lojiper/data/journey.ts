type Journey = {
  id: number;
  companyname: string;
  location: string;
  departure: string;
  time: number;
  price: number;
};
type Journeys = Journey[];

export const journey: Journeys = [
  {
    id: 1,
    companyname: "FirmaA",
    location: "İstanbul",
    departure: "Ankara",
    time: 9.3,
    price: 100,
  },
  {
    id: 2,
    companyname: "FirmaA",
    location: "İzmir",
    departure: "İstanbul",
    time: 10.0,
    price: 95,
  },
  {
    id: 3,
    companyname: "FirmaB",
    location: "Antalya",
    departure: "İstanbul",
    time: 11.0,
    price: 105,
  },
  {
    id: 4,
    companyname: "FirmaB",
    location: "Ankara",
    departure: "İzmir",
    time: 13.0,
    price: 110,
  },
  {
    id: 5,
    companyname: "FirmaC",
    location: "Bursa",
    departure: "İstanbul",
    time: 14.3,
    price: 90,
  },
  {
    id: 6,
    companyname: "FirmaC",
    location: "Eskişehir",
    departure: "Ankara",
    time: 15.0,
    price: 85,
  },
  {
    id: 7,
    companyname: "FirmaA",
    location: "Trabzon",
    departure: "Ankara",
    time: 16.0,
    price: 120,
  },
  {
    id: 8,
    companyname: "FirmaB",
    location: "İstanbul",
    departure: "Bursa",
    time: 17.0,
    price: 70,
  },
  {
    id: 9,
    companyname: "FirmaB",
    location: "Adana",
    departure: "İstanbul",
    time: 18.0,
    price: 130,
  },
  {
    id: 10,
    companyname: "FirmaA",
    location: "İstanbul",
    departure: "Eskişehir",
    time: 9.3,
    price: 75,
  },
  {
    id: 11,
    companyname: "FirmaC",
    location: "Antalya",
    departure: "İstanbul",
    time: 10.3,
    price: 100,
  },
  {
    id: 12,
    companyname: "FirmaA",
    location: "Bursa",
    departure: "Antalya",
    time: 11.0,
    price: 110,
  },
  {
    id: 13,
    companyname: "FirmaB",
    location: "İzmir",
    departure: "Trabzon",
    time: 12.0,
    price: 125,
  },
  {
    id: 14,
    companyname: "FirmaC",
    location: "Eskişehir",
    departure: "Bursa",
    time: 14.3,
    price: 95,
  },
  {
    id: 15,
    companyname: "FirmaA",
    location: "Ankara",
    departure: "Adana",
    time: 15.0,
    price: 115,
  },
  {
    id: 16,
    companyname: "FirmaB",
    location: "Trabzon",
    departure: "İzmir",
    time: 16.3,
    price: 130,
  },
  {
    id: 17,
    companyname: "FirmaC",
    location: "Adana",
    departure: "Eskişehir",
    time: 17.3,
    price: 90,
  },
  {
    id: 18,
    companyname: "FirmaA",
    location: "İzmir",
    departure: "Trabzon",
    time: 18.0,
    price: 120,
  },
  {
    id: 19,
    companyname: "FirmaB",
    location: "Bursa",
    departure: "Adana",
    time: 19.0,
    price: 100,
  },
  {
    id: 20,
    companyname: "FirmaC",
    location: "Eskişehir",
    departure: "İstanbul",
    time: 20.0,
    price: 110,
  },
];
const uniqueNames: Journey[] = journey.reduce(
  (acc: Journey[], current: Journey) => {
    if (
      !acc.some(
        (item) =>
          item.location === current.location &&
          item.departure === item.departure
      )
    ) {
      acc.push(current);
    }
    return acc;
  },
  []
);
export default uniqueNames;
