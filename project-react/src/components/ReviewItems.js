import React, { useEffect, useState } from 'react';

export default function ReviewItems() {
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const fetchReviews = async () => {
        try {
            const response = await fetch("https://project-react-backend-2.onrender.com/api/reviews");
            if (!response.ok) throw new Error("Failed to fetch reviews");
            const data = await response.json();
            setReviews(data);
        } catch (error) {
            console.error("Error fetching reviews:", error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        if (name.length < 3 || name.length > 50) {
            setError("Name must be between 3 and 50 characters.");
            return;
        }
        if (reviewText.length < 5 || reviewText.length > 500) {
            setError("Review must be between 5 and 500 characters.");
            return;
        }

        try {
            const response = await fetch("https://project-react-backend-2.onrender.com/api/reviews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, review: reviewText }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to add review");
            }

            setSuccess("Review added successfully!");
            setReviews((prevReviews) => [...prevReviews, result.newReview]);
            setName('');
            setReviewText('');
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <div className="review-list">
            <h2>Customer Reviews</h2>

            <form onSubmit={handleSubmit} className="review-form">
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Your Review"
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit Review</button>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
            </form>

            
            {reviews.length > 0 ? (
                reviews.map((item, index) => (
                    <div key={index} className="review-item">
                        <h3>{item.name}</h3>
                        <p>{item.review}</p>
                    </div>
                ))
            ) : (
                <p>No reviews available.</p>
            )}
        </div>
    );
}
