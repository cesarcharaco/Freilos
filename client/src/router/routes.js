
const routes = [
  {
    path: '/menu',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'registrarconductor', component: () => import('pages/conductor/Form.vue') },
      { path: 'registrarcamion', component: () => import('pages/camion/Form.vue') },
      { path: 'registrardespacho', component: () => import('pages/despacho/Form.vue') },
      { path: 'registrarusuario', component: () => import('pages/usuarios/Form.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/Login.vue'),
    children: [
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
