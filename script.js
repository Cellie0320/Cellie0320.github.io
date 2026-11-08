// Shared future-facing profile data keeps roadmap, projects, and bot copy aligned.
const careerProfile = {
  currentRole: 'Junior IT Technician',
  primaryTitle: 'Junior IT Technician | Microsoft 365, Endpoint & Cloud Development',
  shortTitle: 'Junior IT Technician | Microsoft Cloud & Endpoint Development',
  professionalSummary: 'I’m a Bachelor of Information Technology graduate currently working in IT support at Amax Digital, where I’m building practical experience across end-user support, troubleshooting, Microsoft 365 environments, and day-to-day IT operations. My professional development is focused on Microsoft cloud technologies, identity and access management, endpoint management, PowerShell automation, Azure administration, and cloud security. My roadmap progresses through AZ-900, MS-900, SC-900, MD-102, MS-102, AZ-104, and AZ-500, supporting a long-term direction toward security-focused cloud administration and Azure security engineering. Explore my portfolio to see my hands-on work, technical progression, and commitment to continuous improvement.',
  currentFoundation: ['IT Support', 'Troubleshooting', 'Microsoft 365 Support'],
  currentDevelopment: [
    'Microsoft 365 Administration',
    'Microsoft Entra ID',
    'Endpoint Management',
    'PowerShell Automation',
    'Azure Fundamentals'
  ],
  nearTermDirection: [
    'Endpoint Administration',
    'Microsoft 365 Administration',
    'Azure Administration'
  ],
  longTermDirection: ['Cloud Security', 'Azure Security Engineering'],
  roadmapPhases: [
    {
      phase: 1,
      title: 'Cloud, Microsoft 365 & Security Foundations',
      certifications: ['AZ-900', 'MS-900', 'SC-900'],
      status: 'Current Focus',
      description: 'Build the shared foundation for Azure concepts, Microsoft 365 services, identity, compliance, security fundamentals, Zero Trust, and cloud governance.',
      focusAreas: ['Azure Fundamentals', 'Microsoft 365 Services', 'Cloud Models', 'Microsoft Entra ID', 'Security & Compliance', 'Zero Trust', 'Governance']
    },
    {
      phase: 2,
      title: 'Endpoint & Modern Workplace Administration',
      certifications: ['MD-102'],
      status: 'Planned',
      description: 'Develop practical endpoint administration capability across Microsoft Intune, device enrollment, configuration profiles, compliance, application deployment, and Windows device management.',
      focusAreas: ['Microsoft Intune', 'Endpoint Management', 'Device Enrollment', 'Compliance Policies', 'App Deployment', 'Endpoint Security', 'Windows Administration']
    },
    {
      phase: 3,
      title: 'Microsoft 365 & Azure Administration',
      certifications: ['MS-102', 'AZ-104'],
      status: 'Planned',
      description: 'Progress toward broader tenant, identity, service, and Azure administration responsibilities with governance, networking, compute, storage, monitoring, RBAC, and PowerShell.',
      focusAreas: ['Microsoft 365 Admin', 'Microsoft Entra ID', 'Exchange Online', 'Teams Admin', 'Azure Governance', 'Networking', 'Compute & Storage', 'Monitoring', 'PowerShell']
    },
    {
      phase: 4,
      title: 'Azure Security Engineering',
      certifications: ['AZ-500'],
      status: 'Planned',
      description: 'Move into security-focused cloud administration through secure configuration, identity protection, privileged access concepts, network security, workload protection, monitoring, and defensive documentation.',
      focusAreas: ['Azure Security', 'Identity Protection', 'Network Security', 'Secure Configuration', 'Defender for Cloud', 'Sentinel Concepts', 'Threat Visibility', 'Zero Trust Architecture']
    }
  ]
};

const certificationRoadmap = careerProfile.roadmapPhases.flatMap(phase => phase.certifications);

const futureRoadmapProjects = [
  {
    title: 'Microsoft 365 Identity & Access Lab',
    stage: 'Foundation',
    status: 'Planned',
    icon: 'fas fa-user-shield',
    roadmapAlignment: ['MS-900', 'SC-900', 'MS-102'],
    summary: 'A controlled demonstration environment exploring identity administration, access governance concepts, authentication controls, and least-privilege practices across a Microsoft 365-oriented environment.',
    skills: ['Microsoft Entra ID', 'Users & Groups', 'RBAC Concepts', 'MFA Concepts', 'Conditional Access Concepts', 'Least Privilege', 'Zero Trust']
  },
  {
    title: 'Modern Endpoint Management Lab',
    stage: 'Administration',
    status: 'Planned',
    icon: 'fas fa-laptop-code',
    roadmapAlignment: ['MD-102', 'MS-102'],
    summary: 'A portfolio lab demonstrating modern endpoint administration concepts through device configuration, compliance, application deployment, and policy-driven management.',
    skills: ['Microsoft Intune', 'Device Enrollment', 'Configuration Profiles', 'Compliance Policies', 'Application Deployment', 'Endpoint Security', 'Windows Administration']
  },
  {
    title: 'PowerShell IT Administration Toolkit',
    stage: 'Automation',
    status: 'Planned',
    icon: 'fas fa-terminal',
    roadmapAlignment: ['MD-102', 'MS-102', 'AZ-104'],
    summary: 'A collection of safe, reusable PowerShell utilities designed to automate common administrative, reporting, and support workflows in controlled lab environments.',
    skills: ['PowerShell', 'Task Automation', 'Reporting', 'User Administration Workflows', 'Device Information Collection', 'Structured Logging', 'Documentation']
  },
  {
    title: 'Azure Administration Lab',
    stage: 'Cloud',
    status: 'Planned',
    icon: 'fas fa-cloud',
    roadmapAlignment: ['AZ-900', 'AZ-104'],
    summary: 'A structured Azure lab demonstrating core cloud administration skills across identity, governance, networking, compute, storage, monitoring, and operational documentation.',
    skills: ['Resource Groups', 'Identity & RBAC Concepts', 'Virtual Networking', 'Storage', 'Compute', 'Monitoring', 'Governance', 'Cost Awareness']
  },
  {
    title: 'Hybrid IT Operations Dashboard',
    stage: 'Operations',
    status: 'Planned',
    icon: 'fas fa-chart-line',
    roadmapAlignment: ['MS-102', 'AZ-104', 'PowerShell'],
    summary: 'A conceptual operations dashboard that consolidates non-sensitive administrative insights from controlled Microsoft 365 and Azure lab environments into a clear support and operations view.',
    skills: ['Operational Reporting', 'Microsoft 365 Admin Concepts', 'Azure Admin Concepts', 'PowerShell', 'Service Health Visualization', 'Status Reporting', 'Dashboard Design']
  },
  {
    title: 'Azure Security Monitoring Lab',
    stage: 'Security',
    status: 'Planned',
    icon: 'fas fa-shield-alt',
    roadmapAlignment: ['SC-900', 'AZ-104', 'AZ-500'],
    summary: 'A defensive cloud security lab focused on visibility, secure configuration, identity protection concepts, monitoring, and structured investigation workflows in a controlled Azure environment.',
    skills: ['Cloud Security Posture', 'Identity Security', 'Security Monitoring Concepts', 'Secure Configuration', 'Logging', 'Alert Triage Concepts', 'Incident Documentation']
  },
  {
    title: 'Secure Modern Workplace Architecture',
    stage: 'Integrated Capstone',
    status: 'Planned',
    icon: 'fas fa-sitemap',
    roadmapAlignment: ['MS-900', 'SC-900', 'MD-102', 'MS-102', 'AZ-104', 'AZ-500'],
    summary: 'A capstone-style architecture project demonstrating how identity, endpoints, Microsoft 365 services, Azure administration, and cloud security concepts can work together in a secure modern workplace design.',
    skills: ['Microsoft 365', 'Microsoft Entra ID', 'Microsoft Intune', 'Endpoint Compliance', 'Identity Security', 'Azure Administration', 'Zero Trust', 'Governance Concepts']
  }
];

const portfolioProjects = [
  {
    title: 'Asset Operations Platform',
    status: 'in-progress',
    iconImage: 'assests/service-operations-platform.svg',
    iconAlt: 'Asset Operations Platform icon',
    overview: 'An asset-focused platform for managing records, tracking updates, and supporting day-to-day operational workflows.',
    developmentFocus: 'Building responsive asset management workflows with dynamic data interactions and a simple, maintainable full-stack structure.',
    visibilityNote: 'Selected implementation details are intentionally withheld during active development.',
    technologies: [
      { name: 'PHP', icon: 'fab fa-php' },
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'jQuery', icon: 'fas fa-dollar-sign' },
      { name: 'AJAX', icon: 'fas fa-sync-alt' }
    ]
  }
];

const projectStatusLabels = {
  completed: 'Completed',
  'in-progress': 'IN PROGRESS',
  planned: 'Planned'
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
}

function renderTagList(items, className, itemClassName = '') {
  return `<div class="${className}">${items.map(item => `<span class="${itemClassName}">${escapeHtml(item)}</span>`).join('')}</div>`;
}

function getProjectStatusLabel(status) {
  return projectStatusLabels[status] || status;
}

function renderProjectTechnologyIcons(technologies = []) {
  if (!technologies.length) return '';

  return `
    <div class="project-tech-stack in-progress-tech-stack" aria-label="Confirmed technologies">
      ${technologies.map(technology => `
        <div class="tech-icon" title="${escapeHtml(technology.name)}" role="img" aria-label="${escapeHtml(technology.name)}">
          <i class="${escapeHtml(technology.icon)}" aria-hidden="true"></i>
        </div>
      `).join('')}
    </div>
  `;
}

const softwareSkillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'fas fa-desktop',
    skills: [
      {
        name: 'React',
        icon: 'fab fa-react',
        iconColor: '#61dafb',
        usage: [{ type: 'project', label: 'ARWSS', target: 'ARWSS' }]
      },
      {
        name: 'JavaScript',
        icon: 'fab fa-js',
        iconColor: '#f7df1e',
        usage: [
          { type: 'project', label: 'ZARWISE', target: 'ZARWISE' },
          { type: 'project', label: 'Library Management System', target: 'Library Management System' }
        ]
      },
      {
        name: 'HTML5',
        icon: 'fab fa-html5',
        iconColor: '#e34c26',
        usage: [
          { type: 'project', label: 'ZARWISE', target: 'ZARWISE' },
          { type: 'project', label: 'Asset Operations Platform', target: 'Asset Operations Platform' }
        ]
      },
      {
        name: 'CSS3',
        icon: 'fab fa-css3-alt',
        iconColor: '#1572b6',
        usage: [{ type: 'project', label: 'ZARWISE', target: 'ZARWISE' }]
      },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap', iconColor: '#7952b3' },
      {
        name: 'jQuery',
        icon: 'fas fa-dollar-sign',
        iconColor: '#0769ad',
        usage: [{ type: 'project', label: 'Asset Operations Platform', target: 'Asset Operations Platform' }]
      },
      {
        name: 'AJAX',
        icon: 'fas fa-sync-alt',
        iconColor: '#2c3e50',
        usage: [{ type: 'project', label: 'Asset Operations Platform', target: 'Asset Operations Platform' }]
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'fas fa-server',
    skills: [
      {
        name: 'PHP',
        icon: 'fab fa-php',
        iconColor: '#777bb4',
        usage: [
          { type: 'project', label: 'ZARWISE', target: 'ZARWISE' },
          { type: 'project', label: 'Asset Operations Platform', target: 'Asset Operations Platform' }
        ]
      },
      {
        name: 'Java',
        icon: 'fab fa-java',
        iconColor: '#f89820',
        usage: [{ type: 'project', label: 'Library Management System', target: 'Library Management System' }]
      },
      {
        name: 'C#',
        icon: 'fas fa-code',
        iconColor: '#239120',
        usage: [{ type: 'project', label: 'Student Management Info System', target: 'Student Management Info System' }]
      },
      {
        name: 'Python',
        icon: 'fab fa-python',
        iconColor: '#3776ab',
        usage: [{ type: 'project', label: 'ARWSS', target: 'ARWSS' }]
      },
      { name: 'Node.js', icon: 'fab fa-node-js', iconColor: '#3c873a' },
      {
        name: 'REST API Integration',
        icon: 'fas fa-plug',
        iconColor: '#2c3e50',
        usage: [{ type: 'project', label: 'ARWSS', target: 'ARWSS' }]
      },
      {
        name: 'CRUD Operations',
        icon: 'fas fa-edit',
        iconColor: '#2c3e50',
        usage: [
          { type: 'project', label: 'Student Management Info System', target: 'Student Management Info System' },
          { type: 'project', label: 'Library Management System', target: 'Library Management System' }
        ]
      }
    ]
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'fas fa-database',
    skills: [
      {
        name: 'MySQL',
        icon: 'fas fa-database',
        iconColor: '#00758f',
        usage: [{ type: 'project', label: 'ZARWISE', target: 'ZARWISE' }]
      },
      {
        name: 'SQL Server',
        icon: 'fas fa-server',
        iconColor: '#cc2927',
        usage: [{ type: 'project', label: 'Student Management Info System', target: 'Student Management Info System' }]
      },
      {
        name: 'T-SQL',
        icon: 'fas fa-search',
        iconColor: '#2c3e50',
        usage: [{ type: 'project', label: 'Student Management Info System', target: 'Student Management Info System' }]
      },
      {
        name: 'PostgreSQL',
        icon: 'fas fa-layer-group',
        iconColor: '#336791',
        usage: [{ type: 'project', label: 'Library Management System', target: 'Library Management System' }]
      },
      {
        name: 'SQLite',
        icon: 'fas fa-cube',
        iconColor: '#003b57',
        usage: [{ type: 'project', label: 'ARWSS', target: 'ARWSS' }]
      },
      {
        name: 'Database Design',
        icon: 'fas fa-project-diagram',
        iconColor: '#2c3e50',
        usage: [
          { type: 'project', label: 'Student Management Info System', target: 'Student Management Info System' },
          { type: 'project', label: 'Library Management System', target: 'Library Management System' }
        ]
      },
      { name: 'Reporting Queries', icon: 'fas fa-chart-line', iconColor: '#2c3e50' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Others',
    icon: 'fas fa-tools',
    skills: [
      {
        name: 'Git',
        icon: 'fab fa-git-alt',
        iconColor: '#f05032',
        usage: [{ type: 'status', label: 'All Projects', icon: 'fas fa-star' }]
      },
      {
        name: 'GitHub',
        icon: 'fab fa-github',
        iconColor: '#181717',
        usage: [{ type: 'status', label: 'All Projects', icon: 'fas fa-star' }]
      },
      {
        name: 'Command Line',
        icon: 'fas fa-terminal',
        iconColor: '#2c3e50',
        usage: [
          { type: 'project', label: 'ARWSS', target: 'ARWSS' },
          { type: 'project', label: 'Library Management', target: 'Library Management System' }
        ]
      },
      {
        name: 'Docker',
        icon: 'fab fa-docker',
        iconColor: '#2496ed',
        usage: [{ type: 'status', label: 'Learning in Progress', icon: 'fas fa-clock' }]
      }
    ]
  }
];

function renderSkillUsage(usage = []) {
  if (!usage.length) return '';

  return `
    <div class="skill-projects">
      <p><strong>Used in:</strong></p>
      <div class="project-links">
        ${usage.map(item => {
          const icon = escapeHtml(item.icon || 'fas fa-link');
          const label = escapeHtml(item.label);
          if (item.type === 'project') {
            const target = escapeHtml(item.target || item.label);
            return `
              <a href="#projects" data-project-target="${target}" class="project-link">
                <i class="${icon}" aria-hidden="true"></i> ${label}
              </a>
            `;
          }

          return `
            <span class="project-link">
              <i class="${icon}" aria-hidden="true"></i> ${label}
            </span>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function bindSkillProjectLinks(skillsContainer) {
  if (skillsContainer.dataset.projectLinksBound === 'true') {
    return;
  }

  skillsContainer.dataset.projectLinksBound = 'true';
  skillsContainer.addEventListener('click', event => {
    const link = event.target.closest('a.project-link[data-project-target]');
    if (!link || !skillsContainer.contains(link)) {
      return;
    }

    event.preventDefault();
    scrollToProject(link.dataset.projectTarget);

    if (window.history && typeof window.history.pushState === 'function') {
      window.history.pushState(null, '', '#projects');
    } else {
      window.location.hash = 'projects';
    }
  });
}

function renderSkillCard(skill) {
  return `
    <div class="skill-card">
      <div class="skill-icon" aria-hidden="true">
        <i class="${escapeHtml(skill.icon)}" style="color: ${escapeHtml(skill.iconColor || '#2c3e50')};"></i>
      </div>
      <div class="skill-info">
        <h3>${escapeHtml(skill.name)}</h3>
        ${renderSkillUsage(skill.usage)}
      </div>
    </div>
  `;
}

function renderSkillsMatrix() {
  const skillsContainer = document.getElementById('previous-skills-grid');
  if (!skillsContainer) return;

  skillsContainer.innerHTML = softwareSkillCategories.map(category => `
    <article class="skills-category skills-category--${escapeHtml(category.id)}" aria-labelledby="skills-category-${escapeHtml(category.id)}">
      <h2 id="skills-category-${escapeHtml(category.id)}" class="skills-category-title">
        <span class="skills-category-icon" aria-hidden="true">
          <i class="${escapeHtml(category.icon)}"></i>
        </span>
        <span>${escapeHtml(category.title)}</span>
      </h2>
      <div class="skills-grid">
        ${category.skills.map(renderSkillCard).join('')}
      </div>
    </article>
  `).join('');

  bindSkillProjectLinks(skillsContainer);
}

function renderInProgressProjects() {
  const projectsContainer = document.getElementById('in-progress-projects-grid');
  if (!projectsContainer) return;

  const inProgressProjects = portfolioProjects.filter(project => project.status === 'in-progress');

  projectsContainer.innerHTML = inProgressProjects.map((project, index) => `
    <article class="future-project-card in-progress-project-card" onclick="toggleDescription(this, event)" style="--in-progress-index: ${index};">
      <div class="in-progress-card-accent" aria-hidden="true"></div>
      ${project.iconImage ? `
        <img src="${escapeHtml(project.iconImage)}" alt="${escapeHtml(project.iconAlt || project.title)}" class="project-img in-progress-project-icon">
      ` : `
        <i class="${escapeHtml(project.icon || 'fas fa-code-branch')} icon in-progress-project-icon" aria-hidden="true"></i>
      `}
      <div class="in-progress-card-header">
        <h3>${escapeHtml(project.title)}</h3>
        <span class="in-progress-status-badge">
          <span class="in-progress-status-dot" aria-hidden="true"></span>
          ${escapeHtml(getProjectStatusLabel(project.status))}
        </span>
      </div>
      <p class="in-progress-overview">${escapeHtml(project.overview)}</p>
      <div class="project-description in-progress-description" style="display: none;">
        <p><i class="fas fa-compass" style="margin-right: 0.5rem;"></i><strong>Development Focus:</strong> ${escapeHtml(project.developmentFocus)}</p>
        ${renderProjectTechnologyIcons(project.technologies)}
        <p class="portfolio-safety-note in-progress-privacy-note"><i class="fas fa-lock" style="margin-right: 0.5rem;"></i>${escapeHtml(project.visibilityNote)}</p>
      </div>
    </article>
  `).join('');
}

function initializeInProgressReveal() {
  const cards = document.querySelectorAll('.in-progress-project-card');
  if (!cards.length) return;

  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    cards.forEach(card => card.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-visible');
      activeObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.18,
    rootMargin: '0px 0px -8% 0px'
  });

  cards.forEach(card => observer.observe(card));
}

function renderProfessionalRoadmap() {
  const roadmapContainer = document.getElementById('professional-roadmap');
  if (!roadmapContainer) return;

  roadmapContainer.innerHTML = careerProfile.roadmapPhases.map(phase => `
    <div class="roadmap-node">
      <div class="roadmap-badge">${String(phase.phase).padStart(2, '0')}</div>
      <div class="roadmap-content">
        <div class="roadmap-content__meta">
          <span class="roadmap-status">${escapeHtml(phase.status)}</span>
          <span class="roadmap-certs">${escapeHtml(phase.certifications.join(' · '))}</span>
        </div>
        <h3>${escapeHtml(phase.title)}</h3>
        <p>${escapeHtml(phase.description)}</p>
        ${renderTagList(phase.focusAreas, 'roadmap-tags')}
      </div>
    </div>
  `).join('');
}

function renderFutureProjectsRoadmap() {
  const projectsContainer = document.getElementById('future-projects-roadmap');
  if (!projectsContainer) return;

  projectsContainer.innerHTML = futureRoadmapProjects.map((project, index) => `
    <article class="future-project-card future-roadmap-card" onclick="toggleDescription(this, event)">
      <div class="future-project-card__topline">
        <span class="future-project-step">${String(index + 1).padStart(2, '0')}</span>
        <span class="project-status">${escapeHtml(project.status)}</span>
      </div>
      <i class="${escapeHtml(project.icon)} icon future-project-icon" aria-hidden="true"></i>
      <p class="future-project-stage">${escapeHtml(project.stage)}</p>
      <h3>${escapeHtml(project.title)}</h3>
      <p class="future-project-summary">${escapeHtml(project.summary)}</p>
      <div class="project-description" style="display: none;">
        <p><i class="fas fa-layer-group" style="margin-right: 0.5rem;"></i><strong>Development Stage:</strong> ${escapeHtml(project.stage)}</p>
        <div class="roadmap-alignment">
          <p><i class="fas fa-route" style="margin-right: 0.5rem;"></i><strong>Roadmap Alignment:</strong></p>
          ${renderTagList(project.roadmapAlignment, 'roadmap-alignment-tags', 'roadmap-code-tag')}
        </div>
        <div class="project-skills-block">
          <p><i class="fas fa-tools" style="margin-right: 0.5rem;"></i><strong>Practical Skills Demonstrated:</strong></p>
          ${renderTagList(project.skills, 'project-skill-tags', 'project-skill-tag')}
        </div>
        <p class="portfolio-safety-note"><i class="fas fa-lock" style="margin-right: 0.5rem;"></i><strong>Portfolio Safety:</strong> Built with fictional, synthetic, or controlled lab data only.</p>
      </div>
    </article>
  `).join('');
}

// Dynamic Stats Calculation and Updates
function initializeDynamicStats() {
  updateWorkExperience();
  updateProjectCount();
  updateSkillsCount();
}

function normalizeSkillName(name) {
  return String(name || '').trim().replace(/\s+/g, ' ').toLowerCase();
}

function getSkillNamesFromCategories(skillCategories = []) {
  return skillCategories.flatMap(category => (
    Array.isArray(category.skills)
      ? category.skills.map(skill => skill && skill.name).filter(Boolean)
      : []
  ));
}

function getProfessionalSkillNames(root = document) {
  if (!root || typeof root.querySelectorAll !== 'function') {
    return [];
  }

  return Array.from(root.querySelectorAll('#about .soft-skills-grid .soft-skill-content h3'))
    .map(heading => heading.textContent)
    .filter(Boolean);
}

function calculateUniqueSkillCount({ skillCategories = softwareSkillCategories, professionalSkillNames = [] } = {}) {
  const uniqueSkills = new Set();

  getSkillNamesFromCategories(skillCategories).forEach(name => {
    const normalizedName = normalizeSkillName(name);
    if (normalizedName) {
      uniqueSkills.add(normalizedName);
    }
  });

  professionalSkillNames.forEach(name => {
    const normalizedName = normalizeSkillName(name);
    if (normalizedName) {
      uniqueSkills.add(normalizedName);
    }
  });

  return uniqueSkills.size;
}

function getSkillCountSummary(root = document, skillCategories = softwareSkillCategories) {
  const professionalSkillNames = getProfessionalSkillNames(root);

  return {
    technicalCount: calculateUniqueSkillCount({ skillCategories, professionalSkillNames: [] }),
    professionalCount: calculateUniqueSkillCount({ skillCategories: [], professionalSkillNames }),
    totalCount: calculateUniqueSkillCount({ skillCategories, professionalSkillNames })
  };
}

function isCountedPortfolioProject(project) {
  const hiddenStatuses = new Set(['planned', 'hidden', 'archived', 'draft']);
  return Boolean(project && !hiddenStatuses.has(String(project.status || '').toLowerCase()));
}

function calculatePortfolioProjectCount({ completedProjectCount = 0, projects = portfolioProjects } = {}) {
  const activeProjectCount = Array.isArray(projects)
    ? projects.filter(isCountedPortfolioProject).length
    : 0;

  return completedProjectCount + activeProjectCount;
}

function getCompletedProjectCardCount(root = document) {
  if (!root || typeof root.querySelectorAll !== 'function') {
    return 0;
  }

  return root.querySelectorAll('.current-projects-grid .future-project-card').length;
}

function getStatItems(statKey, labelMatches = []) {
  const keyedStats = Array.from(document.querySelectorAll(`[data-stat="${statKey}"]`));
  const fallbackStats = Array.from(document.querySelectorAll('.stat-item, .mobile-stat-item')).filter(item => {
    if (item.dataset && item.dataset.stat) {
      return false;
    }

    const label = item.querySelector('.stat-label, .mobile-stat-label');
    return label && labelMatches.includes(label.textContent.trim());
  });

  return [...keyedStats, ...fallbackStats];
}

function updateStatValue(statKey, value, labelMatches = [], title = '') {
  getStatItems(statKey, labelMatches).forEach(item => {
    const numberElement = item.querySelector('.stat-number, .mobile-stat-number');
    if (numberElement) {
      numberElement.textContent = String(value);
    }

    if (title) {
      item.title = title;
      if (numberElement) {
        numberElement.title = title;
      }
    } else {
      item.removeAttribute('title');
      if (numberElement) {
        numberElement.removeAttribute('title');
      }
    }
  });
}

// Function to scroll to specific project in the portfolio
function scrollToProject(projectName) {
  // First, scroll to the projects section
  document.getElementById('projects').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
  
  // After a short delay, find and highlight the specific project
  setTimeout(() => {
    const projectCards = document.querySelectorAll('.future-project-card h3');
    
    for (let card of projectCards) {
      if (card.textContent.trim() === projectName) {
        // Get the parent project card
        const projectCard = card.closest('.future-project-card');
        
        // Scroll to the specific project card
        projectCard.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
        
        // Add a temporary highlight effect
        projectCard.style.transition = 'all 0.3s ease';
        projectCard.style.transform = 'scale(1.05)';
        projectCard.style.boxShadow = '0 8px 25px rgba(52, 152, 219, 0.3)';
        projectCard.style.border = '2px solid #3498db';
        
        // Remove the highlight after 2 seconds
        setTimeout(() => {
          projectCard.style.transform = '';
          projectCard.style.boxShadow = '';
          projectCard.style.border = '';
        }, 2000);
        
        break;
      }
    }
  }, 500);
}

function updateWorkExperience() {
  updateExperienceStat();
}

function calculateExperienceText(startDate) {
  const start = new Date(startDate + 'T00:00:00');
  const now = new Date();

  if (isNaN(start.getTime()) || start > now) {
    return '0+';
  }

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (now.getDate() < start.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years > 0) {
    return `${years}+ Years`;
  } else {
    return `${months}+ Months`;
  }
}

function updateProjectCount() {
  const completedProjectCount = getCompletedProjectCardCount();
  const activeProjectCount = portfolioProjects.filter(isCountedPortfolioProject).length;
  const projectCount = calculatePortfolioProjectCount({ completedProjectCount, projects: portfolioProjects });
  const projectTitle = `${projectCount} visible portfolio projects: ${completedProjectCount} completed + ${activeProjectCount} active in-progress`;

  updateStatValue('projects', projectCount, ['Projects'], projectTitle);
}

function updateSkillsCount() {
  const { technicalCount, professionalCount, totalCount } = getSkillCountSummary();
  const skillsTitle = `${totalCount} unique skills from ${technicalCount} technical skills and ${professionalCount} personal strengths`;

  updateStatValue('skills', totalCount, ['Total Skills', 'Technical & Professional Skills'], skillsTitle);
}

const futureRoadmapIconSequence = ['grid', 'shield', 'terminal', 'chart', 'layers', 'shield', 'book'];

const futureProjectMilestones = futureRoadmapProjects.map((project, index) => ({
  stage: `Stage ${index + 1}`,
  status: project.stage,
  title: project.title,
  icon: futureRoadmapIconSequence[index] || 'grid',
  summary: project.summary,
  features: [...project.skills.slice(0, 5), ...project.roadmapAlignment.slice(0, 2)]
}));

const roadmapIcons = {
  grid: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.4"></rect><rect x="14" y="3" width="7" height="7" rx="1.4"></rect><rect x="3" y="14" width="7" height="7" rx="1.4"></rect><rect x="14" y="14" width="7" height="7" rx="1.4"></rect></svg>',
  terminal: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17l6-6-6-6"></path><path d="M12 19h8"></path></svg>',
  sparkles: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.9 4.7L18.5 10l-4.6 2.3L12 17l-1.9-4.7L5.5 10l4.6-2.3L12 3z"></path><path d="M19 15l.8 2 2.2 1-2.2 1-.8 2-.8-2-2.2-1 2.2-1 .8-2z"></path><path d="M4 14l.6 1.5L6 16l-1.4.5L4 18l-.6-1.5L2 16l1.4-.5L4 14z"></path></svg>',
  briefcase: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7V5.5A2.5 2.5 0 0 1 11.5 3h1A2.5 2.5 0 0 1 15 5.5V7"></path><rect x="3" y="7" width="18" height="13" rx="2"></rect><path d="M3 12h18"></path><path d="M10 12v2h4v-2"></path></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3z"></path><path d="M9 12l2 2 4-5"></path></svg>',
  chart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5"></path><path d="M4 19h16"></path><rect x="7" y="11" width="3" height="5" rx="1"></rect><rect x="12" y="8" width="3" height="8" rx="1"></rect><rect x="17" y="5" width="3" height="11" rx="1"></rect></svg>',
  book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16z"></path><path d="M4 19a2.5 2.5 0 0 1 2.5-2.5H20"></path><path d="M8 7h8"></path><path d="M8 11h6"></path></svg>',
  layers: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l9 5-9 5-9-5 9-5z"></path><path d="M3 12l9 5 9-5"></path><path d="M3 16l9 5 9-5"></path></svg>'
};

function initializeFutureProjectsRoadmap() {
  const roadmap = document.getElementById('future-projects-roadmap');
  if (!roadmap) return;
  const section = roadmap.closest('.future-roadmap-section');
  const shell = section ? section.querySelector('.future-roadmap-shell') : null;
  if (!shell) return;

  roadmap.innerHTML = futureProjectMilestones.map((milestone, index) => {
    const featureItems = milestone.features.map(feature => `<li>${feature}</li>`).join('');
    const iconSvg = roadmapIcons[milestone.icon] || roadmapIcons.grid;
    const milestoneNumber = String(index + 1).padStart(2, '0');

    return `
      <article class="future-roadmap-milestone" role="listitem" tabindex="0" data-roadmap-index="${index}" style="--milestone-index: ${index};" aria-label="${milestone.stage}: ${milestone.title}">
        <div class="future-roadmap-card">
          <div class="future-roadmap-card-header">
            <div class="future-roadmap-icon">${iconSvg}</div>
            <div>
              <span class="future-roadmap-stage">${milestone.stage}</span>
              <h3>${milestone.title}</h3>
            </div>
          </div>
          <span class="future-roadmap-status">${milestone.status}</span>
          <p>${milestone.summary}</p>
          <ul>${featureItems}</ul>
        </div>
        <div class="future-roadmap-node" aria-hidden="true">
          <span>${milestoneNumber}</span>
        </div>
      </article>
    `;
  }).join('');

  initializeFutureRoadmapInteractions(roadmap, shell, {
    previousButton: section.querySelector('[data-roadmap-prev]'),
    nextButton: section.querySelector('[data-roadmap-next]'),
    activeLabel: section.querySelector('#future-roadmap-active-label')
  });
}

function initializeFutureRoadmapInteractions(roadmap, shell, controls = {}) {
  const milestones = Array.from(roadmap.querySelectorAll('.future-roadmap-milestone'));
  if (!milestones.length) return;

  const { previousButton, nextButton, activeLabel } = controls;
  let activeIndex = 0;
  let animationFrameId = null;
  let edgePadding = 0;
  let trackWidth = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartScrollLeft = 0;
  let hasDragged = false;
  let suppressClick = false;
  const roadmapHintStorageKey = 'futureRoadmapDragHintSeen:v2';

  const clampIndex = (index) => Math.max(0, Math.min(index, milestones.length - 1));

  const hasSeenRoadmapHint = () => {
    try {
      return window.sessionStorage.getItem(roadmapHintStorageKey) === 'true';
    } catch (error) {
      return shell.dataset.dragHintSeen === 'true';
    }
  };

  const markRoadmapHintSeen = () => {
    shell.dataset.dragHintSeen = 'true';
    try {
      window.sessionStorage.setItem(roadmapHintStorageKey, 'true');
    } catch (error) {
      // The data attribute fallback covers browsers with disabled storage.
    }
  };

  const syncRoadmapMetrics = () => {
    const firstMilestone = milestones[0];
    const cardWidth = firstMilestone ? firstMilestone.getBoundingClientRect().width : 0;
    edgePadding = Math.max(8, (shell.clientWidth - cardWidth) / 2);
    const trackInset = edgePadding + cardWidth / 2;
    trackWidth = Math.max(0, roadmap.scrollWidth - trackInset * 2);

    roadmap.style.setProperty('--roadmap-edge-pad', `${edgePadding}px`);
    roadmap.style.setProperty('--roadmap-track-inset', `${trackInset}px`);
    roadmap.style.setProperty('--roadmap-track-width', `${trackWidth}px`);
  };

  const getClosestMilestoneIndex = () => {
    const shellRect = shell.getBoundingClientRect();
    const shellCenter = shellRect.left + shellRect.width / 2;

    return milestones.reduce((closestIndex, milestone, index) => {
      const rect = milestone.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const distance = Math.abs(center - shellCenter);
      const closestRect = milestones[closestIndex].getBoundingClientRect();
      const closestCenter = closestRect.left + closestRect.width / 2;
      const closestDistance = Math.abs(closestCenter - shellCenter);

      return distance < closestDistance ? index : closestIndex;
    }, 0);
  };

  const setActiveMilestone = (index) => {
    activeIndex = clampIndex(index);

    milestones.forEach((milestone, milestoneIndex) => {
      const isActive = milestoneIndex === activeIndex;
      milestone.classList.toggle('is-active', isActive);

      if (isActive) {
        milestone.setAttribute('aria-current', 'step');
      } else {
        milestone.removeAttribute('aria-current');
      }
    });

    if (previousButton) previousButton.disabled = activeIndex === 0;
    if (nextButton) nextButton.disabled = activeIndex === milestones.length - 1;

    if (activeLabel) {
      const milestone = futureProjectMilestones[activeIndex];
      activeLabel.textContent = `${milestone.stage}, ${milestone.title}`;
    }
  };

  const updateRoadmapState = () => {
    animationFrameId = null;
    syncRoadmapMetrics();

    const maxScroll = Math.max(0, shell.scrollWidth - shell.clientWidth);
    const scrollRatio = maxScroll > 0 ? shell.scrollLeft / maxScroll : 0;
    roadmap.style.setProperty('--roadmap-progress-width', `${Math.round(trackWidth * scrollRatio)}px`);
    setActiveMilestone(getClosestMilestoneIndex());
  };

  const requestRoadmapStateUpdate = () => {
    if (animationFrameId) return;
    animationFrameId = window.requestAnimationFrame(updateRoadmapState);
  };

  const scrollToMilestone = (index, behavior = 'smooth') => {
    const target = milestones[clampIndex(index)];
    if (!target) return;
    const targetCenter = target.offsetLeft + target.offsetWidth / 2;
    const scrollTarget = targetCenter - shell.clientWidth / 2;

    shell.scrollTo({
      left: scrollTarget,
      behavior,
    });
  };

  const animateShellScroll = (from, to, duration) => new Promise(resolve => {
    const startTime = window.performance.now();
    const easeInOut = (progress) => progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      shell.scrollLeft = from + (to - from) * easeInOut(progress);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        resolve();
      }
    };

    window.requestAnimationFrame(step);
  });

  const runRoadmapDragHint = async () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const maxScroll = shell.scrollWidth - shell.clientWidth;
    if (prefersReducedMotion || maxScroll <= 0 || hasSeenRoadmapHint()) return;

    markRoadmapHintSeen();
    await new Promise(resolve => window.setTimeout(resolve, 700));
    if (isDragging || shell.scrollLeft > 4) return;

    const startScroll = shell.scrollLeft;
    const hintDistance = Math.min(110, Math.max(80, maxScroll * 0.08));
    const hintTarget = Math.min(maxScroll, startScroll + hintDistance);

    shell.classList.add('is-hinting');
    await animateShellScroll(startScroll, hintTarget, 800);
    await new Promise(resolve => window.setTimeout(resolve, 400));
    await animateShellScroll(shell.scrollLeft, startScroll, 800);
    shell.classList.remove('is-hinting');
    shell.scrollLeft = startScroll;
    updateRoadmapState();
  };

  const initializeRoadmapDragHint = () => {
    if (hasSeenRoadmapHint() || !('IntersectionObserver' in window)) return;

    const section = roadmap.closest('.future-roadmap-section');
    if (!section) return;

    const hintObserver = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      if (!entry || entry.intersectionRatio < 0.42) return;

      observer.disconnect();
      runRoadmapDragHint();
    }, {
      threshold: [0.42, 0.5]
    });

    hintObserver.observe(section);
  };

  const milestoneObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    root: shell,
    threshold: 0.28
  });

  milestones.forEach((milestone, index) => {
    milestoneObserver.observe(milestone);
    milestone.addEventListener('click', () => scrollToMilestone(index));
    milestone.addEventListener('focus', () => scrollToMilestone(index));
  });

  shell.addEventListener('scroll', requestRoadmapStateUpdate, { passive: true });

  shell.addEventListener('wheel', (event) => {
    const maxScroll = shell.scrollWidth - shell.clientWidth;
    if (maxScroll <= 0) return;

    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (!delta) return;

    const atStart = shell.scrollLeft <= 0 && delta < 0;
    const atEnd = shell.scrollLeft >= maxScroll - 1 && delta > 0;
    if (atStart || atEnd) return;

    event.preventDefault();
    shell.scrollLeft += delta;
  }, { passive: false });

  shell.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollToMilestone(activeIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollToMilestone(activeIndex - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      scrollToMilestone(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      scrollToMilestone(milestones.length - 1);
    }
  });

  shell.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse' || event.button !== 0 || event.target.closest('button, a, input, textarea, select')) return;

    isDragging = true;
    hasDragged = false;
    dragStartX = event.clientX;
    dragStartScrollLeft = shell.scrollLeft;
    shell.classList.add('is-dragging');
    shell.setPointerCapture(event.pointerId);
  });

  shell.addEventListener('pointermove', (event) => {
    if (!isDragging) return;

    const deltaX = event.clientX - dragStartX;
    if (Math.abs(deltaX) > 4) hasDragged = true;
    shell.scrollLeft = dragStartScrollLeft - deltaX;
  });

  shell.addEventListener('mousedown', (event) => {
    if (isDragging || event.button !== 0 || event.target.closest('button, a, input, textarea, select')) return;

    isDragging = true;
    hasDragged = false;
    dragStartX = event.clientX;
    dragStartScrollLeft = shell.scrollLeft;
    shell.classList.add('is-dragging');
    event.preventDefault();
  });

  window.addEventListener('mousemove', (event) => {
    if (!isDragging) return;

    const deltaX = event.clientX - dragStartX;
    if (Math.abs(deltaX) > 4) hasDragged = true;
    shell.scrollLeft = dragStartScrollLeft - deltaX;
  });

  const endDrag = (event) => {
    if (!isDragging) return;

    isDragging = false;
    shell.classList.remove('is-dragging');
    if (typeof event.pointerId === 'number' && shell.hasPointerCapture(event.pointerId)) {
      shell.releasePointerCapture(event.pointerId);
    }

    if (hasDragged) {
      suppressClick = true;
      scrollToMilestone(getClosestMilestoneIndex());
      window.setTimeout(() => {
        suppressClick = false;
      }, 250);
    }
  };

  shell.addEventListener('pointerup', endDrag);
  shell.addEventListener('pointercancel', endDrag);
  shell.addEventListener('mouseleave', endDrag);
  window.addEventListener('mouseup', endDrag);

  shell.addEventListener('click', (event) => {
    if (!suppressClick) return;
    event.preventDefault();
    event.stopPropagation();
  }, true);

  if (previousButton) {
    previousButton.addEventListener('click', () => scrollToMilestone(activeIndex - 1));
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => scrollToMilestone(activeIndex + 1));
  }

  const handleResize = () => {
    syncRoadmapMetrics();
    scrollToMilestone(activeIndex, 'auto');
    requestRoadmapStateUpdate();
  };

  window.addEventListener('resize', handleResize, { passive: true });
  syncRoadmapMetrics();
  setActiveMilestone(0);
  updateRoadmapState();
  window.requestAnimationFrame(() => {
    scrollToMilestone(0, 'auto');
    updateRoadmapState();
    initializeRoadmapDragHint();
  });
}

// Update experience stat specifically
function updateExperienceStat() {
  const startDate = '2025-01-20'; // Current IT Support role start date  const experienceText = calculateExperienceText(startDate);
  
  const statsItems = document.querySelectorAll('.stat-item, .mobile-stat-item');
  statsItems.forEach(item => {
    const label = item.querySelector('.stat-label, .mobile-stat-label');
    if (label && (label.textContent === 'Months Experience' || label.textContent.includes('Experience'))) {
      const numberElement = item.querySelector('.stat-number, .mobile-stat-number');
      const labelElement = item.querySelector('.stat-label, .mobile-stat-label');
      
      if (numberElement && labelElement) {
        const start = new Date(startDate + 'T00:00:00');
        const now = new Date();
        
        let years = now.getFullYear() - start.getFullYear();
        let months = now.getMonth() - start.getMonth();
        
        if (now.getDate() < start.getDate()) {
          months--;
        }
        
        if (months < 0) {
          years--;
          months += 12;
        }
        
        if (years > 0) {
          numberElement.textContent = `${years}+`;
          labelElement.textContent = years === 1 ? 'Year Experience' : 'Years Experience';
        } else {
          numberElement.textContent = `${months}+`;
          labelElement.textContent = 'Months Experience';
        }
      }
    }
  });
}

// Sidebar Navigation Functionality
function initializeSidebarNavigation() {
  const sidebar = document.getElementById('sidebar-nav');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const sidebarToggle = sidebar ? sidebar.querySelector('.sidebar-toggle') : null;
  const mobileToggle = document.querySelector('.sidebar-mobile-toggle');
  const backdrop = document.querySelector('[data-sidebar-backdrop]');
  const desktopMedia = window.matchMedia('(min-width: 769px)');

  function setDesktopExpanded(isExpanded) {
    if (!sidebar) {
      return;
    }

    sidebar.classList.toggle('is-expanded', isExpanded);
    sidebar.classList.toggle('is-collapsed', !isExpanded);
    document.body.classList.toggle('sidebar-expanded', isExpanded);
    document.body.classList.toggle('sidebar-collapsed', !isExpanded);

    if (sidebarToggle) {
      sidebarToggle.setAttribute('aria-expanded', String(isExpanded));
      sidebarToggle.setAttribute('aria-label', isExpanded ? 'Collapse navigation' : 'Expand navigation');
      const icon = sidebarToggle.querySelector('i');
      if (icon) {
        icon.className = isExpanded ? 'fas fa-chevron-left' : 'fas fa-chevron-right';
      }
    }
  }

  function setMobileSidebarOpen(isOpen) {
    if (!sidebar) {
      return;
    }

    sidebar.classList.toggle('is-mobile-open', isOpen);
    document.body.classList.toggle('sidebar-mobile-open', isOpen);

    if (mobileToggle) {
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      mobileToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      const label = mobileToggle.querySelector('.sr-only');
      if (label) {
        label.textContent = isOpen ? 'Close navigation' : 'Open navigation';
      }
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
      }
    }

    if (backdrop) {
      backdrop.hidden = !isOpen;
    }

    if (sidebarToggle && !desktopMedia.matches) {
      sidebarToggle.setAttribute('aria-expanded', String(isOpen));
      sidebarToggle.setAttribute('aria-label', 'Close navigation');
      const icon = sidebarToggle.querySelector('i');
      if (icon) {
        icon.className = 'fas fa-chevron-left';
      }
    }
  }

  function syncSidebarForViewport() {
    if (!sidebar) {
      return;
    }

    if (desktopMedia.matches) {
      setMobileSidebarOpen(false);
      const shouldExpand = !sidebar.classList.contains('is-collapsed');
      setDesktopExpanded(shouldExpand);
      return;
    }

    document.body.classList.remove('sidebar-expanded', 'sidebar-collapsed');
    sidebar.classList.add('is-expanded');
    sidebar.classList.remove('is-collapsed');
    setMobileSidebarOpen(false);
  }
  
  // Handle active tab switching
  function setActiveTab(targetSection) {
    // Remove active class from sidebar links
    sidebarLinks.forEach(link => {
      const isActive = link.getAttribute('data-section') === targetSection;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
    
    // Remove active class from mobile navigation items
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    mobileNavItems.forEach(item => {
      const isActive = item.getAttribute('data-section') === targetSection;
      item.classList.toggle('active', isActive);
      if (isActive) {
        item.setAttribute('aria-current', 'page');
      } else {
        item.removeAttribute('aria-current');
      }
    });
  }
  
  // Handle scroll-based active tab detection
  function handleScrollActiveTab() {
    // Check if mobile bottom navigation exists and is visible
    const mobileNav = document.querySelector('.mobile-bottom-nav');
    const isMobile = mobileNav && window.getComputedStyle(mobileNav).display !== 'none';
    
    const sections = ['profile', 'about', 'skills', 'projects'];
    const scrollPosition = window.scrollY + 200; // Offset for better detection
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveTab(sections[i]);
        break;
      }
    }
  }
  
  // Add click event listeners to sidebar links
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetSection = this.getAttribute('data-section');
      const isMobileDrawer = !desktopMedia.matches;
      
      if (targetSection) {
        setActiveTab(targetSection);
      }
      
      if (isMobileDrawer) {
        if (targetSection === 'profile') {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
        setMobileSidebarOpen(false);
      }
    });
  });

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      if (desktopMedia.matches) {
        setDesktopExpanded(sidebar.classList.contains('is-collapsed'));
        return;
      }

      setMobileSidebarOpen(false);
      if (mobileToggle) {
        mobileToggle.focus();
      }
    });
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      const shouldOpen = !sidebar || !sidebar.classList.contains('is-mobile-open');
      setMobileSidebarOpen(shouldOpen);
      if (shouldOpen && sidebar) {
        const activeLink = sidebar.querySelector('.sidebar-link.active') || sidebar.querySelector('.sidebar-link');
        if (activeLink) {
          window.setTimeout(() => activeLink.focus(), 80);
        }
      }
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', function() {
      setMobileSidebarOpen(false);
    });
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && sidebar && sidebar.classList.contains('is-mobile-open')) {
      setMobileSidebarOpen(false);
      if (mobileToggle) {
        mobileToggle.focus();
      }
    }
  });

  if (typeof desktopMedia.addEventListener === 'function') {
    desktopMedia.addEventListener('change', syncSidebarForViewport);
  } else if (typeof desktopMedia.addListener === 'function') {
    desktopMedia.addListener(syncSidebarForViewport);
  }
  
  // Listen for scroll events to update active tab
  window.addEventListener('scroll', handleScrollActiveTab);
  
  // Set initial active tab
  syncSidebarForViewport();
  handleScrollActiveTab();
}

// Initialize sidebar navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeSidebarNavigation();
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
    // Add haptic feedback on supported devices
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  }
}

// Add click animation to project cards and future project cards
function initializeProjectAnimations() {
  const projectCards = document.querySelectorAll('.project-card');
  const futureProjectCards = document.querySelectorAll('.future-project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Add a subtle scale animation for cards
      this.style.transform = 'scale(0.98)';
      this.style.transition = 'transform 0.15s ease';
      
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  });
  
  // Special handling for future project cards - don't interfere with toggle functionality
  futureProjectCards.forEach(card => {
    card.addEventListener('mousedown', function(e) {
      // Add a subtle press animation
      this.style.transform = 'translateY(-8px) scale(0.98)';
      this.style.transition = 'transform 0.1s ease';
    });
    
    card.addEventListener('mouseup', function(e) {
      // Return to hover state
      setTimeout(() => {
        if (this.classList.contains('expanded')) {
          this.style.transform = 'translateY(-10px) scale(1.02)';
        } else {
          this.style.transform = '';
        }
      }, 100);
    });
    
    card.addEventListener('mouseleave', function(e) {
      // Reset transform on mouse leave
      if (this.classList.contains('expanded')) {
        this.style.transform = 'translateY(-10px) scale(1.02)';
      } else {
        this.style.transform = '';
      }
    });
  });
}

// Logo refresh functionality
function refreshPage() {
  window.location.reload();
}

function downloadCV() {
  openAccessReasonModal('CV');
}

function showCVUpdateToast() {
  const toastEl = document.getElementById('cvUpdateToast');
  if (!toastEl) return;

  if (window.bootstrap && typeof window.bootstrap.Toast === 'function') {
    const toast = window.bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 5000 });
    toast.show();
    return;
  }

  toastEl.classList.add('show');
  toastEl.classList.remove('hide');
  window.setTimeout(() => {
    toastEl.classList.remove('show');
    toastEl.classList.add('hide');
  }, 5000);
}

// Inline video functionality for ARWSS project

function toggleInlineVideo(event, button) {
  // Prevent the project card click event from firing
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  
  const videoContainer = button.closest('.project-description').querySelector('.inline-video-container');
  const video = videoContainer.querySelector('video');
  const buttonIcon = button.querySelector('i');
  
  if (videoContainer.style.display === 'none' || !videoContainer.style.display) {
    // Show video
    videoContainer.style.display = 'block';
    buttonIcon.className = 'fas fa-times';
    button.innerHTML = '<i class="fas fa-times" style="margin-right: 0.5rem;"></i>Hide Demo';
    button.title = 'Hide Live Demo';
    
    // Play video
    if (video) {
      video.play();
    }
  } else {
    // Hide video
    videoContainer.style.display = 'none';
    buttonIcon.className = 'fas fa-play';
    button.innerHTML = '<i class="fas fa-play" style="margin-right: 0.5rem;"></i>Live Demo';
    button.title = 'View Live Demo';
    
    // Pause video and reset
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }
}

// Initialize page functionality when DOM loads
document.addEventListener('DOMContentLoaded', function () {
  renderSkillsMatrix();
  renderProfessionalRoadmap();
  renderInProgressProjects();
  initializeFutureProjectsRoadmap();
  initializeInProgressReveal();
  // Add refresh functionality to brand logo controls
  const logos = document.querySelectorAll('.brand-logo-button, .sidebar-logo-button');
  logos.forEach(logo => {
    logo.addEventListener('click', refreshPage);
  });

  // Initialize skills animation observer
  const items = document.querySelectorAll('.language-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  items.forEach(item => {
    observer.observe(item);
  });

  // Initialize button click animations
  initializeButtonAnimations();
});

// Button click animation function
function addButtonClickAnimation(button) {
  // Add click animation classes
  button.classList.add('btn-clicked', 'btn-ripple');
  
  // Remove animation classes after animation completes
  setTimeout(() => {
    button.classList.remove('btn-clicked', 'btn-ripple');
  }, 600);
}

// Initialize button animations
function initializeButtonAnimations() {
  // Select all buttons with the 'btn' class
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Add animation
      addButtonClickAnimation(this);
    });
  });
  
  // Add click animation to project cards and future project cards
  const projectCards = document.querySelectorAll('.project-card, .future-project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Add a subtle scale animation for cards
      this.style.transform = 'scale(0.98)';
      this.style.transition = 'transform 0.15s ease';
      
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  });
  
  // Add click animation to quick action buttons in CV bot
  const quickButtons = document.querySelectorAll('.quick-btn');
  quickButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Add a special pulse animation for quick buttons
      this.style.transform = 'scale(0.95)';
      this.style.transition = 'transform 0.1s ease';
      this.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.3)';
      
      setTimeout(() => {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '';
      }, 150);
    });
  });

  // Add click animation to navigation links
  const navLinks = document.querySelectorAll('nav a, .footer-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      this.style.transform = 'scale(0.95)';
      this.style.transition = 'transform 0.1s ease';
      
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 100);
    });
  });

  // Add click animation to social icons
  const socialIcons = document.querySelectorAll('.footer-social a');
  socialIcons.forEach(icon => {
    icon.addEventListener('click', function(e) {
      this.style.transform = 'rotate(15deg) scale(1.1)';
      this.style.transition = 'transform 0.2s ease';
      
      setTimeout(() => {
        this.style.transform = 'rotate(0deg) scale(1)';
      }, 200);
    });
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function toggleDescription(card, event) {
  const clickTarget = event && event.target;
  if (clickTarget && clickTarget.closest('button, a, video, .inline-video-container, .project-description .btn')) {
    return;
  }

  // Get the description element within this card
  const description = card.querySelector('.project-description');
  
  if (!description) return; // Safety check
  
  // Close all other descriptions first
  const allCards = document.querySelectorAll('.future-project-card');
  allCards.forEach(otherCard => {
    if (otherCard !== card) {
      const otherDescription = otherCard.querySelector('.project-description');
      if (otherDescription) {
        otherDescription.style.display = 'none';
        otherCard.classList.remove('expanded');
      }
    }
  });

  // Toggle the clicked description
  if (description.style.display === 'none' || description.style.display === '') {
    description.style.display = 'block';
    card.classList.add('expanded');
    
    // Add a smooth animation
    description.style.opacity = '0';
    description.style.transform = 'translateY(-10px)';
    description.style.transition = 'all 0.3s ease';
    
    // Trigger the animation
    setTimeout(() => {
      description.style.opacity = '1';
      description.style.transform = 'translateY(0)';
    }, 10);
    
  } else {
    description.style.opacity = '0';
    description.style.transform = 'translateY(-10px)';
    card.classList.remove('expanded');
    
    setTimeout(() => {
      description.style.display = 'none';
    }, 300);
  }
}

// Close all descriptions when clicking outside of project cards
document.addEventListener('click', function(event) {
  // Prevent closing project descriptions if clicking on Agent M bot
  const cvBotContainer = document.getElementById('cv-bot-container');
  if (cvBotContainer && cvBotContainer.contains(event.target)) {
    return; // Don't close anything if clicking on the bot
  }
  
  const futureProjectCards = document.querySelectorAll('.future-project-card');
  let isClickInside = false;

  futureProjectCards.forEach(card => {
    if (card.contains(event.target)) {
      isClickInside = true;
    }
  });

  if (!isClickInside) {
    const allDescriptions = document.querySelectorAll('.project-description');
    allDescriptions.forEach(description => {
      description.style.opacity = '0';
      description.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        description.style.display = 'none';
      }, 300);
    });
    
    // Remove expanded class from all cards
    futureProjectCards.forEach(card => {
      card.classList.remove('expanded');
    });
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

function showAccessReasonToast(message, type = 'error') {
  let toast = document.getElementById('accessReasonToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'accessReasonToast';
    toast.className = 'access-reason-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.remove('error');
  if (type === 'error') {
    toast.classList.add('error');
  }
  toast.classList.add('show');

  if (toast._hideTimer) {
    clearTimeout(toast._hideTimer);
  }
  toast._hideTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
}

function openAccessReasonModal(documentName) {
  const modal = document.getElementById('accessReasonModal');
  const docLabel = document.getElementById('accessReasonDoc');
  const reasonInput = document.getElementById('accessReasonInput');
  const emailLink = document.getElementById('accessReasonEmail');
  const reasonCount = document.getElementById('accessReasonCount');

  if (!modal || !docLabel || !reasonInput || !emailLink || !reasonCount) {
    return;
  }

  captureModalTrigger();

  const buildEmailHref = (docName, reasonValue) => {
    const reasonText = reasonValue.trim() || '[Please provide reason]';
    return `mailto:marceldelange20@gmail.com?subject=${encodeURIComponent(`${docName} Access Request`)}&body=${encodeURIComponent(`Document: ${docName}\nReason: ${reasonText}`)}`;
  };

  const updateRequestState = () => {
    const currentDoc = modal.dataset.documentName || 'Document';
    const currentReason = reasonInput.value || '';
    reasonCount.textContent = `${currentReason.length} / 500`;
    emailLink.href = buildEmailHref(currentDoc, currentReason);

    const hasReason = currentReason.trim().length > 0;
    emailLink.classList.toggle('is-disabled', !hasReason);
    emailLink.setAttribute('aria-disabled', String(!hasReason));
    emailLink.tabIndex = hasReason ? 0 : -1;
  };

  docLabel.textContent = documentName;
  modal.dataset.documentName = documentName;
  reasonInput.value = '';

  if (!reasonInput.dataset.bound) {
    reasonInput.addEventListener('input', updateRequestState);
    emailLink.addEventListener('click', (event) => {
      if (emailLink.classList.contains('is-disabled')) {
        event.preventDefault();
        emailLink.classList.add('flash-error');
        setTimeout(() => {
          emailLink.classList.remove('flash-error');
        }, 500);
        showAccessReasonToast('Please add a reason before sending your request.');
        reasonInput.focus();
      }
    });
    reasonInput.dataset.bound = 'true';
  }

  updateRequestState();
  modal.style.display = 'flex';
  updateModalScrollLock();
  focusModalControl(modal, '.access-reason-close');
}

function closeAccessReasonModal() {
  const modal = document.getElementById('accessReasonModal');
  const reasonInput = document.getElementById('accessReasonInput');
  if (modal) {
    modal.style.display = 'none';
  }
  if (reasonInput) {
    reasonInput.value = '';
  }
  updateModalScrollLock();
  restoreModalTrigger();
}

document.addEventListener("DOMContentLoaded", function () {
  function getCalendarDurationParts(startDate, endDate = null) {
    // Calendar duration: counts every day elapsed, including weekends and non-work days.
    const start = new Date(startDate + 'T00:00:00');
    const now = endDate ? new Date(endDate + 'T23:59:59') : new Date();

    if (isNaN(start.getTime())) {
      console.error("Invalid start date:", startDate);
      return null;
    }

    if (start > now) {
      return { years: 0, months: 0, days: 0 };
    }

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();

    // Handle negative days (if the current day is before the start day)
    if (days < 0) {
      months--; // Borrow a month
      let previousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // Get days in the previous month
      days += previousMonth; 
    }

    // Handle negative months (if the current month is before the start month)
    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  }

  function formatDurationPart(value, singular, plural) {
    return value > 0 ? `${value} ${value === 1 ? singular : plural}` : null;
  }

  function formatCompactDuration(duration) {
    if (!duration) {
      return "Invalid date";
    }

    const parts = [
      formatDurationPart(duration.years, 'yr', 'yrs'),
      formatDurationPart(duration.months, 'mo', 'mos'),
      formatDurationPart(duration.days, 'day', 'days')
    ].filter(Boolean);

    return parts.length ? parts.join(' ') : '0 days';
  }

  function formatDurationLabel(duration) {
    if (!duration) {
      return "Invalid date";
    }

    const parts = [
      formatDurationPart(duration.years, 'year', 'years'),
      formatDurationPart(duration.months, 'month', 'months'),
      formatDurationPart(duration.days, 'day', 'days')
    ].filter(Boolean);

    if (!parts.length) {
      return '0 days';
    }

    if (parts.length === 1) {
      return parts[0];
    }

    return `${parts.slice(0, -1).join(', ')} and ${parts[parts.length - 1]}`;
  }

  function setRoleDuration(element, startDate, endDate = null) {
    const duration = getCalendarDurationParts(startDate, endDate);
    const compactDuration = formatCompactDuration(duration);
    const accessibleDuration = formatDurationLabel(duration);

    element.innerText = compactDuration;
    element.setAttribute('aria-label', accessibleDuration);
    element.title = accessibleDuration;
  }

  function updateRoleDurations() {
    const previousRoleDuration = document.getElementById('work-duration');
    const currentRoleDuration = document.getElementById('current-role-duration');

    if (previousRoleDuration) {
      // Previous role is fixed and should not continue increasing.
      setRoleDuration(previousRoleDuration, '2025-01-20', '2026-02-22');
    }

    // Current IT Support Technician role duration counts continuously by calendar day.
    if (currentRoleDuration) {
      setRoleDuration(currentRoleDuration, '2026-02-23');
    }
  }

  updateRoleDurations();
  setInterval(updateRoleDurations, 60000);
});

// CV Bot Assistant Functions
let isBotOpen = false;
let isFirstTime = true;
let isBotEventsBound = false;

function toggleCVBot(forceState = null) {
  const chatContainer = document.getElementById('cv-bot-chat');
  const toggleText = document.getElementById('bot-toggle-text');
  if (!chatContainer || !toggleText) {
    return;
  }

  const nextState = typeof forceState === 'boolean' ? forceState : !isBotOpen;
  if (nextState === isBotOpen) {
    return;
  }

  isBotOpen = nextState;

  if (isBotOpen) {
    chatContainer.classList.remove('cv-bot-hidden');
    chatContainer.classList.add('cv-bot-visible');
    toggleText.textContent = 'Hide Agent M';
    document.body.classList.add('cv-bot-open');
    
    // Show professional greeting only on first time
    if (isFirstTime) {
      showWelcomeMessage();
      isFirstTime = false;
    }
    
    // Add event listeners to prevent accidental closing
    setupBotEventListeners();
  } else {
    chatContainer.classList.remove('cv-bot-visible');
    chatContainer.classList.add('cv-bot-hidden');
    toggleText.textContent = 'Agent M';
    document.body.classList.remove('cv-bot-open');
  }
}

function setupBotEventListeners() {
  if (isBotEventsBound) {
    return;
  }

  const chatContainer = document.getElementById('cv-bot-chat');
  const messagesContainer = document.getElementById('cv-bot-messages');
  const botContainer = document.getElementById('cv-bot-container');
  
  if (botContainer) {
    botContainer.addEventListener('pointerdown', function(e) {
      e.stopPropagation();
    });
  }

  if (chatContainer) {
    // Prevent click events from bubbling up
    chatContainer.addEventListener('click', function(e) {
      e.stopPropagation();
    });
    
    // Prevent touch events from interfering
    chatContainer.addEventListener('touchstart', function(e) {
      e.stopPropagation();
    });
    
    chatContainer.addEventListener('touchmove', function(e) {
      e.stopPropagation();
    });
    
    chatContainer.addEventListener('touchend', function(e) {
      e.stopPropagation();
    });
  }
  
  if (messagesContainer) {
    // Allow scrolling within messages without closing bot
    messagesContainer.addEventListener('scroll', function(e) {
      e.stopPropagation();
    });
    
    // Prevent wheel events from closing bot
    messagesContainer.addEventListener('wheel', function(e) {
      e.stopPropagation();
    });
  }
  
  isBotEventsBound = true;
}

function initializeBotProtection() {
  // Add global protection for Agent M bot
  const botContainer = document.getElementById('cv-bot-container');
  if (botContainer) {
    if (botContainer.dataset.protectionBound === 'true') {
      return;
    }
    botContainer.dataset.protectionBound = 'true';

    // Prevent the bot container from being affected by global click handlers
    botContainer.addEventListener('click', function(e) {
      e.stopPropagation();
    });
    
    botContainer.addEventListener('touchstart', function(e) {
      e.stopPropagation();
    });
    
    // Ensure buttons work correctly
    const quickButtons = botContainer.querySelectorAll('.quick-btn');
    quickButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.stopPropagation();
        // The button's onclick will handle the actual functionality
      });
    });
    
    // Ensure close button works
    const closeButton = document.getElementById('cv-bot-close');
    if (closeButton) {
      closeButton.addEventListener('click', function(e) {
        e.stopPropagation();
        // The button's onclick will handle closing
      });
    }
    
    // Ensure toggle button works
    const toggleButton = document.getElementById('cv-bot-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', function(e) {
        e.stopPropagation();
        // The button's onclick will handle toggling
      });
    }
  }
}

function showWelcomeMessage() {
  // The welcome message is already in the HTML, so we just need to ensure it's visible
  const welcomeMessage = document.getElementById('welcome-message');
  if (welcomeMessage) {
    welcomeMessage.style.display = 'block';
  }
}

function clearChat() {
  const messagesContainer = document.getElementById('cv-bot-messages');
  // Clear all messages except the welcome message
  const welcomeMessage = document.getElementById('welcome-message');
  messagesContainer.innerHTML = '';
  if (welcomeMessage) {
    messagesContainer.appendChild(welcomeMessage);
  }
  
  // Add confirmation message
  setTimeout(() => {
    addBotMessage("✨ Chat cleared! How can I assist you with Marcel's portfolio?");
  }, 300);
}

function handleQuickAction(action) {
  const actions = {
    'profile': () => {
      // Check if mobile navigation is visible (mobile device)
      const mobileNav = document.querySelector('.mobile-bottom-nav');
      const isMobile = mobileNav && window.getComputedStyle(mobileNav).display !== 'none';
      
      if (isMobile) {
        addBotMessage("Opening Marcel's mobile profile with his current Junior IT Technician profile and Microsoft-focused development direction.");
        setTimeout(() => {
          // Use the mobile profile function if available
          if (typeof toggleMobileProfile === 'function') {
            toggleMobileProfile();
          } else {
            // Fallback: trigger the mobile profile nav click
            const mobileProfileNav = document.querySelector('.mobile-profile-nav');
            if (mobileProfileNav) {
              mobileProfileNav.click();
            }
          }
          toggleCVBot(); // Auto-close bot
        }, 1000);
      } else {
        addBotMessage("Taking you to Marcel's profile section with his current Junior IT Technician profile and Microsoft-focused development direction.");
        setTimeout(() => {
          document.getElementById('profile').scrollIntoView({ behavior: 'smooth' });
          toggleCVBot(); // Auto-close bot
        }, 1000);
      }
    },
    'about': () => {
      addBotMessage("Navigating to Marcel's About section with his IT support foundation, current learning focus, and collaboration interests.");
      setTimeout(() => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        toggleCVBot(); // Auto-close bot
      }, 1000);
    },
    'skills': () => {
      addBotMessage("Taking you to Marcel's Skills Matrix, which separates completed project experience from current Microsoft 365, endpoint, identity, PowerShell, and cloud development.");
      setTimeout(() => {
        document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
        toggleCVBot(); // Auto-close bot
      }, 1000);
    },
    'projects': () => {
      addBotMessage("Directing you to Marcel's project portfolio, including completed historical work and roadmap-aligned future Microsoft cloud and endpoint projects.");
      setTimeout(() => {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        toggleCVBot(); // Auto-close bot
      }, 1000);
    },
    'contact': () => {
      addBotMessage("Opening Marcel's contact form for you.");
      setTimeout(() => {
        openContactForm();
        toggleCVBot(); // Auto-close bot
      }, 1000);
    },
    'education': () => {
      addBotMessage("Showing Marcel's formal education and his separate Professional Development Roadmap. Roadmap certifications are planned/current development unless explicitly marked otherwise.");
      setTimeout(() => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        toggleCVBot(); // Auto-close bot
      }, 1000);
    },
    'experience': () => {
      addBotMessage("Here's information about Marcel's work experience at Amax Digital, including his current IT Support Technician role and transferable IT support skills.");      setTimeout(() => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        toggleCVBot(); // Auto-close bot
      }, 1000);
    },
    'hobbies': () => {
      addBotMessage("Discover Marcel's hobbies and interests.");
      setTimeout(() => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        toggleCVBot(); // Auto-close bot
      }, 1000);
    },
    'download': () => {
      addBotMessage("I'll help you find Marcel's CV. Use the Download CV button in the profile section.");
      setTimeout(() => {
        document.getElementById('profile').scrollIntoView({ behavior: 'smooth' });
        toggleCVBot(); // Auto-close bot
      }, 1000);
    }
  };
  
  if (actions[action]) {
    actions[action]();
  }
}

function addBotMessage(message) {
  const messagesContainer = document.getElementById('cv-bot-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = 'bot-message';
  messageDiv.innerHTML = `
    <div class="message-content">
      <p>${message}</p>
    </div>
  `;
  messagesContainer.appendChild(messageDiv);
  scrollToBottom();
}

function scrollToBottom() {
  const messagesContainer = document.getElementById('cv-bot-messages');
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

let lastModalTrigger = null;

function captureModalTrigger() {
  const activeElement = document.activeElement;
  if (activeElement && activeElement !== document.body && typeof activeElement.focus === 'function') {
    lastModalTrigger = activeElement;
  }
}

function restoreModalTrigger() {
  if (lastModalTrigger && document.contains(lastModalTrigger)) {
    lastModalTrigger.focus({ preventScroll: true });
  }
  lastModalTrigger = null;
}

function isModalOpen(modalId) {
  const modal = document.getElementById(modalId);
  return Boolean(modal && window.getComputedStyle(modal).display !== 'none');
}

function isMobileProfileOpen() {
  const profileSection = document.getElementById('mobile-profile-section');
  return Boolean(profileSection && profileSection.classList.contains('active'));
}

function updateModalScrollLock() {
  const hasOpenModal = ['contactModal', 'futureEducationModal', 'accessReasonModal'].some(isModalOpen);
  const shouldLockScroll = hasOpenModal || isMobileProfileOpen();
  document.body.style.overflow = shouldLockScroll ? 'hidden' : 'auto';
}

function focusModalControl(modal, selector) {
  const focusTarget = modal ? modal.querySelector(selector) : null;
  if (focusTarget && typeof focusTarget.focus === 'function') {
    setTimeout(() => {
      focusTarget.focus({ preventScroll: true });
    }, 0);
  }
}

// Contact Form Functions
function openContactForm() {
  const modal = document.getElementById('contactModal');
  if (!modal) {
    return;
  }
  captureModalTrigger();
  modal.style.display = 'block';
  updateModalScrollLock();
  focusModalControl(modal, '.contact-close');
}

function closeContactForm() {
  const modal = document.getElementById('contactModal');
  if (!modal || window.getComputedStyle(modal).display === 'none') {
    return;
  }
  modal.style.display = 'none';
  updateModalScrollLock();
  restoreModalTrigger();
}

function openFutureEducationModal() {
  const modal = document.getElementById('futureEducationModal');
  if (modal) {
    captureModalTrigger();
    modal.style.display = 'flex';
    updateModalScrollLock();
    focusModalControl(modal, '.future-education-close');
  }
}

function closeFutureEducationModal() {
  const modal = document.getElementById('futureEducationModal');
  if (!modal || window.getComputedStyle(modal).display === 'none') {
    return;
  }
  modal.style.display = 'none';
  updateModalScrollLock();
  restoreModalTrigger();
}

function submitContactForm(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Create mailto link with form data
  const mailtoLink = `mailto:marceldelange20@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
  
  // Open default email client
  window.location.href = mailtoLink;
  
  // Reset form and close modal
  document.getElementById('contactForm').reset();
  closeContactForm();
  
  // Show success message (optional)
  alert('Thank you for your message! Your default email client should open now.');
}

// Close modals when clicking outside of them
window.addEventListener('click', function(event) {
  const contactModal = document.getElementById('contactModal');
  const futureModal = document.getElementById('futureEducationModal');
  const accessReasonModal = document.getElementById('accessReasonModal');
  if (event.target === contactModal) {
    closeContactForm();
  }
  if (event.target === futureModal) {
    closeFutureEducationModal();
  }
  if (event.target === accessReasonModal) {
    closeAccessReasonModal();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key !== 'Escape') {
    return;
  }

  const accessReasonModal = document.getElementById('accessReasonModal');
  if (accessReasonModal && accessReasonModal.style.display === 'flex') {
    closeAccessReasonModal();
    return;
  }

  const futureModal = document.getElementById('futureEducationModal');
  if (futureModal && window.getComputedStyle(futureModal).display !== 'none') {
    closeFutureEducationModal();
    return;
  }

  const contactModal = document.getElementById('contactModal');
  if (contactModal && window.getComputedStyle(contactModal).display !== 'none') {
    closeContactForm();
  }
});

function initializePersonalStrengthsAnimation() {
  const grid = document.querySelector('#about .soft-skills-grid');
  if (!grid) {
    return;
  }

  const cards = Array.from(grid.querySelectorAll('.soft-skill-item'));
  if (!cards.length) {
    return;
  }

  cards.forEach((card, index) => {
    card.style.setProperty('--strength-index', index);
  });

  if (!('IntersectionObserver' in window)) {
    grid.classList.add('strengths-visible');
    return;
  }

  const mobileMedia = window.matchMedia('(max-width: 1024px)');
  const updateFloatingUiState = (isActive) => {
    document.body.classList.toggle('personal-strengths-active', mobileMedia.matches && isActive);
  };

  const floatingUiObserver = new IntersectionObserver((entries) => {
    updateFloatingUiState(entries.some((entry) => entry.isIntersecting));
  }, {
    threshold: 0.18
  });

  floatingUiObserver.observe(grid);

  if (typeof mobileMedia.addEventListener === 'function') {
    mobileMedia.addEventListener('change', () => {
      updateFloatingUiState(false);
    });
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    grid.classList.add('strengths-visible');
    return;
  }

  grid.classList.add('strengths-animate-pending');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      grid.classList.add('strengths-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.35,
    rootMargin: '0px 0px -10% 0px'
  });

  observer.observe(grid);
}

// Typing Animation Functions
document.addEventListener('DOMContentLoaded', function() {
  // Initialize dynamic stats
  initializeDynamicStats();
  
  // Update stats every minute to keep experience current
  setInterval(updateExperienceStat, 60000);
  
  // Initialize Agent M bot protections
  initializeBotProtection();
  
  // Initialize typing animation
  initializeTypingAnimation();

  initializePersonalStrengthsAnimation();
});

function initializeTypingAnimation() {
  const typingElements = document.querySelectorAll('.typing-text');
  
  // Set up animation completion handlers
  typingElements.forEach((element, index) => {
    let animationDuration;
    
    if (element.classList.contains('hello')) {
      animationDuration = 1000; // 1s
    } else if (element.classList.contains('name')) {
      animationDuration = 1200 + 1200; // 1.2s + 1.2s delay
    } else if (element.classList.contains('title')) {
      animationDuration = 2000 + 2500; // 2s + 2.5s delay
    }
    
    // Remove cursor after animation completes
    setTimeout(() => {
      element.classList.add('typing-complete');
    }, animationDuration);
  });
  
  // Show buttons and social icons after all typing is complete
  setTimeout(() => {
    const btnContainer = document.querySelector('.btn-container');
    const socialsContainer = document.querySelector('#socials-container');
    
    if (btnContainer) {
      btnContainer.style.opacity = '0';
      btnContainer.style.transform = 'translateY(20px)';
      btnContainer.style.transition = 'all 0.6s ease';
      btnContainer.style.display = 'flex';
      
      setTimeout(() => {
        btnContainer.style.opacity = '1';
        btnContainer.style.transform = 'translateY(0)';
      }, 100);
    }
    
    if (socialsContainer) {
      socialsContainer.style.opacity = '0';
      socialsContainer.style.transform = 'translateY(20px)';
      socialsContainer.style.transition = 'all 0.6s ease';
      socialsContainer.style.display = 'flex';
      
      setTimeout(() => {
        socialsContainer.style.opacity = '1';
        socialsContainer.style.transform = 'translateY(0)';
      }, 300);
    }
  }, 5000); // Start after all typing animations complete (reduced from 9000ms to 5000ms)
}
