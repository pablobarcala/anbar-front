import { Categoria } from "./Categoria";

export interface Producto {
    idproductos?: number,
    nombre: string,
    precio: number,
    cantidad: number,
    categorias: Categoria[],
    imagen: string,
    descripcion?: string
  }