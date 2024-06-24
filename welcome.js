document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.getElementById('welcome-message');

    // Afficher le message de bienvenue avec une transition
    setTimeout(function() {
        welcomeMessage.classList.remove('hidden');
        welcomeMessage.classList.add('show');
    }, 100);

    // Masquer le message de bienvenue après 4 secondes avec une transition
    setTimeout(function() {
        welcomeMessage.classList.remove('show');
        welcomeMessage.classList.add('hidden');
    }, 4100);
});
