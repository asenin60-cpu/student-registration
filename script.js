const scriptURL = "https://script.google.com/macros/s/AKfycbx9zJZgfZKC99bj1ow7DBq8zcscBGmO1vmfu0QhefpH3e1NriLNTJnriVc_PLmx6Zyc7w/exec";

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("registerNumber", document.getElementById("registerNumber").value);
    formData.append("dateOfBirth", document.getElementById("dob").value);
    formData.append("studentName", document.getElementById("studentName").value);
    formData.append("whatsappNumber", document.getElementById("whatsapp").value);
    formData.append("district", document.getElementById("district").value);

    fetch(scriptURL, {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert("Registration Successful!");

        // Redirect to Kerala Results Website
        window.location.href = "https://results.hse.kerala.gov.in/results/";
    })
    .catch(error => {
        alert("Something went wrong!");
        console.error(error);
    });
});
