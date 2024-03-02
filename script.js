let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 5 seconds
}
document.addEventListener("DOMContentLoaded", function() {
  const animatedImage = document.querySelector('.animated-image');

  const options = {
      root: null,
      threshold: 0.5 // Change the threshold as needed
  };

  const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('fade-in');
          }
      });
  }, options);

  observer.observe(animatedImage);
});
// Get the login button and login popup
const loginBtn = document.querySelector('.btn[href="#login"]');
const loginPopup = document.getElementById('loginPopup');

// Function to open the login popup
function openLoginPopup() {
    loginPopup.style.display = 'block';
}

// Function to close the login popup
function closeLoginPopup() {
    loginPopup.style.display = 'none';
}

// Event listener for the login button
loginBtn.addEventListener('click', openLoginPopup);

// Get the register button and register popup
const registerBtn = document.querySelector('.btn[href="#register"]');
const registerPopup = document.getElementById('registerPopup');

// Function to open the register popup
function openRegisterPopup() {
    registerPopup.style.display = 'block';
}

// Function to close the register popup
function closeRegisterPopup() {
    registerPopup.style.display = 'none';
}

// Event listener for the register button
registerBtn.addEventListener('click', openRegisterPopup);

// Close the popup when clicking outside of it or on the close button
window.addEventListener('click', function(event) {
    if (event.target === loginPopup || event.target === registerPopup) {
        loginPopup.style.display = 'none';
        registerPopup.style.display = 'none';
    }
});

// Close the popup when clicking on the close button
document.querySelectorAll('.close').forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
        loginPopup.style.display = 'none';
        registerPopup.style.display = 'none';
    });
});
function toggleDashboardPopup() {
    var popup = document.getElementById("dashboardPopup");
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
}

function closePopup() {
    var popups = document.getElementsByClassName("popup");
    for (var i = 0; i < popups.length; i++) {
        popups[i].style.display = "none";
    }
}

window.onclick = function(event) {
    var popups = document.getElementsByClassName("popup");
    for (var i = 0; i < popups.length; i++) {
        if (event.target == popups[i]) {
            popups[i].style.display = "none";
        }
    }
}
// Function to open the payment popup
function openPaymentPopup() {
    var paymentPopup = document.getElementById("paymentPopup");
    paymentPopup.style.display = "block";
}

// Function to close the payment popup
function closePaymentPopup() {
    var paymentPopup = document.getElementById("paymentPopup");
    paymentPopup.style.display = "none";
}

// Add event listener to Book Now buttons
var bookNowButtons = document.querySelectorAll('.book-now');
bookNowButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        openPaymentPopup();
    });
});


// Function to toggle login popup
function toggleLoginPopup() {
    document.getElementById('loginPopup').style.display = 'block';
}

// Function to toggle register popup
function toggleRegisterPopup() {
    document.getElementById('registerPopup').style.display = 'block';
}

// Function to close any popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Function to save user data to localStorage
function saveUser(email, password) {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ email: email, password: password });
    localStorage.setItem('users', JSON.stringify(users));
}

// Function to authenticate user during login
function authenticateUser(email, password) {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(function(user) {
        return user.email === email && user.password === password;
    });
}

// Handle login form submission
document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (authenticateUser(email, password)) {
        alert("Login successful! Welcome, " + email + "!");
        // Perform actions after successful login (e.g., redirect to dashboard)
        // Here, you can add code to redirect the user to the dashboard or any other page
    } else {
        alert("Invalid email or password.");
    }
};

// Handle register form submission
document.getElementById("registerForm").onsubmit = function(event) {
    event.preventDefault();
    var email = document.getElementById('regEmail').value;
    var password = document.getElementById('regPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    saveUser(email, password);
    alert("Registration successful! You can now log in.");
    closePopup('registerPopup');
};
// Handle login form submission
document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (authenticateUser(email, password)) {
        alert("Login successful! Welcome, " + email + "!");
        closePopup('loginPopup'); // Close the login popup after successful login
        // Perform actions after successful login (e.g., redirect to dashboard)
        // Here, you can add code to redirect the user to the dashboard or any other page
    } else {
        alert("Invalid email or password.");
    }
};
