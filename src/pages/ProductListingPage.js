import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import PlantCard from "../components/PlantCard";
import "../styles.css";

const plants = [
    { id: 1, name: "Aloe Vera", price: 10, image: "/images/aloe.jpg" },
    { id: 2, name: "Snake Plant", price: 15, image: "/images/snake.jpg" },
    { id: 3, name: "Monstera", price: 20, image: "/images/monstera.jpg" },
    { id: 4, name: "Spider Plant", price: 12, image: "/images/spider.jpg" },
    { id: 5, name: "Peace Lily", price: 18, image: "/images/peace.jpg" },
    { id: 6, name: "Fiddle Leaf Fig", price: 25, image: "/images/fiddle.jpg" }
];

const ProductListingPage = () => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="products-page">
            <h2>Houseplants for Sale</h2>
            <div className="products-grid">
                {plants.map(plant => (
                    <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default ProductListingPage;
