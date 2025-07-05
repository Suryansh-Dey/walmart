import { type Product } from './ProductBox';
import ProductBox from './ProductBox';
import './ProductList.css';

interface ProductListProps {
    products?: Product[];
}

export default function ProductList({ products = [] }: ProductListProps) {
    return (
        <div className="product-list-container">
            <h2>Our Products</h2>
            <div className="product-list">
                {products.map((product, index) => (
                    <ProductBox key={index} product={product}/>
                ))}
            </div>
        </div>
    );
};
