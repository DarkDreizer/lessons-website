export const mainRoutes = new Map();

mainRoutes.set('log-in', {
  html: '../../views/log-in/log-in.html',
  identifier: 'log-in',
  style: '../../views/log-in/styles/log-in.css',
  script: null,
  title: 'Lessons',
  displayURL: '/',
  replace: true
});

mainRoutes.set('home', {
  html: '../../views/home/home.html',
  identifier: 'home',
  style: '../../views/home/styles/home.css',
  script: '../../views/home/scripts/home.js',
  title: 'Lessons - Home',
  displayURL: '/home',
  replace: false
});

mainRoutes.set('lessons', {
  html: '../../views/lessons/lessons.html',
  identifier: 'lessons',
  style: '../../views/lessons/styles/lessons.css',
  script: '../../views/lessons/scripts/lessons.js',
  title: 'Lessons - List of lessons',
  displayURL: '/lessons',
  replace: false
});

mainRoutes.set('exercises', {
  html: '../../views/exercises/exercises.html',
  identifier: 'exercises',
  style: '../../views/exercises/styles/exercises.css',
  script: '../../views/exercises/scripts/exercises.js',
  title: 'Lessons - Exercises',
  displayURL: '/exercises',
  replace: false
});

mainRoutes.set('stackblitz', {
  html: '../../views/stackblitz/stackblitz.html',
  identifier: 'stackblitz',
  style: '../../views/stackblitz/styles/stackblitz.css',
  script: '../../views/stackblitz/scripts/stackblitz.js',
  title: 'Lesson - Stackblitz',
  displayURL: '/stackblitz',
  replace: false
});

mainRoutes.set('repositories', {
  html: '../../views/repositories/repositories.html',
  identifier: 'repositories',
  style: '../../views/repositories/styles/repositories.css',
  script: '../../views/repositories/scripts/repositories.js',
  title: 'Lessons - Repositories',
  displayURL: '/repositories',
  replace: false
});

mainRoutes.set('not-found', {
  html: '../../views/not-found/not-found.html',
  identifier: 'not-found',
  style: '../../views/not-found/styles/not-found.css',
  script: null,
  title: 'Lessons - Not Found',
  displayURL: '/not-found',
  replace: true
});

