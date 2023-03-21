const ProductTest = ({product}) => {
    return ( 
        <div className="products">
            <h1><b>{product.product}</b></h1>
            <h2><i>{product.description}</i></h2>
            <h3>{product.price}</h3>
        </div>
     );
}
 
export default ProductTest;