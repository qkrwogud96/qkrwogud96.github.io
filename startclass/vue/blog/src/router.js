import { createWebHistory, createRouter } from "vue-router";
import List from './components/list.vue'
import Home from './components/home.vue'
import Detail from './components/detail.vue'
import Author from './components/author.vue'
import Comment from './components/comment.vue'
const routes = [
    {
      path: "/",
      component: Home,
    },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id",
    component: Detail,
    children : [
        {
            path: "author",
            component: Author,
          },
        {
            path: "comment",
            component: Comment,
          },
    ],
  },
//   {
//     path: "/:anything(.*)",
//     component: Home,
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 