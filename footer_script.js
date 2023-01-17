const footer_template = document.createElement('template');

footer_template.innerHTML = `
<footer>
        <div class="footer-content">
            <h3>Traveler's Paradise</h3>

            <p>We provide best platform for travelers with wide variety of services at any corner of world. We provied plane tickets, hotel booking facilities and many more.</p>
        </div>

        <div class="footer-bottom">

            <p>Copyright &copy <span id="year">2023</span> <a href="#">@manjil</a> </p>
            <div class="footer-menu">
                <ul class="f-menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="blogs.html">Blog</a></li>
                </ul>
            </div>
        </div>
    </footer>
`;

document.body.appendChild(footer_template.content);