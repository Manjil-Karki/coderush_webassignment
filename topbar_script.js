const topbar_template = document.createElement('template');

topbar_template.innerHTML = `
<div class="topbar">
        <div class="menu inner">
            <button class="menubtn">Menu</button>
            <div class="menu-content">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
                <a href="blogs.html">Blog</a>
            </div>
        </div>
        <div class = "inner">
            <h1>Welcome to Traveler's Paradise</h1>
        </div>
        <div class = "inner">
            <!-- <a href="#">Book Now</a> -->
            <button class="menubtn" id="btnOpenForm">Book Now</button>
        </div>
    </div>
`;

document.body.appendChild(topbar_template.content);