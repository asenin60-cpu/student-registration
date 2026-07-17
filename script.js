const scriptURL = "https://script.google.com/macros/s/AKfycbw_8I6Nczr3YF0jz917Q_W4NNgxMVHExt_8H1WpfVwGiokah5tIr2hFnPSHnouv1dpG7g/exec";

document.getElementById("studentForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("registerNumber", document.getElementById("registerNumber").value);
    formData.append("dateOfBirth", document.getElementById("dob").value);
    formData.append("studentName", document.getElementById("studentName").value);
    formData.append("whatsappNumber", document.getElementById("whatsapp").value);
    formData.append("stream", document.getElementById("stream").value);
    formData.append("district", document.getElementById("district").value);

    try {
        const response = await fetch(scriptURL, {
            method: "POST",
            body: formData
        });

        const result = await response.text();
        console.log(result);

        alert("Registration Successful!");

        window.location.href = "https://results.hse.kerala.gov.in/results/";

    } catch (error) {
        console.error(error);
        alert("Submission failed. Please try again.");
    }
});
