class ProductManager {
  constructor () {
    this.products = []; 
  }

  validateProduct(product) {
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      return 'Todos los campos son obligatorios';
    }
    return null;
  }
 
  addProduct ( product ) {
    const productValidation = this.validateProduct(product);
    if (productValidation) {
      return productValidation; 
    }
    const NoRepeatCode = this.products.find(prod => prod.code === product.code)
    if (NoRepeatCode) {
          return 'Ya existe un producto con ese codigo'
        }
        if (this.products.length === 0) {
          product.id = 1
        }else {
          product.id = this.products.length + 1;
        }
        this.products.push (product)
        return 'Producto Agregado correctamente'
      }
    
      
  
  getProducts() {
    return this.products;
  }

  getProductById ( id ) {
    const product = this.products.find ( prod => prod.id === id );
    if ( !product ) {
      return "Producto no encontrado";
    }
    return product;
  };
}


const products = new ProductManager();
console.log (products.addProduct({title: "Producto 1", description: "Descripcion del producto 1", price: 19.99, thumbnail: "ruta/imagen1.jpg", code: "ABC123", stock: 50}));
console.log (products.addProduct({title: "Producto 1", description: "Descripcion del producto 1", price: 19.99, thumbnail: "ruta/imagen1.jpg", code: "ABC123", stock: 50}));
console.log (products.addProduct({title: "Producto 2", description: "Descripcion del producto 2", price: 59.99, thumbnail: "ruta/imagen2.jpg", code: "ABC125", stock: 80}));
console.log (products.addProduct({title: "Producto 3", description: "Descripcion del producto 3", price: 59.99, thumbnail: "ruta/imagen3.jpg", code: "ABC127",          }));
console.log (products.getProducts())
console.log (products.getProductById ( 999 ))
