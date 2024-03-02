// Get the profile link element
var profileLink = document.getElementById("profile");

// Get the profile information container
var profileInfo = document.querySelector(".content .container");

// Hide the profile information initially
profileInfo.style.display = "none";

// Toggle the display of profile information when the profile link is clicked
profileLink.onclick = function() {
    if (profileInfo.style.display === "none" || profileInfo.style.display === "") {
        profileInfo.style.display = "block";
    } else {
        profileInfo.style.display = "none";
    }
};

// Handle form submission
document.getElementById("profileForm").onsubmit = function(event) {
    event.preventDefault();
    // You can handle the form submission here, e.g., send data to server
    // For demonstration, let's log the form data to console
    var formData = new FormData(this);
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
};


// Function to save form data to local storage
function saveFormData(formData) {
    localStorage.setItem('formData', JSON.stringify(formData));
}

// Function to retrieve form data from local storage
function loadFormData() {
    var formData = localStorage.getItem('formData');
    return JSON.parse(formData);
}

// Function to handle form submission
document.getElementById("profileForm").onsubmit = function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var formDataObject = {};
    for (var pair of formData.entries()) {
        formDataObject[pair[0]] = pair[1];
    }
    saveFormData(formDataObject);
    console.log("Form data saved:", formDataObject);
    // Optionally, you can redirect the user to another page or display a success message here
};

// Load form data when the page loads
window.onload = function() {
    var savedFormData = loadFormData();
    if (savedFormData) {
        // Populate form fields with saved data
        document.getElementById("fullName").value = savedFormData.fullName || "";
        document.getElementById("username").value = savedFormData.username || "";
        document.getElementById("email").value = savedFormData.email || "";
        document.getElementById("dob").value = savedFormData.dob || "";
        document.getElementById("gender").value = savedFormData.gender || "";
        document.getElementById("address").value = savedFormData.address || "";
        document.getElementById("phone").value = savedFormData.phone || "";
        // Repeat this for other form fields
    }
};
document.addEventListener("DOMContentLoaded", function() {
    // Get the logout link element
    var logoutLink = document.getElementById("logout");

    // Add click event listener to the logout link
    logoutLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        console.log("Logout link clicked"); // Check if the click event is triggered
        // Perform logout actions here
        // For demonstration purposes, let's redirect to the login page
        window.location.href = "index.html";
    });
});
