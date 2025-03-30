
// login page
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Fetch form data
        const formData = new FormData(form);
        const username = formData.get('username');
        const password = formData.get('password');

        // Dummy authentication logic (replace with actual authentication)
        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
            // Redirect to dashboard or perform other actions
            
        } else {
            alert('"You have successfully logged in"');
            window.location.href = 'product.html';
        }
    });
});











