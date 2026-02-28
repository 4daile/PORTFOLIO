// script.js

// Sélectionner la zone d'affichage principale
const rightSide = document.querySelector('.right-side');

// Galerie d'images pour l'accueil
const imagesAccueil = [
    'src/img/IMG.jpg',
    'src/img/1.jpg',
    'src/img/2.jpg',
    'src/img/3.jpg',
    'src/img/4.jpg',
    'src/img/5.jpg'
];

let indexImageActuelle = 0;

// Fonction pour créer le bouton de changement d'image
function creerBoutonImage() {
    const bouton = document.createElement('div');
    bouton.id = 'bouton-image';
    bouton.innerHTML = '<img src="src/img/lune.png" alt="changer image">';
    
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
                <p>Adèle Bouvard est une artiste et designer graphique basée en France.</p>
                <p>Son travail explore les frontières entre le numérique et l'analogique, questionnant notre rapport à la technologie, à l'intimité et à la mémoire.</p>
                <p>Diplômée de [École], elle développe une pratique pluridisciplinaire mêlant édition, installation interactive, graphisme et écriture.</p>
                <p>Ses projets ont été présentés à [lieux d'exposition].</p>
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
                <p><strong>Email :</strong> <a href="mailto:adele.bouvard@email.com">adele.bouvard@email.com</a></p>
                <p><strong>Instagram :</strong> <a href="https://instagram.com/adele.bouvard" target="_blank">@adele.bouvard</a></p>
                <p><strong>Behance :</strong> <a href="https://behance.net/adeleBouvard" target="_blank">Adèle Bouvard</a></p>
                <p><strong>LinkedIn :</strong> <a href="https://linkedin.com/in/adeleBouvard" target="_blank">Adèle Bouvard</a></p>
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