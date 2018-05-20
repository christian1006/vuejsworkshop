var vue = new Vue({
    el: '#app',
    data: {
        name: 'Rafal',
        lastname: 'Czabaj',
        myNumber: numbers.nextNumber(),
        isEditable: false,
        titleContainer: {
            h1title: 'h1 title',
        },
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },

    computed: {

        fullname: function () {
            return 'Hi ' + this.name + ' ' + this.lastname;
        },
        randomNumber: function () {
            return Math.random();
        },
        onetimeComputedIsValid: function () {
            let isValid = validator.isValid(this.myNumber);
            console.log('myNumber is', isValid ? 'greater' : 'smaller', 'than 0.5');
            return isValid;
        },

        onceCurrentDate: function () {
            return Date.now();
        }
    },

    methods: {
        currentDate: function () {
            return Date.now();
        },

        // getAnswer: function () {
        //     if (this.question.indexOf('?') === -1) {
        //         this.answer = 'Questions usually contain a question mark. ;-)'
        //         return
        //     }
        //     this.answer = 'Thinking...'
        //     var vm = this
        //     axios.get('https://yesno.wtf/api')
        //         .then(function (response) {
        //             vm.answer = _.capitalize(response.data.answer)
        //         })
        //         .catch(function (error) {
        //             vm.answer = 'Error! Could not reach the API. ' + error
        //         })
        // }
    },

    // watch: {
    //     question: function (newQuestion, oldQuestion) {
    //         this.answer = 'Waiting for you to stop typing...'
    //         this.debouncedGetAnswer()
    //     }
    // },

    // created: function () {
    //     this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    // },

});