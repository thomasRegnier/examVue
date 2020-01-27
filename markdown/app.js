let app = new Vue({
    el: '#editor',
    data: {
        input: '# Test mon markdown'
    },
    computed: {
        compiledMarkdown () {
            return marked(this.input)
        }
    },
})