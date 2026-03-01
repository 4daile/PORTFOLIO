// projets.js

const projetsData = {
    // DESSINS & PEINTURES
    "✫ T'attendre": {
        titre: "T'attendre",
        image: "src/img/projets/tattendre/FEMME_1.jpg",
        legende: "Peinture acrylique sur toile, 2024",
        description: "Une exploration de l'attente et du temps suspendu à travers des formes organiques et des couleurs douces.",
        lien: "https://www.exemple.com/tattendre"
    },
    
    "✫ Obsessed": {
        titre: "Obsessed",
        medias: [
            {
                type: "video",
                src: "src/img/ok.mp4",
                poster: "src/img/ok2.png", // Image de prévisualisation
                legende: "Vidéo de l'installation, 2024"
            },
            {
                type: "image",
                src: "src/img/projets/obsessed/IMG.jpg",
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
        titre: "Vénus Préhistoriques, de l'objet érotique à l'auto-portrait",
        medias: [
            {
                type: "image",
                src: "src/img/projets/venus/2.jpg",            
            },
            {
                type: "image",
                src: "src/img/projets/venus/3.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/venus/1.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/venus/4.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/venus/5.jpg",
            }
        ],
        legende: "Zine, 32 pages, impression risographique, 2023",
        description: "Exploration graphique des représentations du corps féminin à travers l'histoire de l'art préhistorique.",
        lien: ""
    },

    "✫ Collines de vagues": {
        titre: "Collines de vagues",
        medias: [
            {
                type: "image",
                src: "src/img/projets/collines-vagues/2.jpg",            
            },
            {
                type: "image",
                src: "src/img/projets/collines-vagues/3.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/collines-vagues/1.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/collines-vagues/4.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/collines-vagues/5.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/collines-vagues/6.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/collines-vagues/7.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/collines-vagues/8.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/collines-vagues/9.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/collines-vagues/10.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/collines-vagues/11.jpg",
            },
        ],
        legende: "Livre de photographies, 2023",
        description: "Un carnet de voyage poétique entre terre et mer.",
        lien: ""
    },

    "✫ Secrets": {
        titre: "Secrets",
        medias: [
            {
                type: "image",
                src: "src/img/projets/secret/5.jpg",            
            },
            {
                type: "image",
                src: "src/img/projets/secret/1.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/secret/3.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/secret/4.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/secret/2.jpg",
            }
        ],
        legende: "Livre accordéon, 2023",
        description: "Format dépliant qui révèle progressivement son contenu.",
        lien: ""
    },

    "✫ Peau neuve": {
        titre: "Peau neuve",
         medias: [
            {
                type: "image",
                src: "src/img/projets/peau-neuve/2.jpg",            
            },
            {
                type: "image",
                src: "src/img/projets/peau-neuve/3.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/peau-neuve/1.jpg",
            }
        ],
        legende: "Publication, 48 pages, 2022",
        description: "Réflexion sur la transformation et le renouveau.",
        lien: ""
    },

    // DIGITAL
    "✫ Amnesia": {
        titre: "Amnesia",
        medias: [
            {
                type: "video",
                src: "src/img/projets/amnesia/AMNESIA_VIDEO.mp4",
                poster: "src/img/projets/amnesia/AMNESIA_HOME.jpg", // Image de prévisualisation
                legende: "Vidéo de l'installation, 2024"
            },
            {
                type: "image",
                src: "src/img/projets/amnesia/FIN1.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/amnesia/FIN2.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/amnesia/FIN3.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/amnesia/PAGE1.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/amnesia/PAGE2.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/amnesia/PAGE3.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/amnesia/PAGE4.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/amnesia/PAGE5.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/amnesia/PAGE6.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/amnesia/PAGE7.jpg",
            },
        ],
        legende: "Installation interactive, 2024",
        description: "Une expérience numérique immersive questionnant la mémoire et l'oubli à l'ère digitale.",
        lien: "https://www.exemple.com/amnesia"
    },

    "✫ Passing Stories": {
        titre: "Passing Stories",
        medias: [
            {
                type: "image",
                src: "src/img/projets/passing-stories/2.png",            
            },
            {
                type: "image",
                src: "src/img/projets/passing-stories/1.png",
            }
        ],
        legende: "Application web, 2024",
        description: "Plateforme collaborative de récits éphémères.",
        lien: "https://www.exemple.com/passing-stories"
    },

    "✫ PANIER": {
        titre: "PANIER",
        medias: [
            {
                type: "video",
                src: "src/img/projets/panier/7.mp4",
                poster: "src/img/projets/panier/4.jpg",
                legende: "Vidéo de l'installation, 2024"
            },
            {
                type: "image",
                src: "src/img/projets/panier/1.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/panier/2.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/panier/3.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/panier/4.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/panier/5.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/panier/6.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/panier/7.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/panier/8.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/panier/9.jpg",
            }
        ],
        legende: "Projet web interactif, 2024",
        description: "Exploration critique de la consommation en ligne.",
        lien: "https://www.exemple.com/panier"
    },

    "✫ My last day at work": {
        titre: "My last day at work",
        medias: [
            {
                type: "video",
                src: "src/img/projets/last-day/22.mp4",
                poster: "src/img/projets/last-day/LAST_DAY_1.jpg",
                legende: "Vidéo de l'installation, 2024"
            },
            {
                type: "video",
                src: "src/img/projets/last-day/RENDER.mp4",
                legende: "Vidéo de l'installation, 2024"
            },
            {
                type: "image",
                src: "src/img/projets/last-day/LAST_DAY_1.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/last-day/LAST_DAY_2.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/last-day/LAST_DAY_3.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/last-day/LAST_DAY_4.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/last-day/LAST_DAY_5.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/last-day/LAST_DAY_6.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/last-day/ascenseur.png",
            },
            {
                type: "image",
                src: "src/img/projets/last-day/ascenseur2.png",
            },
            {
                type: "image",
                src: "src/img/projets/last-day/boutons.png",
            },
            {
                type: "image",
                src: "src/img/projets/last-day/papers2.png",
            },
            {
                type: "image",
                src: "src/img/projets/last-day/POSTER_2.png",
            },
            {
                type: "image",
                src: "src/img/projets/last-day/POSTER_3.png",
            },
            {
                type: "image",
                src: "src/img/projets/last-day/POSTER_BIG.png",
            },
            {
                type: "image",
                src: "src/img/projets/last-day/POSTER_MOUTONS.png",
            },
            {
                type: "image",
                src: "src/img/projets/last-day/POSTER_WATCHING.png",
            }
        ],
        legende: "Fiction interactive, 2023",
        description: "Narration non-linéaire sur le monde du travail.",
        lien: ""
    },

    "✫ I love U": {
        titre: "I love U",
        medias: [
            
            {
                type: "video",
                src: "src/img/projets/i-love-u/6.mp4",
                poster: "src/img/projets/i-love-u/3.jpg",
                legende: "Vidéo de l'installation, 2024"
            },
            {
                type: "video",
                src: "src/img/projets/i-love-u/7.mp4",
                legende: "Vidéo de l'installation, 2024"
            },
            {
                type: "image",
                src: "src/img/projets/i-love-u/8.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/i-love-u/1.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/i-love-u/2.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/i-love-u/3.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/i-love-u/4.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/i-love-u/5.jpg",
            }
            
        ],
        legende: "Site web expérimental, 2023",
        description: "Déclaration numérique fragmentée.",
        lien: ""
    },

    "✫ Dédale": {
        titre: "Dédale",
        medias: [
            {
                type: "video",
                src: "src/img/projets/dedale/1.mp4",
                poster: "src/img/projets/dedale/3.png",
                legende: "Vidéo de l'installation, 2024"
            },
            {
                type: "image",
                src: "src/img/projets/dedale/3.png",
            },
            {
                type: "image",
                src: "src/img/projets/dedale/4.png",
            },
            {
                type: "image",
                src: "src/img/projets/dedale/5.png",
            },
            {
                type: "image",
                src: "src/img/projets/dedale/2.png",
            }
        ],
        legende: "Jeu narratif web, 2023",
        description: "Labyrinthe interactif basé sur le mythe grec.",
        lien: ""
    },

    "✫ Confess Yourself": {
        titre: "Confess Yourself",
        medias: [
            {
                type: "image",
                src: "src/img/projets/confess-yourself/3.png",
            },
            {
                type: "image",
                src: "src/img/projets/confess-yourself/2.png",
            },
            {
                type: "image",
                src: "src/img/projets/confess-yourself/1.jpg",
            }
        ],
        legende: "Installation numérique, 2023",
        description: "Espace de confessions anonymes en ligne.",
        lien: ""
    },

    "✫ stop consumerism": {
        titre: "stop consumerism",
        medias: [
            {
                type: "video",
                src: "src/img/projets/stop-consumerism/4.mp4",
                poster: "src/img/projets/stop-consumerism/3.jpg",
                legende: "Vidéo de l'installation, 2024"
            },
            {
                type: "image",
                src: "src/img/projets/stop-consumerism/1.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/stop-consumerism/2.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/stop-consumerism/3.jpg",
            }
        ],
        legende: "Campagne web militante, 2022",
        description: "Projet activiste contre la surconsommation.",
        lien: ""
    },

    "✫ Minitel Adventure": {
        titre: "Minitel Adventure",
        medias: [
            {
                type: "image",
                src: "src/img/projets/minitel-adventure/1.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/minitel-adventure/2.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/minitel-adventure/3.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/minitel-adventure/4.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/minitel-adventure/5.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/minitel-adventure/6.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/minitel-adventure/7.jpg",
            },
        ],
        legende: "Jeu rétro-numérique, 2022",
        description: "Hommage nostalgique à l'ère du Minitel.",
        lien: ""
    },

    "✫ Le Cyborg s'émancipe": {
        titre: "Le Cyborg s'émancipe",
        medias: [
            {
                type: "video",
                src: "src/img/projets/cyborg/1.1.mp4",
                poster: "src/img/projets/cyborg/3.jpg",
                legende: "Vidéo de l'installation, 2024"
            },
            {
                type: "image",
                src: "src/img/projets/cyborg/1.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/cyborg/2.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/cyborg/3.jpg",
            }
        ],
        legende: "Essai multimédia, 2022",
        description: "Réflexion sur le posthumanisme et l'hybridation technologique.",
        lien: ""
    },

    // GRAPHISME
    "✫ Fêtes interconnectées de la BD": {
        titre: "Fêtes interconnectées de la BD",
        medias: [
            {
                type: "image",
                src: "src/img/projets/affiches-bd/6.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/affiches-bd/5.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/affiches-bd/4.jpg",
            }
        ],
        legende: "Identité visuelle, affiches, 2024",
        description: "Création de l'identité graphique complète pour un festival de bande dessinée.",
        lien: ""
    },

    "✫ Racines": {
        titre: "Racines",
        medias: [
            {
                type: "image",
                src: "src/img/projets/racines/1.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/racines/2.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/racines/3.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/racines/4.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/racines/5.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/racines/6.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/racines/7.jpg",
            },
            {
                type: "image",
                src: "src/img/projets/racines/8.jpg",
            }
        ],
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