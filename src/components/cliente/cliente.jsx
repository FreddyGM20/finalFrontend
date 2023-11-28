import React, { useState, useEffect } from "react";
import productos from "../../lists/products";
import Navbar from "../navbar/navbar"
import style from "./cliente.module.css";

const ClientePage = () => {
  const productosPorPagina = 10;
  const [paginaActual, setPaginaActual] = useState(1);
  const [productosList, setProductosList] = useState([]);

  useEffect(() => {
    // Intentar cargar productos desde localStorage
    const storedProducts = JSON.parse(localStorage.getItem("productos"));

    if (storedProducts && storedProducts.length > 0) {
      setProductosList(storedProducts);
    } else {
      // Si no hay productos en localStorage, cargar la lista de productos inicial
      setProductosList(productos);
    }
  }, []);

  const cambiarPagina = (direccion) => {
    if (direccion === "adelante") {
      setPaginaActual(paginaActual + 1);
    } else if (direccion === "atras" && paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  // Calcular el índice inicial y final para los productos de la página actual
  const indiceInicial = (paginaActual - 1) * productosPorPagina;
  const indiceFinal = paginaActual * productosPorPagina;

  const productosPaginaActual = productosList.slice(indiceInicial, indiceFinal);

  return (
    <div className={style.principalContainer}>
      <Navbar/>
      {/* Cuadro de color amarillo */}
      <div className={style.cuadroAmarillo}></div>

      {/* Rectángulo con fondo difuminado */}
      <div className={style.fondoDifuminado}>
        {/* Contenido que se sobrepondrá al amarillo suave */}
        <div className={style.contenido}>
          <div className={style.inputsContainer}>
            <input type="text" placeholder="Buscar productos aquí..." />
            <select>
              <option value="Electrónica">Electrónica</option>
              <option value="Ropa y Calzado">Ropa y Calzado</option>
              <option value="Libros">Libros</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
            <button className={style.buscarBtn}>Buscar ahora!</button>
          </div>
        </div>
      </div>

      <div className={style.ultimosProductosContainer}>
        <div className={style.contenidoUltimosProductos}>
          <p>Últimos productos en línea</p>
          <div className={style.botonesContainer}>
            <button className={style.botonAzul} onClick={() => cambiarPagina("atras")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className='bi bi-caret-left-fill'
                viewBox="0 0 16 16"
              >
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
              </svg>
            </button>
            <button className={style.botonAzul} onClick={() => cambiarPagina("adelante")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className='bi bi-caret-right-fill'
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Contenido original (productos y texto) */}
      <div className={style.productosContainer}>
        {productosPaginaActual.map((producto) => (
          <div key={producto.id} className={style.productoCard}>
            {producto.imagen && <img src={producto.imagen} alt={producto.nombre} />}
            {!producto.imagen && <></>}
            <div>
              <h4>{producto.nombre}</h4>
              <p>{producto.descripcion}</p>
              <p>Categoría: {producto.categoria}</p>
              <p>Reseña: {producto.resena}</p>
              <p>Precio: ${producto.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientePage;
