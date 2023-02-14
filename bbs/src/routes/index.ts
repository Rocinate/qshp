import React from 'react'

import Home from '@/pages/Home'
import Search from '@/pages/Search'
// import NotFound from '@/pages/ErrorPage'
// import Forum from '@/pages/Forum'
// import Thread from '@/pages/Thread'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/search',
    component: Search,
  },
  //   {
  //     path: '/home',
  //     component: Home,
  //   },
  //   // {
  //   //   path: "/edit",
  //   //   component: Edit,
  //   // },
  //   // {
  //   //   path: "/article",
  //   //   component: Article,
  //   // },
  //   {
  //     path: '/forum/:fid',
  //     component: Forum,
  //   },
  //   {
  //     path: '/thread/:tid',
  //     component: Thread,
  //   },
  //   {
  //     path: '*',
  //     component: NotFound,
  //   },
]

export default routes