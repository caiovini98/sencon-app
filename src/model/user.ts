import { Company } from "./company";
import { Address } from "./address";
export interface User {
  name: string;
  username: string;
  email: string;
  phone: string;
  address: Address;
  id: number;
  company: Company;
}
