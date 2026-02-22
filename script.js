// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const mensagem = document.getElementById('mensagem').value;
        
        if (nome && email && telefone) {
            alert(`Obrigado ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Mobile menu toggle function
function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

// Attach toggleMenu to hamburger click
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu &&
        !hamburger.contains(event.target) &&
        !navMenu.contains(event.target) &&
        navMenu.classList.contains('active')) {
        toggleMenu();
    }
});

// Close mobile menu on window resize
window.addEventListener('resize', function() {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');

    if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('active')) {
        toggleMenu();
    }
});

// Touch event optimizations for mobile stability
document.addEventListener('touchstart', function() {}, { passive: true });
document.addEventListener('touchmove', function() {}, { passive: true });

// Service details database (for modal content)
const serviceDetails = {
    // About section details
    'qui-sommes-nous': {
        icon: '🏢',
        title: 'Qui sommes-nous ?',
        content: `
            <p>L'entreprise <strong>JERU FINANCE</strong> est une institution financière, micro crédit et d'épargne en RDC.</p>
            <p>C'est une structure spécialisée dans la gestion et la fourniture de services financiers sécurisés.</p>
        `
    },
    'forme-juridique': {
        icon: '🏛️',
        title: 'Forme juridique',
        content: `<p>SARL "Société à responsabilité limitée", forme juridique courante pour les institutions de microfinance.</p>`
    },
    'vision': {
        icon: '🌟',
        title: 'Vision',
        content: `<p>Acteur financier de référence, reconnu pour la confiance, l'innovation et la fiabilité.</p>`
    },
    'mission': {
        icon: '💼',
        title: 'Mission',
        content: `<p>Créer une relation de confiance et de transparence avec la communauté kimbanguiste.</p>`
    },
    'valeurs': {
        icon: '✨',
        title: 'Nos Valeurs',
        content: `<p>Intégrité, transparence, responsabilité, professionnalisme et inclusion financière.</p>`
    },
    'role': {
        icon: '📌',
        title: 'Rôle',
        content: `<p>Collecter, gérer et orienter les ressources financières pour soutenir le développement.</p>`
    },
    'objectif': {
        icon: '🎯',
        title: 'Objectif',
        content: `<p>Faciliter l'accès au financement et promouvoir l'épargne pour tous.</p>`
    },
    // Services section
    'epargne': {
        icon: '💰',
        title: 'Collecter l\'Épargne',
        content: `
            <h4>💰 Collecte d'épargne</h4>
            <p>La collecte de l'épargne permet aux clients de déposer leur argent en sécurité.</p>
            <ul>
                <li>Comptes d'épargne sécurisés</li>
                <li>Taux d'intérêt compétitifs</li>
                <li>Retraits flexibles</li>
            </ul>
        `
    },
    'agricole': {
        icon: '🌾',
        title: 'Crédit Agricole',
        content: `
            <h4>🌾 Financement agricole</h4>
            <p>Prêts pour agriculteurs et projets agricoles avec conditions adaptées.</p>
        `
    },
    'investissement': {
        icon: '📈',
        title: 'Services Financiers',
        content: `
            <h4>📈 Services financiers</h4>
            <p>Facilitez vos opérations financières quotidiennes.</p>
        `
    },
    'formation': {
        icon: '🎓',
        title: 'Formation',
        content: `
            <h4>🎓 Formation et accompagnement</h4>
            <p>Éducation financière et conseils personnalisés.</p>
        `
    }
};

// Validation du formulaire REJOIGNEZ-NOUS
document.addEventListener('DOMContentLoaded', function() {
    const joinForm = document.querySelector('#trabalhe form');
    if (joinForm) {
        joinForm.addEventListener('submit', function(e) {
            const nom = document.getElementById('join-nom').value.trim();
            const email = document.getElementById('join-email').value.trim();
            const montant = document.getElementById('join-montant').value.trim();

            if (!nom || !email || !montant) {
                e.preventDefault();
                alert('Veuillez remplir tous les champs obligatoires (nom, email, montant).');
                return false;
            }

            // Validation email basique
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                alert('Veuillez entrer une adresse email valide.');
                return false;
            }

            // Validation montant (suppression des espaces et vérification numérique)
            const montantNettoye = montant.replace(/\s/g, '');
            if (isNaN(montantNettoye) || parseFloat(montantNettoye) <= 0) {
                e.preventDefault();
                alert('Veuillez entrer un montant valide (chiffres uniquement).');
                return false;
            }

            // Succès - continuer vers demande-credit.html
            alert('Merci ' + nom + '! Votre demande a été soumise. Nous vous contacterons bientôt.');
        });
    }
});

// Gestion des modales de service pour mobile
document.addEventListener('DOMContentLoaded', function() {
    const serviceModal = document.getElementById('serviceModal');
    const modalClose = document.querySelector('.modal-close');

    // Gestion des clics sur "en savoir plus"
    document.querySelectorAll('.saiba-mais').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const card = this.closest('.servico-card') || this.closest('.about-card');
            if (!card) return;

            let serviceKey = card.dataset.service;

            // Détermination automatique du service si pas de data-service
            if (!serviceKey) {
                const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
                if (title.includes('épargne')) serviceKey = 'epargne';
                else if (title.includes('agricole')) serviceKey = 'agricole';
                else if (title.includes('investissement')) serviceKey = 'investissement';
                else if (title.includes('formation')) serviceKey = 'formation';
                else if (title.includes('jeunes')) serviceKey = 'jeunes';
                else if (title.includes('durable') || title.includes('vert')) serviceKey = 'durable';
            }

            if (serviceKey) {
                openServiceModal(serviceKey);
            }
        });
    });

    // Fonction pour ouvrir la modale
    function openServiceModal(serviceKey) {
        if (!serviceModal) return;

        const details = serviceDetails[serviceKey];
        if (!details) return;

        // Mise à jour du contenu de la modale
        const modalIcon = document.getElementById('modalIcon');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');

        if (modalIcon) modalIcon.innerHTML = details.icon;
        if (modalTitle) modalTitle.textContent = details.title;
        if (modalBody) modalBody.innerHTML = details.content;

        // Affichage de la modale
        serviceModal.classList.add('open');

        // Prévention du scroll du body
        document.body.style.overflow = 'hidden';

        // Focus sur la modale pour l'accessibilité
        setTimeout(() => {
            if (modalClose) modalClose.focus();
        }, 100);
    }

    // Fonction pour fermer la modale
    function closeServiceModal() {
        if (!serviceModal) return;

        serviceModal.classList.remove('open');
        document.body.style.overflow = '';

        // Retour du focus à l'élément qui a ouvert la modale
        const focusedElement = document.activeElement;
        if (focusedElement && focusedElement.closest('.service-modal')) {
            // Remettre le focus sur le dernier élément focusable hors modale
            const focusableElements = document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const lastFocusable = Array.from(focusableElements).filter(el => !el.closest('.service-modal')).pop();
            if (lastFocusable) lastFocusable.focus();
        }
    }

    // Gestionnaires d'événements pour fermer la modale
    if (modalClose) {
        modalClose.addEventListener('click', closeServiceModal);
    }

    if (serviceModal) {
        // Fermeture en cliquant sur le fond
        serviceModal.addEventListener('click', function(e) {
            if (e.target === serviceModal) {
                closeServiceModal();
            }
        });

        // Fermeture avec la touche Échap
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && serviceModal.classList.contains('open')) {
                closeServiceModal();
            }
        });
    }

    // Gestion spéciale pour mobile - prévention du scroll accidentel
    if ('ontouchstart' in window) {
        let touchStartY = 0;

        serviceModal.addEventListener('touchstart', function(e) {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        serviceModal.addEventListener('touchmove', function(e) {
            const touchY = e.touches[0].clientY;
            const modalContent = e.target.closest('.modal-content');

            // Permettre le scroll seulement dans le contenu de la modale
            if (!modalContent) {
                e.preventDefault();
            }
        }, { passive: false });
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.valor-card, .servico-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});
