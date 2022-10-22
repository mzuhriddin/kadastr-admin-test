const routes = [{
  path: '/',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    {path: '', component: () => import('pages/DashboardPage.vue'), name: "Dashboard"},
    {path: '/appeals', component: () => import('pages/AppealsPage.vue'), name: "Appeals"},
    {path: '/operators', component: () => import('pages/OperatorsPage.vue'), name: "Operators"},
    {path: '/settings', component: () => import('pages/SettingsPage.vue'), name: "Settings"},
    {path: '/help', component: () => import('pages/HelpPage.vue'), name: "Help"},]
},

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*', component: () => import('pages/ErrorNotFound.vue')
  }]

export default routes
