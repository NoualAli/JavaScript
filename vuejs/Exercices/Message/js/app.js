Vue.component('message', {
    props: ['title', 'body'],
    template: `
    <article class="message" v-show="isVisible">
    <div class="message-header">
      <p>{{ title }}</p>
      <button class="delete" aria-label="delete" @click="isVisible = false"></button>
    </div>
    <div class="message-body">
      {{ body }}
    </div>
  </article>
    `,

    data(){
        return {
            isVisible: true
        }
    }
})

const vueConfig = {
    el: '#app',

}

const app = new Vue(vueConfig)