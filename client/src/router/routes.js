
const routes = [
  {
    path: '/menu',
    component: () => import('layouts/MainLayout.vue')
  },
  {
    path: '/header',
    component: () => import('layouts/Header.vue'),
    children: [
      {
        path: '/camion',
        component: () => import('pages/camion/Form.vue')
      },
      {
        path: '/conductor',
        component: () => import('pages/conductor/Form.vue')
      },
      {
        path: '/despacho',
        component: () => import('pages/despacho/Form.vue')
      },
      {
        path: '/usuarios',
        component: () => import('pages/usuarios/Form.vue')
      }
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
