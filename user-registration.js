function previewImage(inputId, previewId) {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);

    input.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                }
                reader.readAsDataURL(file);
            } else {
                preview.style.display = 'none';
            }
        }
    });
}

previewImage('self-image', 'self-image-preview');
previewImage('signature', 'signature-preview');
previewImage('aadhar-card', 'aadhar-card-preview');
previewImage('pan-card', 'pan-card-preview');
previewImage('bank-passbook', 'bank-passbook-preview');
previewImage('company-invoice', 'company-invoice-preview');

document.getElementById('pay-button').addEventListener('click', function() {
    const form = document.getElementById('registration-form');
    if (form.checkValidity()) {
        var options = {
            "key": "rzp_live_SLSXfQRNG3Pdfb", // Using the live key provided.
            "amount": 156500, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Homework Management",
            "description": "Registration Fee",
            "image": "logo.png",
            "handler": function (response){
                alert(response.razorpay_payment_id);
                document.getElementById('registration-form').style.display = 'none';
                document.getElementById('thank-you-message').style.display = 'block';
            },
            "prefill": {
                "name": document.getElementById('name').value,
                "email": document.getElementById('email').value,
                "contact": document.getElementById('mobile').value
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    } else {
        alert('Please fill all the required fields.');
        form.reportValidity();
    }
});
