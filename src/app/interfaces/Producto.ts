import { Categoria } from "./Categoria";

export interface Producto {
    idproductos?: number,
    nombre: string,
    precio: number,
    oferta: number,
    cantidad: number,
    categoria: Categoria,
    imagen: string,
    descripcion?: string
  }