// projets.js

const projetsData = {
    // DESSINS & PEINTURES
    "✫ T'attendre": {
        titre: "T'attendre",
        image: "src/img/projets/tattendre.jpg",
        legende: "Peinture acrylique sur toile, 2024",
        description: "Une exploration de l'attente et du temps suspendu à travers des formes organiques et des couleurs douces.",
        lien: "https://www.exemple.com/tattendre"
    },
    
    "✫ g bcp pensé à toi": {
        titre: "g bcp pensé à toi",
        medias: [
            {
                type: "video",
                src: "src/img/ok.mp4",
                poster: "src/img/ok2.png", // Image de prévisualisation
                legende: "Vidéo de l'installation, 2024"
            },
            {
                type: "image",
                src: "src/img/IMG.jpg",
                legende: "Interface de l'application"
            }
        ],
        legende: "Série de dessins, encre sur papier, 2024",
        description: "Une série intimiste qui explore la mémoire et l'absence.",
        lien: "https://www.exemple.com/tattendre"
    },
    
    "✫ sans nom": {
        titre: "sans nom",
        image: "src/img/projets/sans-nom.jpg",
        legende: "Techniques mixtes, 2023",
        description: "Projet expérimental autour de l'identité et de l'anonymat.",
        lien: ""
    },

    // ÉDITIONS
    "✫ Théorie de la fiction panier": {
        titre: "Théorie de la fiction panier",
        image: "src/img/IMG.jpg",
        legende: "Livre d'artiste, 64 pages, 2024",
        description: "Une réflexion philosophique sur les objets du quotidien et leur potentiel narratif. Publication en auto-édition.",
        lien: ""
    },
    
    "✫ Rapport de stage": {
        titre: "Rapport de stage",
        image: "src/img/projets/rapport-stage.jpg",
        legende: "Édition expérimentale, 2024",
        description: "Un détournement du format académique transformé en objet éditorial.",
        lien: ""
    },

    "✫ Vénus Préhistoriques": {
        titre: "Vénus Préhistoriques",
        image: "src/img/projets/venus.jpg",
        legende: "Zine, 32 pages, impression risographique, 2023",
        description: "Exploration graphique des représentations du corps féminin à travers l'histoire de l'art préhistorique.",
        lien: ""
    },

    "✫ Collines de vagues": {
        titre: "Collines de vagues",
        image: "src/img/projets/collines.jpg",
        legende: "Livre de photographies, 2023",
        description: "Un carnet de voyage poétique entre terre et mer.",
        lien: ""
    },

    "✫ Secrets": {
        titre: "Secrets",
        image: "src/img/projets/secrets.jpg",
        legende: "Livre accordéon, 2023",
        description: "Format dépliant qui révèle progressivement son contenu.",
        lien: ""
    },

    "✫ Peau neuve": {
        titre: "Peau neuve",
        image: "src/img/projets/peau-neuve.jpg",
        legende: "Publication, 48 pages, 2022",
        description: "Réflexion sur la transformation et le renouveau.",
        lien: ""
    },

    // DIGITAL
    "✫ Amnesia": {
        titre: "Amnesia",
        image: "src/img/projets/amnesia.jpg",
        legende: "Installation interactive, 2024",
        description: "Une expérience numérique immersive questionnant la mémoire et l'oubli à l'ère digitale.",
        lien: "https://www.exemple.com/amnesia"
    },

    "✫ Passing Stories": {
        titre: "Passing Stories",
        image: "src/img/projets/passing-stories.jpg",
        legende: "Application web, 2024",
        description: "Plateforme collaborative de récits éphémères.",
        lien: "https://www.exemple.com/passing-stories"
    },

    "✫ PANIER": {
        titre: "PANIER",
        image: "src/img/projets/panier.jpg",
        legende: "Projet web interactif, 2024",
        description: "Exploration critique de la consommation en ligne.",
        lien: "https://www.exemple.com/panier"
    },

    "✫ My last day at work": {
        titre: "My last day at work",
        image: "src/img/projets/last-day.jpg",
        legende: "Fiction interactive, 2023",
        description: "Narration non-linéaire sur le monde du travail.",
        lien: ""
    },

    "✫ I love U": {
        titre: "I love U",
        image: "src/img/projets/i-love-u.jpg",
        legende: "Site web expérimental, 2023",
        description: "Déclaration numérique fragmentée.",
        lien: ""
    },

    "✫ Dédale": {
        titre: "Dédale",
        image: "src/img/projets/dedale.jpg",
        legende: "Jeu narratif web, 2023",
        description: "Labyrinthe interactif basé sur le mythe grec.",
        lien: ""
    },

    "✫ Confess Yourself": {
        titre: "Confess Yourself",
        image: "src/img/projets/confess.jpg",
        legende: "Installation numérique, 2023",
        description: "Espace de confessions anonymes en ligne.",
        lien: ""
    },

    "✫ stop consumerism": {
        titre: "stop consumerism",
        image: "src/img/projets/stop-consumerism.jpg",
        legende: "Campagne web militante, 2022",
        description: "Projet activiste contre la surconsommation.",
        lien: ""
    },

    "✫ Minitel Adventure": {
        titre: "Minitel Adventure",
        image: "src/img/projets/minitel.jpg",
        legende: "Jeu rétro-numérique, 2022",
        description: "Hommage nostalgique à l'ère du Minitel.",
        lien: ""
    },

    "✫ Le Cyborg s'émancipe": {
        titre: "Le Cyborg s'émancipe",
        image: "src/img/projets/cyborg.jpg",
        legende: "Essai multimédia, 2022",
        description: "Réflexion sur le posthumanisme et l'hybridation technologique.",
        lien: ""
    },

    // GRAPHISME
    "✫ Fêtes interconnectées de la BD": {
        titre: "Fêtes interconnectées de la BD",
        image: "src/img/projets/fetes-bd.jpg",
        legende: "Identité visuelle, affiches, 2024",
        description: "Création de l'identité graphique complète pour un festival de bande dessinée.",
        lien: ""
    },

    "✫ Racines": {
        titre: "Racines",
        image: "src/img/projets/racines.jpg",
        legende: "Série d'affiches, 2023",
        description: "Exploration typographique et organique.",
        lien: ""
    },

    // ÉCRITURE
    "✫ Docteur, je ne mourrai jamais": {
        titre: "Docteur, je ne mourrai jamais",
        image: "src/img/projets/docteur.jpg",
        legende: "Nouvelle, 2024",
        description: "Fiction spéculative sur l'immortalité et ses conséquences psychologiques.",
        lien: ""
    },

    // AUTRE
    "✫ carnets": {
        titre: "carnets",
        image: "src/img/projets/carnets.jpg",
        legende: "Carnets de recherche, en cours",
        description: "Collection de carnets de croquis et de notes de travail.",
        lien: ""
    }
};