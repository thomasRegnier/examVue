let app = new Vue({
    el: '#notes',
    data: {

        note:'',
        notes: [],
    },


    mounted(){
        let data = localStorage.getItem('toDoList')

        if (!data){

            return
        }

        this.notes = JSON.parse(localStorage.getItem('toDoList'))


        console.log(this.notes)
    },

    methods: {
        sendTask(){

            this.notes.push(this.note)
            localStorage.setItem('toDoList', JSON.stringify(this.notes))

            this.note =''
        },

        trashTask(elem){
            console.log(elem)
            this.notes.splice(elem, 1); // supprime 1 élément à la position pos
            localStorage.setItem('toDoList', JSON.stringify(this.notes))

        }
    }

})