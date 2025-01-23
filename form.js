$(document).ready(function() {

    $("#myForm").on("submit", function(event) {
        event.preventDefault(); 
        $(".form-text").text("");
        var email = $("#email").val().trim();
        var password = $("#pass").val().trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            $("#emailError").text("Please enter your email.");
        } else if (!email.match(emailPattern)) {
            $("#emailError").text("Please enter a valid email.");
        }

        const minLength = 8;
        if (password === "") {
            $("#passwordError").text("Please enter your password.");
        } else if (password.length < minLength) {
            $("#passwordError").text("Password must be at least " + minLength + " characters long.");
        } else if (!hasUpperCase(password)) {
            $("#passwordError").text("Password must contain at least one uppercase letter.");
        } else if (!hasLowerCase(password)) {
            $("#passwordError").text("Password must contain at least one lowercase letter.");
        } else if (!hasNumbers(password)) {
            $("#passwordError").text("Password must contain at least one number.");
        } else if (!hasSpecialChars(password)) {
            $("#passwordError").text("Password must contain at least one special character.");
        } else {
            $("#passwordError").text(""); 
            $("#emailError").text(""); 
            alert("Form submitted successfully!");
        }
    });

    function hasUpperCase(password) {
        return /[A-Z]/.test(password);
    }

    function hasLowerCase(password) {
        return /[a-z]/.test(password);
    }

    function hasNumbers(password) {
        return /\d/.test(password);
    }

    function hasSpecialChars(password) {
        const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
        return specialChars.test(password);
    }

});
