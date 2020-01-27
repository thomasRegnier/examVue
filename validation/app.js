let app = new Vue({
    el: '#validation',
    data: {

        email: '',
        password: '',
        msgEmail: '',
        msgPassword: ''
    },


    methods: {
        send(){

            let objUser = new FormData

            objUser.append('mail', this.email)
            objUser.append('password', this.password)

            fetch('http://127.0.0.1:8000/register.php'
            , {
                method: 'POST',
                headers: new Headers(),
                body: objUser
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    this.msgEmail = data.msgEmail
                    this.msgPassword = data.msgPassword
                })
                .catch((data) =>{
                    console.log('une erreur est survenue')
                })

        }
    }


})