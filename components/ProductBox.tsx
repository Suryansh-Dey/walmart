import './ProductBox.css';
export interface Product {
    url: string,
    name: string;
    description: string;
    imageUrl: string;
    price: number;
}

const ProductBox: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div className="product-box">
            <a href={product.url} target='_blank'>
                {product.imageUrl && (
                    <div className="product-image-container">
                        <img src={product.imageUrl} alt={product.name} className="product-image" />
                    </div>
                )}</a>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-price-section">
                {product.price && <span className="current-price"> <strong>Current:</strong> ₹{product.price}</span>}
            </div>
        </div>
    );
};

export default ProductBox;
