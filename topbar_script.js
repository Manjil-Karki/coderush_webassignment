const topbar_template = document.createElement('template');

topbar_template.innerHTML = `
<div class="topbar">
        <div class="menu inner">
        <span class="menubtn" style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
        <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <div class="overlay-content">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
                <a href="blogs.html">Blog</a>
            </div>
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

    <div class="form-popup-bg">
    <div class="form-container">
      <button id="btnCloseForm" class="close-button">X</button>
      <h1>Book Flights</h1>
      <p>For more information. Please complete this form.</p>
      <form action="POST">
        <div class="form-group">
          <label for="name">Name</label>
          <input name="name" id="name" type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label for="flight">Flight</label>
          <input id="flight" name="flight" class="form-control" type="text" />
        </div>
        <div class="form-group">
          <label for="email">E-Mail Address</label>
          <input name="email" id="email" class="form-control" type="email" />
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input id="phone" name="phone" class="form-control" type="text" />
        </div>
        <button class="submit-button">Book</button>
      </form>
    </div>
  </div>
`;

document.body.appendChild(topbar_template.content);


function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

