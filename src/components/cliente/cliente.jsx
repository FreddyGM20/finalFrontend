import React, { useState, useEffect } from "react";
import productos from "../../lists/products";
import Navbar from "../navbar/navbar";
import style from "./cliente.module.css";

const ClientePage = () => {
  const productosPorPagina = 12;
  const [paginaActual, setPaginaActual] = useState(1);
  const [productosList, setProductosList] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

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

  const buscarProductos = () => {
    // Función para eliminar acentos
    const eliminarAcentos = (texto) => {
      return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    // Filtrar productos por texto y categoría
    const productosFiltrados = productos.filter((producto) => {
      const cumpleTexto = eliminarAcentos(producto.nombre.toLowerCase()).includes(eliminarAcentos(busqueda.toLowerCase()));
      const cumpleCategoria = categoriaSeleccionada ? producto.categoria === categoriaSeleccionada : true;
      return cumpleTexto && cumpleCategoria;
    });

    setProductosList(productosFiltrados);
  };

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  const handleCategoriaChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
  };

  return (
    <div className={style.principalContainer}>
      <Navbar />
      <div className={style.cuadroAmarillo}></div>
      {/* Rectángulo con fondo difuminado */}
      <div className={style.fondoDifuminado}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={style.iconoBolsa}
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
          />
        </svg>
        {/* Contenido que se sobrepondrá al amarillo suave */}
        <div className={style.contenido}>
          <div className={style.inputsContainer}>
            <input type="text" placeholder="Buscar productos aquí..." value={busqueda} onChange={handleBusquedaChange}/>
            <select  value={categoriaSeleccionada} onChange={handleCategoriaChange}>
              <option value="Electrónica">Electrónica</option>
              <option value="Ropa y Calzado">Ropa y Calzado</option>
              <option value="Libros">Libros</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
            <button className={style.buscarBtn} onClick={buscarProductos}>Buscar ahora!</button>
          </div>
        </div>
      </div>

      <div className={style.ultimosProductosContainer}>
        <div className={style.contenidoUltimosProductos}>
          <p>Últimos productos en línea</p>
          <div className={style.botonesContainer}>
            <button
              className={`${style.botonAzul} ${style.primero}`}
              onClick={() => cambiarPagina("atras")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-caret-left-fill"
                viewBox="0 0 16 16"
              >
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
              </svg>
            </button>
            <button
              className={style.botonAzul}
              onClick={() => cambiarPagina("adelante")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-caret-right-fill"
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
            <img src={producto.imagen} alt={producto.nombre} />
            <div className={style.productoCardContent}>
              <h4>{producto.nombre}</h4>
              <p className={style.descripcion}>{producto.descripcion}</p>
              <div className={style.filaCard}>
                <p className={style.categoria}>
                  {producto.categoria}
                  <span className={style.precio}>${producto.precio}</span>
                </p>
              </div>
              <hr />
              <div className={style.resenaContainer}>
                <p className={style.resena}>{producto.resena}</p>
                <div className={style.containerCR}>
                  <svg className={style.iconoEstrella} viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <p className={style.resena}>{producto.calificacion}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientePage;
