/* ============ i18n — FR (source) / EN ============ */
(function () {
  'use strict';

  // English translations keyed by data-i18n. Entries with HTML use innerHTML.
  var EN = {
    // nav / chrome
    nav_about: 'About', nav_xp: 'Experience', nav_projects: 'Projects',
    nav_stack: 'Stack', nav_contact: 'Get in touch',
    cta_projects: 'View my projects', cta_cv: 'Download CV', cta_cv_view: 'View online ↗',

    // hero
    hero_status: 'Available · Freelance · Paris, France',
    hero_role: 'Full-Stack Developer · Lead',
    hero_lead: 'I design and ship <strong>web &amp; mobile</strong> applications, from architecture to deployment — staying focused on <strong>performance</strong>, <strong>security</strong> and code quality.',

    // stats
    stat_years: "Years of experience", stat_projects: 'Projects &amp; missions',
    stat_tech: 'Technologies', stat_clients: 'Companies &amp; clients',

    // section heads
    sh_about_label: 'About',
    sh_xp_label: 'Journey', sh_xp_title: 'Experience',
    sh_proj_label: 'Selection', sh_proj_title: 'Projects',
    sh_stack_label: 'Tools', sh_stack_title: 'Tech stack',
    sh_edu_label: 'Degrees', sh_edu_title: 'Education',
    sh_more_label: 'Beyond code',

    // about
    about_role_k: 'Role', about_role_v: 'Full-Stack · Lead',
    about_base_k: 'Base', about_base_v: 'Paris, FR',
    about_status_k: 'Status', about_status_v: 'Available',
    about_exp_k: 'Exp.', about_exp_v: '4+ yrs',
    about_p1: 'Full-Stack Developer &amp; Lead, comfortable across <span class="hl">the entire technical chain</span> — TypeScript, React/Next.js, NestJS, Flutter — and in leading teams.',
    about_p2: 'I work from architecture design all the way to deployment, keeping focus on performance, security and code quality.',

    // experience
    xp1_role: 'Full-Stack Web Developer', xp1_org: 'Freelance<span class="sep">/</span>Paris',
    xp1_desc: 'Design and development of full-stack web &amp; mobile applications with React, Next.js, NestJS, Django, React Native, Flutter and PostgreSQL.',
    xp2_role: 'Lead Developer', xp2_org: 'SoftProces<span class="sep">/</span>Paris',
    xp2_desc: 'Full-stack TypeScript development (React/Next.js · NestJS), PostgreSQL management, Docker integration, code review and performance &amp; security optimization.',
    xp3_role: 'Web &amp; Mobile Trainer', xp3_org: 'Freelance<span class="sep">/</span>Île-de-France',
    xp3_desc: 'Mentoring students on web &amp; mobile technologies, hands-on projects and guidance toward professional autonomy.',
    xp4_role: 'Full-Stack Mobile Developer', xp4_org: 'Eviden / Atos<span class="sep">/</span>Cergy',
    xp4_desc: 'Secure messaging app with Flutter (Dart/Kotlin), native Java plugin development, backend integration and logic scripts in Python.',
    xp5_role: 'Full-Stack Web Developer', xp5_org: 'Fixers<span class="sep">/</span>Paris',
    xp5_desc: 'Built the back-office (Laravel, MySQL), developed a chatbot and added analytics features.',

    // projects (cards)
    p_log_kind: 'eSport SaaS · Multi-tenant',
    p_log_desc: 'A SaaS platform bringing together the four players of the eSport ecosystem — <strong style="color:var(--fg);font-weight:500">structures, gamers, providers and spectators</strong>. Each structure orchestrates its teams and rosters, its events (tournaments, scrims, matches), its Twitter-style feed and its services marketplace. The architecture relies on <strong style="color:var(--fg);font-weight:500">NestJS microservices</strong> (auth/RBAC, structure domain) isolated behind an <strong style="color:var(--fg);font-weight:500">APISIX</strong> gateway in forward-auth, with multi-tenant isolation by <code style="font-family:var(--font-mono);font-size:0.85em;color:var(--accent)">structure_id</code> and roles auto-generated per structure. The <strong style="color:var(--fg);font-weight:500">Next.js 15</strong> frontend (App Router, React 19) adopts a cyberpunk eSport art direction.',
    p_vin_kind: 'AI Sourcing · Microservices',
    p_vin_desc: 'Automated Vinted monitoring from a single <strong style="color:var(--fg);font-weight:500">reference image</strong>. For each search profile, the bot scrapes listings (<strong style="color:var(--fg);font-weight:500">Playwright</strong>), de-duplicates them, then visually compares them to the target image via a local AI engine (<strong style="color:var(--fg);font-weight:500">CLIP embeddings</strong>) with a PostgreSQL cache — sending a <strong style="color:var(--fg);font-weight:500">Telegram</strong> alert only for truly relevant matches. Architecture in NestJS microservices behind an APISIX gateway (forward-auth): an authentication service (sessions, roles, superadmin, temporary-password accounts) and a domain service orchestrating runs, scoring, image storage (<strong style="color:var(--fg);font-weight:500">MinIO</strong>) and queues (<strong style="color:var(--fg);font-weight:500">Redis / BullMQ</strong>) with multi-region workers.',
    p_ron_kind: 'Mobile · Ride log',
    p_ron_desc: 'Mobile app for motorcyclists: GPS ride recording, offline maps, riding stats (distance, elevation, lean angle) and a motorcycle maintenance log. Built in Flutter with a NestJS backend and real-time sync.',
    p_oct_kind: 'Web · Piano learning',
    p_oct_desc: 'Web app to learn the piano: plug in a MIDI keyboard, follow interactive exercises and get real-time feedback on the notes you play (accuracy, tempo, rhythm). Gamified progression and song library. Next.js frontend with the Web MIDI API, NestJS backend and PostgreSQL.',

    // stack categories
    cat_lang: 'Languages', cat_front: 'Front-end', cat_back: 'Back-end',
    cat_mobile: 'Mobile', cat_data: 'Data &amp; DevOps',
    stack_note_tag: 'Always learning',
    stack_note: "This list isn't fixed — I learn fast and adapt to new technologies, languages or tools as each project requires.",

    // formation
    edu1_title: 'Master — Information Systems Architect',
    edu1_detail: 'Specialization in Cloud Computing &amp; Micro-services.',
    edu2_title: 'Baccalauréat — High-school diploma',
    edu2_detail: 'Specialties: Mathematics, Engineering Sciences, Physics-Chemistry.',

    // languages & interests
    lang_h: 'Languages', int_h: 'Interests',
    lang_fr_l: 'French', lang_fr_lvl: 'Native',
    int_moto: 'Motorcycling', int_travel: 'Travel', int_piano: 'Piano', int_japan: 'Japanese culture',

    // contact
    contact_lead: "Let's work together",
    contact_h: "Let's talk about<br />your project.",
    ci_phone_k: 'Phone', ci_loc_k: 'Location', ci_loc_v: 'Paris, Île-de-France',
    ci_li_k: 'LinkedIn', ci_avail_k: 'Availability', ci_avail_v: 'Freelance · Contracts',
    foot_role: 'Full-Stack · Lead', foot_top: 'Back to top ↑',

    // case studies — shared labels
    case_close: 'Close', st_flagship: 'Flagship project',
    case_high: 'Highlights', case_info: 'Info', case_role: 'Role',
    case_year: 'Year', case_type: 'Type', case_more_shots: 'More screenshots',
    cs_role_v: 'Design &amp; dev',

    // case — logareth
    cs_log_p1: 'Logareth is a SaaS platform bringing together the four players of the eSport ecosystem — <strong>structures, gamers, providers and spectators</strong> — on a single stack. Each structure (club or organization) orchestrates its teams and rosters, its events (tournaments, scrims, matches), its feed and its services marketplace.',
    cs_log_p2: 'The architecture relies on NestJS microservices (authentication/RBAC and structure domain) isolated behind an APISIX gateway in forward-auth, with multi-tenant isolation by <strong>structure_id</strong> and roles auto-generated per structure. The Next.js 15 frontend (App Router, React 19) adopts a cyberpunk eSport art direction.',
    cs_log_h1: 'Strict multi-tenant data isolation by structure_id',
    cs_log_h2: 'Auto-generated RBAC roles per structure (owner, manager…)',
    cs_log_h3: 'APISIX gateway in forward-auth in front of the microservices',
    cs_log_h4: 'Twitter-style social feed + services marketplace',
    cs_log_type: 'Multi-tenant SaaS',

    // case — vinbot
    cs_vin_p1: 'VinBOT automates monitoring on Vinted from a single <strong>reference image</strong>. For each search profile, the bot scrapes listings (Playwright), de-duplicates them, then visually compares them to the target image via a local AI engine (CLIP embeddings) with a PostgreSQL cache — sending a Telegram alert only for truly relevant matches.',
    cs_vin_p2: 'The architecture is built on NestJS microservices behind an APISIX gateway (forward-auth): an authentication service (sessions, roles, superadmin, temporary-password accounts created by the admin via email) and a domain service orchestrating runs, scoring, image storage (MinIO) and queues (Redis / BullMQ) with multi-region workers.',
    cs_vin_h1: 'Visual matching via CLIP embeddings run locally',
    cs_vin_h2: 'Real-time scraping via Playwright + de-duplication',
    cs_vin_h3: 'Multi-region workers driven by Redis / BullMQ',
    cs_vin_h4: 'Targeted Telegram alerts on relevant matches',
    cs_vin_type: 'Bot + Web App',

    // case — ronin
    cs_ron_p1: 'Rōnin is a mobile app built for motorcyclists: every ride is recorded via GPS, with <strong>offline maps</strong> and detailed riding stats (distance, duration, average speed, lean angle). A maintenance log tracks the bike over the kilometers.',
    cs_ron_p2: 'Built in Flutter (Dart) with a NestJS backend and PostgreSQL, the app syncs rides in real time and works offline thanks to a local cache and downloadable maps.',
    cs_ron_h1: 'Real-time GPS ride recording',
    cs_ron_h2: 'Offline maps to ride without signal',
    cs_ron_h3: 'Riding stats (distance, lean angle…)',
    cs_ron_h4: 'Motorcycle maintenance log',
    cs_ron_type: 'Mobile app',

    // case — octave
    cs_oct_p1: 'Octave is a web app to learn the piano. Plug in a <strong>MIDI keyboard</strong> and follow interactive exercises: notes scroll across the screen and the app analyzes your playing in real time (accuracy, tempo, rhythm), with immediate note-by-note feedback.',
    cs_oct_p2: 'The Next.js frontend uses the Web MIDI API to read the keyboard live; the NestJS backend and PostgreSQL handle the gamified progression and the song library.',
    cs_oct_h1: 'Live keyboard reading via the Web MIDI API',
    cs_oct_h2: 'Real-time feedback: accuracy, tempo, rhythm',
    cs_oct_h3: 'Gamified progression and song library',
    cs_oct_h4: 'Interactive exercises (scales, songs)',
    cs_oct_type: 'Web app',

    // dot nav labels (data-dot)
    dot_top: 'Home', dot_about: 'About', dot_experience: 'Experience',
    dot_projects: 'Projects', dot_stack: 'Stack', dot_formation: 'Education', dot_contact: 'Contact'
  };

  var orig = {};       // cached FR innerHTML per element
  var origDot = {};    // cached FR dot labels
  var nodes = [];

  function cache() {
    nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
    nodes.forEach(function (el, i) {
      el.setAttribute('data-i18n-idx', i);
      orig[i] = el.innerHTML;
    });
    document.querySelectorAll('.dotnav a[data-dot]').forEach(function (a) {
      origDot[a.getAttribute('data-dot')] = a.getAttribute('data-label');
    });
  }

  function apply(lang) {
    nodes.forEach(function (el, i) {
      var key = el.getAttribute('data-i18n');
      if (lang === 'en' && EN[key] != null) el.innerHTML = EN[key];
      else el.innerHTML = orig[i];
    });
    document.querySelectorAll('.dotnav a[data-dot]').forEach(function (a) {
      var d = a.getAttribute('data-dot');
      a.setAttribute('data-label', lang === 'en' && EN['dot_' + d] ? EN['dot_' + d] : origDot[d]);
    });
    document.documentElement.setAttribute('lang', lang);
    var btn = document.querySelector('.lang-switch');
    if (btn) { btn.classList.toggle('en', lang === 'en'); btn.classList.toggle('fr', lang === 'fr'); }
    try { localStorage.setItem('lang', lang); } catch (e) {}
    window.__lang = lang;
  }

  function init() {
    cache();
    var saved = 'fr';
    try { saved = localStorage.getItem('lang') || 'fr'; } catch (e) {}
    apply(saved);
    var btn = document.querySelector('.lang-switch');
    if (btn) btn.addEventListener('click', function () {
      apply((window.__lang === 'en') ? 'fr' : 'en');
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
