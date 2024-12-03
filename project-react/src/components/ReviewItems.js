import React, { useEffect, useState } from 'react';

export default function ReviewItems() {
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState('');
    const [editText, setEditText] = useState('');

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

    const handleEdit = (item) => {
        setEditingId(item._id);
        setEditName(item.name);
        setEditText(item.review);
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (editName.length < 3 || editName.length > 50) {
            setError("Name must be between 3 and 50 characters.");
            return;
        }
        if (editText.length < 5 || editText.length > 500) {
            setError("Review must be between 5 and 500 characters.");
            return;
        }

        try {
            const response = await fetch(`https://project-react-backend-2.onrender.com/api/reviews/${editingId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: editName, review: editText }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to edit review");
            }

            setSuccess("Review updated successfully!");
            setReviews((prevReviews) =>
                prevReviews.map((r) => (r._id === editingId ? result.updatedReview : r))
            );
            setEditingId(null);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://project-react-backend-2.onrender.com/api/reviews/${id}`, {
                method: "DELETE",
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to delete review");
            }

            setSuccess("Review deleted successfully!");
            setReviews((prevReviews) => prevReviews.filter((r) => r._id !== id));
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

            {editingId && (
                <form onSubmit={handleEditSubmit} className="edit-form">
                    <div>
                        <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Save Changes</button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                </form>
            )}

            {reviews.length > 0 ? (
                reviews.map((item) => (
                    <div key={item._id} className="review-item">
                        <h3>{item.name}</h3>
                        <p>{item.review}</p>
                        <button onClick={() => handleEdit(item)}>Edit</button>
                        <button onClick={() => handleDelete(item._id)}>Delete</button>
                    </div>
                ))
            ) : (
                <p>No reviews available.</p>
            )}
        </div>
    );
}
