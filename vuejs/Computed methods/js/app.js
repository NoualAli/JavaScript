const vueConfig = {
    el: "#app",
    data: {
        title: "Vue computed methods",
        tasks: [
            {description: 'Should learn vue js basics', completed: false},
            {description: 'Should learn PHP basics', completed: true},
            {description: 'Should learn HTML5 basics', completed: true},
            {description: 'Should learn CSS3 basics', completed: true},
            {description: 'Should learn SQL basics', completed: true},
        ],
    },

    computed:{
        uncompletedTasks(){
            return this.tasks.filter(task => !task.completed)
        },
        
        completedTasks(){
            return this.tasks.filter(task => task.completed)
        }
    }
}

const app = new Vue(vueConfig)