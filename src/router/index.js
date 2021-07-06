import { createRouter, createWebHistory } from 'vue-router';
import Enter from '@/views/Enter';
import Dashboard from '@/views/Dashboard';
import AllItems from '@/views/children/AllItems';
import ContentThemes from '@/views/children/ContentThemes';
import ContentChapters from '@/views/children/ContentChapters';
import NewItem from '@/views/children/NewItem';
import EditItem from '@/views/children/EditItem';
import BuyBuy from '@/views/BuyBuy';
import BadUser from '@/views/BadUser';
import CustomTheme from '@/views/children/CustomTheme';

const routes = [
  {
    path: '/', component: Enter, meta : { title: 'Wiki Documentation Alexei Suzdalenko' }
  },
  {
    path: '/dashboard', component: Dashboard,
    children: [
      {
        path: 'themes', component: ContentThemes, meta : { title: 'All Themes' }
      },
      {
        path: 'theme/:id', component: CustomTheme, meta : { title: 'All Themes' }
      },
      {
        path: 'chapters', component: ContentChapters, meta : { title: 'All Chapters' }
      },
      {
        path: 'all-items', component: AllItems, meta : { title: 'All Items' }
      },
      {
        path: 'new-item', component: NewItem, meta: { title: 'New Item' }
      },
      {
        path: 'item/:id', component: EditItem, meta: { title: 'Edit Item' }
      },
    ]
  },
  {
    path: '/buy-buy', component: BuyBuy, meta: { title: 'Buy Buy' }
  },
  {
    path: '/bad-user', component: BadUser, meta: { title: 'Bad User' }
  },
  {
    path: '/:catchAll(.*)', redirect: '/bad-user'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to) => {
  document.title = to.meta.title;
});

export default router
