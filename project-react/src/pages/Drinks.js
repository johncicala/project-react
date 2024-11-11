import DrinkItems from "../components/DrinkItems";

export default function Drinks () {
    return (
    <>
    <header>
    <h1>Drink Menu</h1>

    <div class="hamburger" id="hamburger">
        &#9776; 
    </div>
</header>

            <nav id="nav-menu">
                <a href="/">Home</a>
                <a href="dinner">Dinner Menu</a>
                <a href="drinks">Drink Menu</a>
                <a href="review">Leave a Review</a>
                <a href="job">Job Opportunities</a>
                <a href="contact">Contact Us</a>
            </nav>

<div class="container">
    <h2>Drink Menu</h2>
    <div id="menu-grid" class="menu-grid">
        <DrinkItems />
    </div>
</div>

    </>
    );
}