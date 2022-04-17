export const mainRoutes = new Map();

mainRoutes.set('log-in', {
  html: '../../views/log-in/log-in.html',
  identifier: 'log-in',
  style: '../../views/log-in/styles/log-in.css',
  script: null,
  title: 'Lessons',
  displayURL: 'index.html'
});

mainRoutes.set('home', {
  html: '../../views/home/home.html',
  identifier: 'home',
  style: '../../views/home/styles/home.css',
  script: '../../views/home/scripts/home.js',
  title: 'Lessons - Home',
  displayURL: 'index.html/home'
})

