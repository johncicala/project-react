import React, { useEffect, useState } from 'react';

export default function DinnerItems() {
    const [dinnerItems, setDinnerItems] = useState([]);

    const fetchDinnerItems = async () => {
        try {
            const response = await fetch("https://project-react-backend-2.onrender.com/api/DinnerItems");
            if (!response.ok) {
                throw new Error("Failed to fetch dinner items");
            }
            const data = await response.json();
            setDinnerItems(data);
        } catch (error) {
            console.error("Error fetching dinner items:", error);
        }
    };

    useEffect(() => {
        fetchDinnerItems();
    }, []);

    return (
        <div className="menu-grid">
            {dinnerItems.length > 0 ? (
                dinnerItems.map((item) => (
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
                <p>Loading dinner items...</p>
            )}
        </div>
    );
}
