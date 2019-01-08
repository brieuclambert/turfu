import Vue from 'vue'
import Router from 'vue-router'
import Report from '../components/Report.vue'


Vue.use(Router)

export default new Router({
    routes: [
		{
            path: '/',
            name: 'Report',
            component: Report,
			meta: {
				title: 'Report'
			}
        }
    ],
    scrollBehavior () {
        return {x: 0, y: 0}
    }
})
