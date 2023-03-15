<template>
    <div>
        <div class="list" v-for="item in list" :key="item.id">
                <div class="number__and__title">
                    <p class="number">№{{item.id}}</p>
                    <p class="title">{{item.title}}</p>
                </div>
                <div class="status__and__button">
                    <p class="status" :class="{purple: item.isComplete}">{{item.status}}</p>
                    <button @click="changeStatus(item.id)">Отметить как выполненный</button>
                </div>
                <div class="buttons">
                    <button class="change">Изменить</button>
                    <button class="delete" @click="deleteNote(item.id)">Удалить</button>
                </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
            }
        },
        props:{
            list:{
                type: Array,
            }
        },
        methods: {
            changeStatus(id){
                this.$store.commit("CHANGE__STATUS", id);
                console.log(this.array)
            },
            deleteNote(id) {
                this.$store.commit("DELETE", id)
            }
        },
            computed: {
            },
        }
</script>

<style lang="scss" scoped>
.list{
    width: 1723px;
    display: flex;
    padding: 20px 15px;
    align-items: center;
        .number__and__title{
            width: 309px;
            height: 21px;
            display: flex;
            align-items: center;
            margin-right: 330px;
                .number{
                    margin-right: 29px;
                    font-size: 17px;
                    line-height: 21px;
                    color: #9796F0;
                    font-family: 'Montserrat';
                }
                .title{
                    font-size: 17px;
                    line-height: 21px;
                }
        }
        .status__and__button{
            width: 579px;
            height: 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-right: 34px;
                .status{
                    width: 133px;
                    height: 21px;
                    text-align: center;
                    font-size: 17px;
                    line-height: 21px;
                    color: #969696;
                    &.purple{
                        color: #9796F0;
                    }
                }
                button{
                    width: 318px;
                    height: 48px;
                    background: #9796F0;
                    border-radius: 5px;
                    font-size: 16px;
                    line-height: 20px;
                    border: none;
                    color: white;
                }
        }
        .buttons{
            display: flex;
            width: 436px;
            height: 48px;
            justify-content: space-between;
            align-items: center;
            button{
                width: 193px;
                height: 100%;
                background: inherit;
                border: none;
                border-radius: 5px;
                color: rgba(24, 24, 24, .5);
                &:hover{
                    color: #9796F0;
                    cursor: pointer;
                }
            }
        }
}
</style>