// layout
import Layout from './layout'

// pages
import Home from './pages/home'
import Detail from './pages/detail'

const Routes = [
  {
    path: '/',
    exact: true,
    layout: Layout,
    component: Home,
  },
  {
    path: '/detail/:id',
    exact: true,
    layout: Layout,
    component: Detail,
  },
]

export default Routes
