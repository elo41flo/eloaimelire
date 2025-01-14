// Sélectionnez tous les conteneurs
const containers = document.querySelectorAll('.container');

// Parcourez chaque conteneur pour ajouter les événements
containers.forEach((container) => {
    const image = container.querySelector('#clickable-image');
    const text = container.querySelector('#display-text');
    const button = container.querySelector('#hide-text');

    // Afficher le texte et le bouton lorsque l'image est cliquée
    image.addEventListener('click', () => {
        text.style.display = 'block';
        button.style.display = 'inline-block';
    });

    // Cacher le texte et le bouton lorsque le bouton est cliqué
    button.addEventListener('click', () => {
        text.style.display = 'none';
        button.style.display = 'none';
    });
});
