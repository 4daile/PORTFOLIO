// script.js

// Sélectionner la zone d'affichage principale
const rightSide = document.querySelector('.right-side');

// Mobile menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const leftSide = document.querySelector('.left-side');
const navItems = document.querySelectorAll('.cat h3, .cat h4');

// Toggle menu on hamburger click
if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        leftSide.classList.toggle('open');
    });
}

// Close menu when clicking on a navigation item
navItems.forEach(item => {
    item.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        leftSide.classList.remove('open');
    });
});

// Close menu when clicking outside of it
document.addEventListener('click', function(e) {
    if (!leftSide.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        leftSide.classList.remove('open');
    }
});

// Galerie d'images pour l'accueil
const imagesAccueil = [
    'src/img/home/IMG.jpg',
    'src/img/home/S1.jpg',
    'src/img/home/S2.jpg',
    'src/img/home/S3.jpg',
    'src/img/home/4.jpg',
    'src/img/home/5.jpg'
];

let indexImageActuelle = 0;

// Fonction pour créer le bouton de changement d'image
function creerBoutonImage() {
    const bouton = document.createElement('div');
    bouton.id = 'bouton-image';

    const icone = document.createElement('img');
    icone.src = 'src/img/home/ornement3.png';
    icone.alt = 'changer image';
    icone.style.cursor = 'pointer';
    icone.dataset.orig = icone.src;
    icone.dataset.hover = 'src/img/home/ornement1.png';

    // Swap src on hover
    icone.addEventListener('mouseenter', function() {
        this.src = this.dataset.hover;
    });
    icone.addEventListener('mouseleave', function() {
        this.src = this.dataset.orig;
    });

    bouton.appendChild(icone);
    
    bouton.addEventListener('click', function() {
        // Passer à l'image suivante
        indexImageActuelle = (indexImageActuelle + 1) % imagesAccueil.length;
        document.getElementById('home').src = imagesAccueil[indexImageActuelle];
    });
    
    rightSide.appendChild(bouton);
}

// Fonction pour ouvrir la modale "À propos"
function ouvrirAPropos() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>À propos</h3>
            <div class="modal-text">
                <p>J’étudie le design graphique et numérique à l’ESAD Orléans et j’y prépare un DNA (Diplôme national d’art), où je traite la question de l’outil numérique dans notre ére superapide à travers le geste de la cueillette et l’objet du panier.</p>
                <p>Je m’intéresse à l’édition, aux supports imprimés, au dessin, mais aussi à l’art numérique et nos rapports au web.</p>
            </div>
        </div>
    `;
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    document.body.appendChild(modal);
}

// Fonction pour ouvrir la modale "Contacts"
function ouvrirContacts() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Contacts</h3>
            <div class="modal-text">
                <p><strong>(mail)</strong> <a href="mailto:adelebvd@gmail.com">adelebvd@gmail.com</a></p>
                <p><strong>(instagram)</strong> <a href="https://www.instagram.com/ve1eda?igsh=MTdlbmUxaXRib3E3eg%3D%3D" target="_blank">@ve1eda</a></p>
                <p><strong>(github)</strong> <a href="https://github.com/4daile" target="_blank">@4daile</a></p>
                <p><strong>(linkedin)</strong> <a href="https://www.linkedin.com/in/adèle-bouvard-952a62338" target="_blank">Adèle Bouvard</a></p>
            </div>
        </div>
    `;
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    document.body.appendChild(modal);
}

// Fonction pour générer le HTML d'un média
function genererMediaHTML(media) {
    switch(media.type) {
        case 'image':
            return `
                <div class="media-item">
                    <img src="${media.src}" alt="${media.legende || ''}">
                    ${media.legende ? `<p class="legende">${media.legende}</p>` : ''}
                </div>
            `;
        
        case 'video':
            return `
                <div class="media-item">
                    <video controls ${media.poster ? `poster="${media.poster}"` : ''}>
                        <source src="${media.src}" type="video/mp4">
                        ${media.subtitles ? `<track src="${media.subtitles}" kind="subtitles" srclang="fr" label="Français">` : ''}
                        Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                    ${media.legende ? `<p class="legende">${media.legende}</p>` : ''}
                </div>
            `;
        
        case 'youtube':
            return `
                <div class="media-item">
                    <div class="video-container">
                        <iframe 
                            src="https://www.youtube.com/embed/${media.src}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    ${media.legende ? `<p class="legende">${media.legende}</p>` : ''}
                </div>
            `;
        
        case 'vimeo':
            return `
                <div class="media-item">
                    <div class="video-container">
                        <iframe 
                            src="https://player.vimeo.com/video/${media.src}" 
                            frameborder="0" 
                            allow="autoplay; fullscreen; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    ${media.legende ? `<p class="legende">${media.legende}</p>` : ''}
                </div>
            `;
        
        default:
            return '';
    }
}

// Fonction pour afficher une page de projet
function afficherProjet(nomProjet) {
    const projet = projetsData[nomProjet];
    
    if (!projet) {
        console.error("Projet non trouvé:", nomProjet);
        return;
    }
    
    let mediasHTML = '';
    
    if (projet.image) {
        mediasHTML = `
            <div class="project-medias">
                <div class="media-item">
                    <img src="${projet.image}" alt="${projet.titre}">
                    ${projet.legende ? `<p class="legende">${projet.legende}</p>` : ''}
                </div>
            </div>
        `;
    }
    else if (projet.medias && projet.medias.length > 0) {
        mediasHTML = '<div class="project-medias">';
        projet.medias.forEach(media => {
            mediasHTML += genererMediaHTML(media);
        });
        mediasHTML += '</div>';
    }
    
    rightSide.innerHTML = `
        <div class="project-page">
            <button class="btn-retour">← Retour</button>
            <div class="project-content">
                <h2>${projet.titre}</h2>
                
                ${mediasHTML}
                
                <div class="project-description">
                    <p>${projet.description}</p>
                </div>
                
                ${projet.lien ? `
                    <div class="project-link">
                        <a href="${projet.lien}" target="_blank" rel="noopener noreferrer">
                            Voir le projet →
                        </a>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
    
    document.querySelector('.btn-retour').addEventListener('click', afficherAccueil);
}

// Fonction pour afficher une galerie de catégorie
function afficherGalerie(categorie, projets) {
    let galerieHTML = `
        <div class="gallery-page">
            <button class="btn-retour">← Retour</button>
            <h2>${categorie}</h2>
            <div class="gallery-grid">
    `;
    
    projets.forEach(projet => {
        const nomProjet = projet.textContent;
        const dataProjet = projetsData[nomProjet];
        
        let previewImage = '';
        if (dataProjet) {
            if (dataProjet.image) {
                previewImage = dataProjet.image;
            } else if (dataProjet.medias && dataProjet.medias.length > 0) {
                const firstMedia = dataProjet.medias[0];
                if (firstMedia.type === 'image') {
                    previewImage = firstMedia.src;
                } else if (firstMedia.type === 'video' && firstMedia.poster) {
                    previewImage = firstMedia.poster;
                }
            }
        }
        
        galerieHTML += `
            <div class="gallery-item" data-project="${nomProjet}">
                ${previewImage ? `
                    <img src="${previewImage}" alt="${dataProjet.titre}">
                ` : ''}
                <h3>${nomProjet}</h3>
            </div>
        `;
    });
    
    galerieHTML += `
            </div>
        </div>
    `;
    
    rightSide.innerHTML = galerieHTML;
    
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            afficherProjet(this.dataset.project);
        });
    });
    
    document.querySelector('.btn-retour').addEventListener('click', afficherAccueil);
}

// Fonction pour revenir à l'accueil
function afficherAccueil() {
    rightSide.innerHTML = '<img id="home" src="' + imagesAccueil[indexImageActuelle] + '" alt="image accueil">';
    creerBoutonImage();
    // Close mobile menu
    menuToggle.classList.remove('active');
    leftSide.classList.remove('open');
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    
    // Créer le bouton de changement d'image sur l'accueil
    creerBoutonImage();
    
    // Événements sur les boutons à propos et contacts
    document.getElementById('propos').addEventListener('click', ouvrirAPropos);
    document.getElementById('contacts').addEventListener('click', ouvrirContacts);
    
    // Événements sur les titres H3 (catégories)
    document.querySelectorAll('.cat h3').forEach(h3 => {
        h3.addEventListener('click', function() {
            const categorie = this.textContent;
            const projets = this.parentElement.querySelectorAll('h4');
            afficherGalerie(categorie, projets);
        });
    });
    
    // Événements sur les projets H4
    document.querySelectorAll('.cat h4').forEach(h4 => {
        h4.addEventListener('click', function(e) {
            e.stopPropagation();
            const nomProjet = this.textContent;
            afficherProjet(nomProjet);
        });
    });
    
});