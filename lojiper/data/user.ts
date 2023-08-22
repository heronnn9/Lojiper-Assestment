type User = {
  id?: number;
  name?: string;
  surname?: string;
  password: string;
  email: string;
};
type Users = User[];

export const user: Users = [
  {
    id: 1,
    name: "Ahmet",
    surname: "Yılmaz",
    email: "ahmet.yilmaz@example.com",
    password: "ahmet1234",
  },
  {
    id: 2,
    name: "Elif",
    surname: "Öztürk",
    email: "elif.ozturk@example.com",
    password: "elif5678",
  },
  {
    id: 3,
    name: "Mehmet",
    surname: "Kara",
    email: "mehmet.kara@example.com",
    password: "mehmet9012",
  },
  {
    id: 4,
    name: "Ayşe",
    surname: "Demir",
    email: "ayse.demir@example.com",
    password: "ayse3456",
  },
  {
    id: 5,
    name: "Osman",
    surname: "Çelik",
    email: "osman.celik@example.com",
    password: "osman7890",
  },
  {
    id: 6,
    name: "Zeynep",
    surname: "Sağlam",
    email: "zeynep.saglam@example.com",
    password: "zeynep1122",
  },
  {
    id: 7,
    name: "Emre",
    surname: "Polat",
    email: "emre.polat@example.com",
    password: "emre3344",
  },
  {
    id: 8,
    name: "Selin",
    surname: "Taş",
    email: "selin.tas@example.com",
    password: "selin5566",
  },
  {
    id: 9,
    name: "Berk",
    surname: "Doğan",
    email: "berk.dogan@example.com",
    password: "berk7788",
  },
  {
    id: 10,
    name: "Nur",
    surname: "Koç",
    email: "nur.koc@example.com",
    password: "nur9900",
  },
];
