import Vue from 'vue'
import Router from 'vue-router'

// User
import User from '../views/user/list'
import AddUser from '../views/user/add'
import EditUser from '../views/user/edit'
import DetailUser from '../views/user/detail'

// Banner
import Banner from '../views/banner/list'
import AddBanner from '../views/banner/add'
import EditBanner from '../views/banner/edit'
import DetailBanner from '../views/banner/detail'

// Article
import Article from '../views/article/list'
import AddArticle from '../views/article/add'
import EditArticle from '../views/article/edit'
import DetailArticle from '../views/article/detail'

// Notification
import Notification from '../views/notification/list'
import AddNotification from '../views/notification/add'
import EditNotification from '../views/notification/edit'
import DetailNotification from '../views/notification/detail'

// Product
import Product from '../views/product/list'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'list-user',
			component: User
		},
		{
			path: '/list-user',
			name: 'list-user',
			component: User
		},
		{
			path: '/add-user',
			name: 'add-user',
			component: AddUser
		},
		{
			path: '/edit-user',
			name: 'edit-user',
			component: EditUser
		},
		{
			path: '/detail-user',
			name: 'detail-user',
			component: DetailUser
		},
		{
			path: '/list-banner',
			name: 'list-banner',
			component: Banner
		},
		{
			path: '/add-banner',
			name: 'add-banner',
			component: AddBanner
		},
		{
			path: '/edit-banner',
			name: 'edit-banner',
			component: EditBanner
		},
		{
			path: '/detail-banner',
			name: 'detail-banner',
			component: DetailBanner
		},
		{
			path: '/list-article',
			name: 'list-article',
			component: Article
		},
		{
			path: '/add-article',
			name: 'add-article',
			component: AddArticle
		},
		{
			path: '/edit-article',
			name: 'edit-article',
			component: EditArticle
		},
		{
			path: '/detail-article',
			name: 'detail-article',
			component: DetailArticle
		},
		{
			path: '/list-notification',
			name: 'list-notification',
			component: Notification
		},
		{
			path: '/add-notification',
			name: 'add-notification',
			component: AddNotification
		},
		{
			path: '/edit-notification',
			name: 'edit-notification',
			component: EditNotification
		},
		{
			path: '/detail-notification',
			name: 'detail-notification',
			component: DetailNotification
		},
		{
			path: '/list-product',
			name: 'list-product',
			component: Product
		}
	]
})
