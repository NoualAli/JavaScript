Vue.component('tabs', {
  template:
    `
    <div>
      <div class="tabs">
        <ul>
          <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
            <a :href="tab.slug" @click="selectTab(tab)">{{ tab.name }}</a>
          </li>
        </ul>
      </div>
      <div class="tabs-detail">
        <slot></slot>
      </div>
    </div>
    `,

  data() {
    return {
      tabs: []
    }
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name
      });
    }
  },

  created() {
    this.tabs = this.$children
  }
})

Vue.component('tab', {
  props: {
    name: { required: true },
    selected: { default: false }
  },

  data() {
    return {
      isActive: true
    }
  },

  computed: {
    slug() {
      return `#${this.name.toLowerCase().replace(/ /g, '-')}`
    }
  },

  mounted() {
    this.isActive = this.selected
  },
  template:
    ` 
    <div v-show="isActive"><slot></slot></div>
  `
})
const vueConfig = {
  el: '#app',
}
const app = new Vue(vueConfig)