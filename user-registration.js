document.getElementById('agreement-form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (document.getElementById('agree-checkbox').checked) {
        document.getElementById('application-form-section').style.display = 'block';
        document.getElementById('agreement-form').style.display = 'none';
    }
});
