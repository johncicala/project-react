import DinnerItems from "./DinnerItems";

export default function Dinner() {
    return (
        <>
            <header>
                <h1>Dinner Menu</h1>
                <div className="hamburger" id="hamburger">
                    &#9776;
                </div>
            </header>

            <nav id="nav-menu">
                <a href="/">Home</a>
                <a href="dinner">Dinner Menu</a>
                <a href="drinks">Drink Menu</a>
                <a href="review">Leave a Review</a>
                <a href="job">Job Opportunities</a>
                <a href="contact.html">Contact Us</a>
            </nav>

            <div className="container">
                <h2>Dinner Menu</h2>
                <div id="menu-grid" className="menu-grid">
                <DinnerItems />
                </div>
            </div>

        </>
    );
}