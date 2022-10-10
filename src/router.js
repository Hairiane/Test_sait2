import {createRouter,createWebHistory} from "vue-router"

const routes=[
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: {title: 'Список дел'}
    },
    {
        path: '/:pathMath(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue'),
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