<template>
   <input type="text" @input="$emit('input', $event.target.value)">
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
input{
    width: 259px;
    margin-bottom: 39px;
    height: 59px;
    padding-left: 20px;
    border-radius: 6px;
    border: solid 1px #CECECE;
    color: #272727;
    outline: none;
        &::placeholder{
            color: #D0D0D0;
        }
    }
</style>