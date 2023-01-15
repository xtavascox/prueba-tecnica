export interface IUsers {
  total:    number;
  usuarios: Usuario[];
}

export interface Usuario {
  rol:    string;
  estado: boolean;
  google: boolean;
  nombre: string;
  correo: string;
  uid:    string;
}
