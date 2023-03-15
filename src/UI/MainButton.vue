<template>
    <button :class="classes" @click="$emit('click')">
        <slot />
    </button>
</template>

<script>
    export default {
        props: {
            classes: {
                type: String,
                default: 'default-btn'
            },
        },
    }
</script>
<style lang="scss" scoped>
button{
    cursor: pointer;
    border: none;
    &.default-btn{
        width: 212px;
        height: 49px;
        background: linear-gradient( 45deg,#9796F0, #FBC7D4);
        color: white;
        border-radius: 5px;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
    }
}

</style>