import Vue from 'vue'
import vcButton from '../src'

new Vue({
	el: '#app',
	data () {
		return {
            bools: {
                'true': true,
                'false': false
            },
            iconStr: 'remove', // demo only

            label: 'use label, no slot',
            type: "warning",
            htmlType: 'button',
            loading: false,
            loadingText: 'loading中',
            size: 'middle',
            icon: 'remove',
            shape: '',
            disabled: false,
            style: {}
		}
	},
    methods: {
        handleClick (...args) {
            alert('click ' + args[0])
            console.log(args)
        },
        toggleIcon () {
            if (!this.icon) {
                this.icon = this.iconStr
            } else {
                this.icon = null
            }
        },
        toggleIconShape () {
            if (this.shape === 'circle') {
                this.shape = ''
            } else {
                this.shape = 'circle'
            }
        },
        setIcon () {
            this.icon = this.iconStr
        },
        toggleLoading () {
            this.loading = !this.loading
        },
        sl () {
            this.size = 'large' 
        },
        sm () {
            this.size = 'middle'
        },
        ss () {
            this.size = 'small'
        },
        disabledFn () {
            this.disabled = true
        }
    },
	components: {
        vcButton
	}
})
