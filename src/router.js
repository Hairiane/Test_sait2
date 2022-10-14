import {createRouter,createWebHistory} from "vue-router"
import {useUserStore} from "@/store/user";

const routes=[
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/TodoList.vue'),
        meta: {title: 'Список дел'}
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue'),
        meta: {title: 'Вход'}
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


export const router = createRouter({
    routes,
    history: createWebHistory(),
})

router.beforeEach(function (to,from,next){
    document.title = to.meta.title || 'TODO VUE APP'
    const userStore= useUserStore()

    console.log(to)
    if (!userStore.token && to.name !== 'login')
        next({name: 'login'})
    else
    next()
})


export default router