window.Event = new class {
    constructor() {
        this.vue = new Vue()
    }

    fire(event, data = null) {
        this.vue.$emit(event, data)
    }

    listen(event, callback) {
        this.vue.$on(event, callback)
    }
}

Vue.component('coupon', {
    template:
        `
        <input class="input" placeholder="Enter your coupon code" @blur="onCouponApplied"/>
    `,

    methods: {
        onCouponApplied() {
            Event.fire('applied', this.coupon)
        }
    }
})

const vueConfig = {
    el: "#app",
    data: {
        couponApplied: false
    },

    created(){
        Event.listen('applied', () => this.onCouponApplied())
    },

    methods: {
        onCouponApplied() {
            alert('Coupon was applied')
            this.couponApplied = true
        }
    }
}

const app = new Vue(vueConfig)