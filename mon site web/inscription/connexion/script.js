// Phone validation based on country code
const countryPhoneRules = {
    '+33': /^\d{9}$/,   // France (9 digits)
    '+1': /^\d{10}$/,   // US (10 digits)
    '+44': /^\d{10}$/,  // UK (10 digits)
    '+49': /^\d{10}$/,  // Germany (10 digits)
    '+242': /^\d{7,9}$/, // Congo (7-9 digits)
    '+243': /^\d{9}$/,   // RDC (9 digits)
    '+225': /^\d{8}$/,   // Côte d'Ivoire (8 digits)
    '+234': /^\d{10}$/,  // Nigeria (10 digits)
    '+91': /^\d{10}$/,   // India (10 digits)
    '+81': /^\d{10}$/,   // Japan (10 digits)
    '+86': /^\d{11}$/,   // China (11 digits)
    '+213': /^\d{9}$/,   // Algeria (9 digits)
};

document.getElementById('registerPhone').addEventListener('input', validatePhone);

function validatePhone() {
    const countryCode = document.getElementById('registerCountryCode').value;
    const phoneInput = document.getElementById('registerPhone');
    const phoneNumber = phoneInput.value;

    if (countryPhoneRules[countryCode] && countryPhoneRules[countryCode].test(phoneNumber)) {
        phoneInput.classList.remove('invalid');
    } else {
        phoneInput.classList.add('invalid');
    }
}
// Elements
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const alreadyAccount = document.getElementById('alreadyAccount');
const noAccount = document.getElementById('noAccount');
const goToLoginButton = document.getElementById('goToLogin');
const goToRegisterButton = document.getElementById('goToRegister');

// Go to login form
goToLoginButton.addEventListener('click', () => {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
    alreadyAccount.style.display = 'none';
    noAccount.style.display = 'block';
});

// Go to registration form
goToRegisterButton.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    noAccount.style.display = 'none';
    alreadyAccount.style.display = 'block';
});
document.addEventListener('DOMContentLoaded', (event) => {
    let savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Exemple de fonction de connexion
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Supposons que la vérification d'authentification soit réussie
        let userAuthenticated = true; // Cette variable doit être définie selon la logique de votre application

        if (userAuthenticated) {
            // Redirection vers la page d'accueil ou une autre page
            window.location.href = 'acceuil.html'; // Remplacez par l'URL de la page vers laquelle vous voulez rediriger
        } else {
            alert('Échec de la connexion');
        }
    });

    // Exemple de fonction d'inscription
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Supposons que l'inscription soit réussie
        let userRegistered = true; // Cette variable doit être définie selon la logique de votre application

        if (userRegistered) {
            // Redirection vers la page d'accueil ou une autre page
            window.location.href = 'acceuil.html'; // Remplacez par l'URL de la page vers laquelle vous voulez rediriger
        } else {
            alert('Échec de l\'inscription');
        }
    });

    // Reste de votre code...
});