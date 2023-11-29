class ProductManager {
  constructor () {
    this.products = []; //arreglo vacio
    this.prodIdCounter = 1; //para generar id autoincrementable
  }

  addProduct ( product ) {
      
     //validar que no se repita el campo "code"
      if (this.products.some ( product => product.code === product.code )) {
          console.error ( "Ya existe un producto con el mismo codigo" );
          return;
        }

     //validar que todos los campos sean oblidatorios
    if ( !product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock ) {
        console.error ( "todos los campos son obligatorios" );
        return;
    }

    //agregar el producto con id autoincrementable
    const newProduct = {
        id: this.prodIdCounter ++,
        ...product
    };
    this.products.push ( newProduct );
    console.log ( `Producto agregado: ${newProduct.title}` )
  }

  getProducts () {
    return this.products;
  }

  getProductById ( id ) {
    const product = this.products.find ( prod => prod.id === id );
    if ( !product ) {
        console.error ( "Producto no encontrado" );
    }
    return product;
  }
}

//Ejemplo de uso
const productManager = new ProductManager ();

productManager.addProduct ({
    title      : "Producto 1",
    description: "Descripcion del producto 1",
    price      : 19.99,
    thumbnail  : "ruta/imagen1.jpg",
    code       : "ABC123",
    stock      : 50
});

productManager.addProduct ({
    title      : "Producto 1",
    description: "Descripcion del producto 1",
    price      : 19.99,
    thumbnail  : "ruta/imagen1.jpg",
    code       : "ABC123",
    stock      : 50
});

const allProducts = productManager.getProducts ();
console.log ( "todos los productos", allProducts );

const productById = productManager.getProductById ( 1 );
console.log ( "Producto por ID:", productById );

const inexistentProduct = productManager.getProductById ( 999 );
