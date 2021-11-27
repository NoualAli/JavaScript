const vueConfig = {
    el: "#app",
    data: {
        pageTitle: "Learning Vue js",
        names: ['Ali', 'Sidali', 'Younes', 'Rayan', 'Azize'],
        name: '',
        editableName: ""
    },

    methods:{
        storeName(e){
            e.preventDefault()
            this.names.push(this.name)
            this.name = ''
        },

        deleteName(e){
            e.preventDefault()
            const name = e.target.textContent
            const id = this.names.indexOf(name)
            if(id != -1){
                if(confirm(`You are about to delete ${name}`)){
                    this.names.splice(id, 1)
                }
            }
        }
    }
}

const app = new Vue(vueConfig)