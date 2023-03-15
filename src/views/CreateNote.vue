<template>
    <div class="container">
        <div class="create__content">
            <router-link to="/" >
            <button class="back">Вернуться назад</button>
            </router-link>
            <div class="addNew">
                <h2> Добавление новой заметки</h2>
                <div class="inputs">
                    <BaseInput v-model="inputValue" placeholder="Введите имя заметки"/>
                    <BaseInput placeholder="Введите 1 задачу"/>
                </div>
                    <MainButton @click="getNewNote(inputValue)">
                        Создать заметку
                    </MainButton>
            </div>
        </div>
    </div>
</template>

<script>
import BaseInput from '@/UI/BaseInput.vue';
import MainButton from '@/UI/MainButton.vue';


    export default {
    data() {
        return {
            inputValue: "",
        };
    },
    methods: {
        getNewNote(listValue) {
            this.$store.commit("CREATE_NEW", listValue);
            this.$router.push("/");
        }
    },
    components: { MainButton, BaseInput }
}
</script>

<style lang="scss" scoped>
.container{
    margin-top: 138px;
    margin-left: 98px;

    .create__content{ 
        width: 373px;
        height: 563px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
            .back{
                width: 161px;
                height: 49px;
                color: white;
                background: #5655E2;
                border-radius: 5px;
                font-size: 12px;
                line-height: 15px;
                border: none;
            }   .addNew{
                width: 100%;
                height: 427px;
                display: flex;
                flex-direction: column;
                h2{
                    font-size: 25px;
                    line-height: 30px;
                    color: #272727;
                    margin-bottom: 56px;
                }
                .inputs{
                    width: 259px;
                    height: 156px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin-bottom: 39px;
                    input{
                        width: 100%;
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
                }
                button{
                    width: 212px;
                    height: 49px;
                    background: linear-gradient( 45deg,#9796F0, #FBC7D4);
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 15px;
                }
            }
        
    }
}
</style>