export default {
    namespace: true,
    state: [
        {id: 1, name: 'Купить хлеб', done: true},
        {id: 2, name: 'Купить молоко', done: false}
    ],
    actions: {
        save(context,item){
            console.log('todo saved!')
        }
    }
}