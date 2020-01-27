let app = new Vue({
    el: '#editor',
    data: {

        results: [],
        search: ''
    },

    mounted(){

        this.resultUser()

    },

    computed: {
        filteredUser(){
                return this.results.filter(el => el.username.toLowerCase().includes(this.search.toLowerCase()))
            }

    },

    methods: {
      resultUser(){
          fetch('https://jsonplaceholder.typicode.com/users', {
          })
              .then((res) => res.json())
              .then((data) => {
                  this.results = data
                  console.log(this.results)
              })
              .catch((data) =>{
                  alert('une erreur est survenue')
              })
      },

    },


})