import React, { useEffect, useState } from 'react';

export default function DrinkItems() {
    const [drinkItems, setDrinkItems] = useState([]);

    const fetchDrinkItems = async () => {
        try {
            const response = await fetch("https://project-react-backend-2.onrender.com/api/drinkItems");
            if (!response.ok) {
                throw new Error("Failed to fetch drink items");
            }
            const data = await response.json();
            setDrinkItems(data);
        } catch (error) {
            console.error("Error fetching drink items:", error);
        }
    };

    useEffect(() => {
        fetchDrinkItems();
    }, []);

    return (
        <div className="menu-grid">
            {drinkItems.length > 0 ? (
                drinkItems.map((item) => (
                    <div key={item._id} className="menu-item">
                        <h3>{item.name}</h3>
                        <img src={item.img_name} alt={item.name} className="menu-img" />
                        <p>{item.description}</p>
                        <p className="price">{item.price}</p>
                        <ul className="ingredients">
                            {item.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>...</p>
            )}
        </div>
    );
}
