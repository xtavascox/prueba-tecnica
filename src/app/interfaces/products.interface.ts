export interface IProducts {
  total: number;
  productos: Producto[];
}

export interface Producto {
  precio: number;
  _id: string;
  nombre: string;
  categoria: Categoria;
  usuario: Categoria;
}

export interface ProductoMod {
  precio: number;
  _id: string;
  nombre: string;
  categoria: string;
  usuario: string;
}

export interface Categoria {
  _id: string;
  nombre: string;
}

