
  fetch("../navbar.html")  // adjust path based on page location
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
    })
    .catch(error => console.error("Navbar failed to load:", error));

