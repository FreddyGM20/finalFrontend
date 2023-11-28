import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import style from "./admin.module.css";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import productos from "../../lists/products";
import { json } from "react-router-dom";

function TablaProductos({ productos, handleIconClick, handleDelete }) {
  return productos.map((producto) => (
    <tr key={producto.id}>
      <td className={style.gameItem}>{producto.id}</td>
      <td className={style.gameItem}>{producto.nombre}</td>
      <td className={style.gameItem}>{producto.categoria}</td>
      <td className={style.gameItem}>
        <div className={style.gameItemPrice}>${producto.precio}</div>
      </td>
      <td className={style.gameItem}>
        <div className={style.gameItemPrice}>
          <button
            onClick={() => handleIconClick(producto)}
            className={style.btnEdit}
          >
            <EditIcon />
          </button>
          <button
            onClick={() => handleDelete(producto)}
            className={style.btnEdit}
          >
            <DeleteIcon />
          </button>
        </div>
      </td>
    </tr>
  ));
}

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [openModal1, setOpenModal1] = useState(false);
  const handleOpenModal1 = () => setOpenModal1(true);
  const handleCloseModal1 = () => setOpenModal1(false);

  const [openModal2, setOpenModal2] = useState(false);
  const handleOpenModal2 = () => setOpenModal2(true);
  const handleCloseModal2 = () => setOpenModal2(false);

  useEffect(() => {
    // Cargar productos desde localStorage al montar el componente
    const storedProducts = JSON.parse(localStorage.getItem("productos")) || [];

    if (storedProducts.length === 0) {
      // Si no hay productos en localStorage, cargar productos iniciales
      localStorage.setItem("productos", JSON.stringify(productos));
      setProducts(productos);
    } else {
      // Si ya hay productos en localStorage, cargarlos
      setProducts(storedProducts);
    }
  }, []);
  const handleIconClick = (producto) => {
    setSelectedProduct(producto);
    handleOpenModal1();
  };

  const handleDelete = (producto) => {
    producto.preventDefault();
    // Filtrar los productos para excluir el producto que se va a eliminar
    const updatedProducts = products.filter((p) => p.id !== producto.id);

    // Actualizar el estado y el almacenamiento local sin el producto eliminado
    setProducts(updatedProducts);
    localStorage.setItem("productos", JSON.stringify(updatedProducts));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1,
      nombre: document.getElementById("nameProduct").value,
      descripcion: document.getElementById("descriptionProduct").value,
      categoria: document.getElementById("options").value,
      resena: document.getElementById("reseñaProduct").value,
      imagen: "",
      precio: parseFloat(document.getElementById("precioProduct").value),
    };

    // Actualizar productos en estado y localStorage
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("productos", JSON.stringify(updatedProducts));
    handleCloseModal2();
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Editar el producto en el estado local
    const editedProduct = {
      ...selectedProduct,
      nombre: document.getElementById("nameProduct").value,
      descripcion: document.getElementById("descriptionProduct").value,
      categoria: document.getElementById("options").value,
      resena: document.getElementById("reseñaProduct").value,
      precio: parseFloat(document.getElementById("precioProduct").value),
    };

    const updatedProducts = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );

    // Actualizar productos en el estado y en localStorage
    setProducts(updatedProducts);
    localStorage.setItem("productos", JSON.stringify(updatedProducts));
    handleCloseModal1();
  };

  return (
    <div className={style.main}>
      <Navbar />
      <div className={style.container}>
        <h1>Videojuegos en renta: </h1>
        <div className={style.headerInput}>
          <button onClick={() => handleOpenModal2()} className={style.btnEdit}>
            Añadir producto
          </button>
          <div className={style.contain}>
            <p>Buscar por nombre: </p>
            <input type="text" id="inputGame" placeholder="Criterio a buscar" />
          </div>
          <Modal
            open={openModal2}
            onClose={handleCloseModal2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ backdropFilter: "blur(1px)" }}
          >
            <div className={style.boxModalCG}>
              <div className={style.buttonCl}>
                <button onClick={handleCloseModal2} className={style.btnEdit}>
                  <CloseIcon />
                </button>
              </div>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className={style.sectionForm}>
                  <h2>Nombre del producto: </h2>
                  <input
                    id="nameProduct"
                    placeholder="Nombre del producto"
                    type="text"
                  />
                </div>

                <div className={style.sectionForm}>
                  <h2>Descripcion del producto:</h2>
                  <textarea
                    id="descriptionProduct"
                    placeholder="Escriba la descripcion del producto en este campo"
                    type="text"
                  />
                </div>
                <div className={style.sectionForm}>
                  <h2>Reseña del producto:</h2>
                  <textarea
                    id="reseñaProduct"
                    placeholder="Escriba la reseña del producto en este campo"
                    type="text"
                  />
                </div>
                <div className={style.sectionForm}>
                  <div className={style.divider}>
                    <h2>Plataforma: </h2>
                    <select id="options"> 
                      <option selected disabled value="">
                        Seleccionar categoria
                      </option>
                      <option value="Electrónica">Electrónica</option>
                      <option value="Ropa y Calzado">Ropa y Calzado</option>
                      <option value="Libros">Libros</option>
                    </select>
                  </div>
                  <div className={style.divider}>
                    <h2>Precio del producto</h2>
                    <input
                      id="precioProduct"
                      placeholder="Ingrese el valor del producto"
                      type="text"
                    />
                  </div>
                </div>
                <div className={style.buttonForm}>
                  <button className={style.btnEdit}>Guardar el producto</button>
                </div>
              </form>
            </div>
          </Modal>
        </div>

        <div className={style.wrapper}>
          {products && (
            <table className={style.gameTable}>
              <thead className={style.tableHeader}>
                <tr>
                  <th className={style.gameItemC}>ID del producto</th>
                  <th className={style.gameItemC}>Nombre del producto</th>
                  <th className={style.gameItemC}>Categoria</th>
                  <th className={style.gameItemC}>Precio del producto</th>
                  <th className={style.gameItemC}>Acciones</th>
                </tr>
              </thead>
              <tbody id="tablaCuerpo">
                <TablaProductos
                  productos={products}
                  handleIconClick={handleIconClick}
                  handleDelete={handleDelete}
                />
              </tbody>
            </table>
          )}
          <Modal
            open={openModal1}
            onClose={handleCloseModal1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ backdropFilter: "blur(1px)" }}
          >
            <div className={style.boxModalCG}>
              <div className={style.buttonCl}>
                <button onClick={handleCloseModal1} className={style.btnEdit}>
                  <CloseIcon />
                </button>
              </div>
              <form onSubmit={handleEditSubmit}>
                <div className={style.sectionForm}>
                  <h2>Nombre del producto: </h2>
                  <input
                    id="nameProduct"
                    placeholder="Nombre del producto"
                    type="text"
                    defaultValue={selectedProduct?.nombre}
                  />
                </div>

                <div className={style.sectionForm}>
                  <h2>Descripcion del producto:</h2>
                  <textarea
                    id="descriptionProduct"
                    placeholder="Escriba la descripcion del producto en este campo"
                    type="text"
                    defaultValue={selectedProduct?.descripcion}
                  />
                </div>
                <div className={style.sectionForm}>
                  <h2>Reseña del producto:</h2>
                  <textarea
                    id="reseñaProduct"
                    placeholder="Escriba la reseña del producto en este campo"
                    type="text"
                    defaultValue={selectedProduct?.resena}
                  />
                </div>
                <div className={style.sectionForm}>
                  <div className={style.divider}>
                    <h2>Plataforma: </h2>
                    <select
                      id="options"
                      defaultValue={selectedProduct?.categoria}
                    >
                      <option value="Electrónica">Electrónica</option>
                      <option value="Ropa y Calzado">Ropa y Calzado</option>
                      <option value="Libros">Libros</option>
                    </select>
                  </div>
                  <div className={style.divider}>
                    <h2>Precio del producto</h2>
                    <input
                      id="precioProduct"
                      placeholder="Ingrese el valor del producto"
                      type="text"
                      defaultValue={selectedProduct?.precio}
                    />
                  </div>
                </div>
                <div className={style.buttonForm}>
                  <button className={style.btnEdit}>
                    Guardar cambios del producto
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Admin;
