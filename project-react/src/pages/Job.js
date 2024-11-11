export default function Job () {

    return (
        <>
        <header>
    <h1>Job Opportunities</h1>

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

    <div class="container2">
        <img src="images/job3.jpg" alt="Waitress-Pic"/>
        <p><br/>Please fill out the attached job application. Bring it in any time during our open hours!</p>
        <p id="app"><a href="images/application.pdf">Application</a></p>
    </div>

        </>
    );
}