<template>
    <button
        :class="[ 'vc-button-component btn', `btn-${this.type}`, `btn-${this.btnSize}`, {} ]"
        :type="htmlType"
        :disabled="disabled"
        :style="style"
    >
        <span v-show="loading">{{ loadingText }}<span class="dotting"></span><slot name="loading"></slot></span>
        <span v-show="!loading && icon" :class="[ 'glyphicon', `glyphicon-${this.icon}`, `glyphicon-${this.icon}-${this.shape}` ]"></span>
        <span v-if="!loading"><slot>{{ label }}</slot></span>
    </button>
</template>

<style>
.vc-button-component > .glyphicon {
    top: 2px;
}
.dotting {
    display: inline-block; min-width: 2px; min-height: 2px;
    box-shadow: 2px 0 currentColor, 6px 0 currentColor, 10px 0 currentColor; 
    -webkit-animation: dot 1.5s infinite step-start both;
    animation: dot 1.5s infinite step-start both;
}
.dotting:before { content: '...'; } /* IE8 */
.dotting::before { content: ''; }
:root .dotting { margin-right: 8px; } /* IE9+, FF, CH, OP, SF */

@-webkit-keyframes dot {
    25% { box-shadow: none; }
    50% { box-shadow: 2px 0 currentColor; }
    75% { box-shadow: 2px 0 currentColor, 6px 0 currentColor; }
}
@keyframes dot {
    25% { box-shadow: none; }
    50% { box-shadow: 2px 0 currentColor; }
    75% { box-shadow: 2px 0 currentColor, 6px 0 currentColor; }
}
  
</style>

<script>
export default {
    name: 'vc-button',
    props: {
        label: String,
        style: Object,
        type: {
            type: String,
            default: 'default'
        },
        htmlType: {
            type: String,
            default: 'button'
        },
        // large: 32px | middle: 28px | small: 22px
        size: { 
            type: String,
            default: 'middle'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        icon: String,
        shape: {
            type: String,
            default: ''
        },
        loading: Boolean,
        loadingText: {
            type: String,
            default: 'loading'
        }
    },
    computed: {
        btnSize () {
            if (this.size === 'large') {
                return 'lg'
            } else if (this.size === 'small') {
                return 'sm'
            } else if (this.size === 'mini') {
                return 'xs'
            } else { // 'middle' as default
                return ''
            }
        }
    },
    data () {
        return {
        }
    }
}
</script>
