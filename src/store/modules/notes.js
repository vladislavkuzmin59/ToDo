export default {
    state:{
        notes:[
            {
                id: 1,
                title: "Начать изучение Typescript",
                isComplete: false,
                status: "Не выполнен"
            },
            
            ]
    },
    getters: {
    },
    mutations: {
        CREATE_NEW(state, listValue){
            state.notes.push({title: listValue, id: state.notes.length + 1, isComplete: false, status: "Не выполнен"});
        },
        CHANGE__STATUS(state, id){
            for(let i = 0; i < state.notes.length; i++){
                if(state.notes[i].id === id)
                {
                    state.notes[i].isComplete = true;
                    state.notes[i].status = "Выполнен";
                }
            }
        },
        DELETE(state, id) {
            state.notes.splice(id-1, 1);
        }
    },
    actions: {
    },
}