export default function Home() {
    return (
        <>
            <header>
                <h1>Cicala's Restaurant & Bar</h1>
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
                <a href="contact">Contact Us</a>
            </nav>

            <div className="container">
                <img src="images/restfront2.jpg" alt="Restaurant pic" />
                <p>
                    <br />
                    Welcome to Cicala's Restaurant & Bar! Located on 2100 Bay Street. Open Tues – Sun 11 AM – 1 AM.
                </p>
            </div>

            <section className="about-us">
                <h2>About Us</h2>
                <div className="about-content">
                    <img src="images/about.jpg" alt="About Us" className="about-image" />
                    <div className="about-text">
                        <p>
                            At Cicala's restaurant and bar, we look to provide a warm and welcoming experience for
                            everyone. Whether you're taking the family out for dinner, or getting some drinks while you
                            watch the game, you have a spot with us! We use the freshest ingredients and serve top-level
                            beverages. Please stop by!
                        </p>
                    </div>
                </div>
            </section>

            
            <script src="hamburger.js"></script>
        </>
    );
}
