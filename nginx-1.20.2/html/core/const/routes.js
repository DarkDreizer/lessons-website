export const mainRoutes = new Map();

mainRoutes.set('log-in', {
  html: '../../views/log-in/log-in.html',
  identifier: 'log-in',
  style: '../../views/log-in/styles/log-in.css',
  script: null,
  title: 'Lessons',
  displayURL: '/'
});

mainRoutes.set('home', {
  html: '../../views/home/home.html',
  identifier: 'home',
  style: '../../views/home/styles/home.css',
  script: '../../views/home/scripts/home.js',
  title: 'Lessons - Home',
  displayURL: '/home'
});

mainRoutes.set('not-found', {
  html: '../../views/not-found/not-found.html',
  identifier: 'not-found',
  style: '../../views/not-found/styles/not-found.css',
  script: null,
  title: 'Lessons - Not Found',
  displayURL: '/not-found'
})

