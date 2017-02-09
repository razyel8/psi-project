import {User} from "../model/User";
import {Role} from "../model/Role";
export const USER: User = <User>{
    id: 123,
    imie: "Dariusz",
    nazwisko: "Małysz",
    login: "dariusz",
    auth_token: "abc123",
    role: Role.STUDENT
};