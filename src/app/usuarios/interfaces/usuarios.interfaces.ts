export interface Usuario {
    user_id :   number;
    dni:          number;
    dv:           number;
    first_name:   string;
    last_name:    string;
    email:        string;
    phone_number: number;
    gender:       string;
}
export enum Gender {
    mujer= "Mujer",
    hombre="Hombre,"

}
