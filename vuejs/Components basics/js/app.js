Vue.component('task-list', {
    template: `
        <ul class="list-card">
            <task v-for="task in tasks" v-text="task.description"></task>
        </ul>
    `,
    data() {
        return {
            tasks: [
                { description: 'Should learn vue js basics', completed: false },
                { description: 'Should learn PHP basics', completed: true },
                { description: 'Should learn HTML5 basics', completed: true },
                { description: 'Should learn CSS3 basics', completed: true },
                { description: 'Should learn SQL basics', completed: true },
            ],
        }
    }
})
Vue.component('task', {
    template: '<li class="list-card-elt"><slot></slot></li>'
})
const vueConfig = {
    el: "#app",
}

const app = new Vue(vueConfig)