// Bento-style CV — Main JavaScript

const skillsData = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Figma', 'Shopify', 'SEO', 'Responsive'
];

const projectsData = [
  { title: 'Bento CV', desc: 'CSS Grid, Flexbox, HTML/CSS' },
  { title: 'E-Commerce Stores', desc: 'Shopify, SEO, Performance' },
  { title: 'Landing Pages', desc: 'MODX, Grav, Responsive' }
];

function renderContent() {
  const skillsContainer = document.querySelector('.skills-list');
  if (skillsContainer) {
    skillsContainer.innerHTML = skillsData.map(skill => 
      `<span class="skill-tag">${skill}</span>`
    ).join('');
  }

  const projectsContainer = document.querySelector('.project-list');
  if (projectsContainer) {
    projectsContainer.innerHTML = projectsData.map(project => 
      `<div class="project-item purple-accent">
         <h3>${project.title}</h3>
         <p>${project.desc}</p>
       </div>`
    ).join('');
  }
}

function initScrollTop() {
  const scrollBtn = document.getElementById('scroll-top');
  if (!scrollBtn) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

  scrollBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('Bento CV loaded');
  renderContent();
  initScrollTop();
});
