const form = document.getElementById("quote-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    });

    if (response.ok) {
        status.textContent = "Thanks! Your quote request has been sent.";
        form.reset();
    } else {
        status.textContent = "Something went wrong. Please try again.";
    }
});