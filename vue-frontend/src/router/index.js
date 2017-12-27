import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Home from '@/components/Home'

import Dashboard from '@/components/dashboard/Dashboard'
import Customers from '@/components/customers/Customers'
import Products from '@/components/products/Products'

import Users from '@/components/users/Users'
import UsersList from '@/components/users/UsersList'
import UsersAddEdit from '@/components/users/UsersAddEdit'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: '/users',
          name: 'Users',
          component: Users,
          children: [
            {
              path: '',
              component: UsersList
            },
            {
              path: 'manage',
              component: UsersAddEdit
            }
          ]
        },
        {
          path: '/products',
          name: 'Products',
          component: Products
        },
        {
          path: '/customers',
          name: 'Customers',
          component: Customers
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
router.replace('/dashboard')

export default router
