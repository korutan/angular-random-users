import {Name} from "./name";
import {Login} from "./login";
import {Id} from "./id";
import {Img} from "./img";

export interface User {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: string;
  registered: string;
  phone: string;
  cell: string;
  id: Id;
  picture: Img;
  nat: string;
}
