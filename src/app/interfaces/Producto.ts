import { Categoria } from "./Categoria";

export interface Producto {
    idproductos?: number,
    nombre: string,
    precio: number,
    cantidad: number,
    categoria: Categoria,
    imagen: string,
    descripcion?: string
  }