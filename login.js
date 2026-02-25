document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const userType = document.getElementById('user-type').value;

            const loginData = {
                dsa: {
                    email: 'mijarulkhkh@gmail.com',
                    password: 'Admin123',
                    redirect: 'dsa-user-dashboard.html'
                },
                student: {
                    email: 'mijarulkhkh@gmail.com',
                    password: 'Admin123',
                    redirect: 'student-dashboard.html'
                },
                worker: {
                    email: 'mijarulkhkh@gmail.com',
                    password: 'Admin123',
                    redirect: 'worker-dashboard.html'
                },
                admin: {
                    email: 'mijarulkhkh@gmail.com',
                    password: 'Admin123',
                    redirect: 'admin-dashboard.html'
                }
            };

            if (loginData[userType]) {
                const user = loginData[userType];
                if (user.email && user.email !== email) {
                    alert(`Invalid email for ${userType}. Please use the registered email address.`);
                    return;
                }
                if (user.password === password) {
                    window.location.href = user.redirect;
                } else {
                    alert('Invalid password for the selected role.');
                }
            } else {
                alert('Invalid user role selected.');
            }
        });
    }
});
