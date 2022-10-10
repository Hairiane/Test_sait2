import {createRouter,createWebHistory} from "vue-router"

const routes=[
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/TodoList.vue'),
        meta: {title: 'Список дел'}
    },
    {
        path: '/:pathMath(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue'),
    },
    {
        path: '/add',
        name: 'Добавление',
        component: () => import('@/views/add.vue'),
        meta: {title: 'Добавление'},
    },
    {
        path: '/del',
        name: 'Удаление',
        component: () => import('@/views/del.vue'),
        meta: {title: 'Удаление'}
    },
]


const router = createRouter({
    routes,
    history: createWebHistory(),
})

router.beforeEach(function (to,from,next){
    document.title = to.meta.title || 'TODO VUE APP'
    next()
})


export default router