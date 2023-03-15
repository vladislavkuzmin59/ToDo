<template>
    <div class="container">
        <div class="main">
            <router-link to="create">
            <MainButton>
                Добавить новую заметку
            </MainButton>
            </router-link>
            <div class="list">
                <h2>Список ваших задач</h2>
                <TheNotes :list="getList"/>
            </div>

        </div>
    </div>
</template>

<script>
import MainButton from '@/UI/MainButton.vue';
import TheNotes from './TheNotes.vue';
    export default {
    components: { MainButton, TheNotes },
    computed: {
        getList() {
            return this.$store.state.notes.notes
            }
    },
}
</script>

<style lang="scss" scoped>
    .container{
        width: 1723px;
        height: fit-content;
        margin: 0 auto;
        margin-top: 108px;
    }
    .list{
        width: 100%;
        margin-top: 87px;
        h2{
            margin-bottom: 41px;
            font-weight: 600;
            font-size: 25px;
            line-height: 30px;
        }
    }
</style>