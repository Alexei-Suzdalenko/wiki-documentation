import { createRouter, createWebHistory } from 'vue-router';
import Enter from '@/views/Enter';
import Dashboard from '@/views/Dashboard';
import AllItems from '@/views/children/AllItems';
import ContentTopics from '@/views/children/ContentTopics';
import ContentChapters from '@/views/children/ContentChapters';
import NewItem from '@/views/children/NewItem';
import EditItem from '@/views/children/EditItem';
import BuyBuy from '@/views/BuyBuy';
import BadUser from '@/views/BadUser';

const routes = [
  {
    path: '/', component: Enter, meta : { title: 'Wiki Documentation Alexei Suzdalenko' }
  },
  {
    path: '/dashboard', component: Dashboard,
    children: [
      {
        path: 'all-items', component: AllItems, meta : { title: 'All Items' }
      },
      {
        path: 'topics', component: ContentTopics, meta : { title: 'All Topics' }
      },
      {
        path: 'chapters', component: ContentChapters, meta : { title: 'All Chapters' }
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
