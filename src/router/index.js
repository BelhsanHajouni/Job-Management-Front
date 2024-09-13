import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Jobsview from "@/views/jobsview.vue";
import Jobview from "@/views/jobview.vue";
import notfoundview from "@/views/notfoundview.vue";
import AddjobView from "@/views/addjobView.vue";
import EditJobView from "@/views/editJobView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/jobs',
            name: 'jobsview',
            component: Jobsview
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: Jobview
        },
        {
            path: '/add-job',
            name: 'Addjob',
            component: AddjobView
        },
        {
            path: '/jobs/edit/:id',
            name: 'edit-job',
            component: EditJobView
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: notfoundview
        }
    ]
});
export default router;