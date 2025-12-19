/* --- 1. DATA: Projects --- */
const projects = [
    {
        title: "Mario PRO2 Game",
        tag: "C++ & OOP",
        desc: "Modular platformer game demonstrating object-oriented architecture. Implements custom data structures (Linked Lists) and sprite management.",
        link: "https://github.com/reskoldo73/mario-pro2-q2-2025"
    },
    {
        title: "Heat Equations Sim",
        tag: "Python & SciPy",
        desc: "Modeling thermal distribution ($u_t = \\alpha \\nabla^2 u$) inside the FME faculty using numerical analysis with NumPy and Matplotlib.",
        link: "https://github.com/reskoldo73/heat-equations-aln-2025"
    }
];

/* --- 2. RENDER: Generate HTML from Data --- */
const projectContainer = document.getElementById('project-container');

function renderProjects() {
    projectContainer.innerHTML = projects.map(project => `
        <article class="card">
            <div class="card-image"></div>
            <div class="card-body">
                <span class="tag">${project.tag}</span>
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
                <a href="${project.link}" target="_blank" class="link-arrow">View Repository <i class="fas fa-arrow-right"></i></a>
            </div>
        </article>
    `).join('');

    // Trigger MathJax to render the LaTeX formulas
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

renderProjects();

/* --- 3. THEME TOGGLE --- */
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const body = document.body;

// Check Local Storage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', function(e) {
    if (e.target.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

/* --- 4. TYPEWRITER EFFECT --- */
const phrases = ["Algorithms", "Mathematical Modeling", "Systems Programming"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typeText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

const typeText = document.getElementById('typewriter');
if (typeText) {
    document.addEventListener('DOMContentLoaded', type);
}