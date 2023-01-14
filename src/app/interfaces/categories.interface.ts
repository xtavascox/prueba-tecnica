export interface ICategories {
  total: number;
  categorias: Categoria[];
}

export interface Categoria {
  _id: string;
  nombre: string;
  usuario: Usuario;
}

export interface Usuario {
  _id: string;
  nombre: string;
}

export interface CategoriaMod {
  _id: string;
  nombre: string;
  usuario: string;
}
