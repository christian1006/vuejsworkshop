var vue = new Vue({
    el: '#app',
    data: {
        name: 'Rafal',
        lastname: 'Czabaj',
        myNumber: numbers.nextNumber(),
        isEditable: false,
        titleContainer: {
            h1title: 'h1 title',
        }
    },

    computed: {
        
        fullname: function() {
            return 'Hi ' + this.name + ' ' + this.lastname;
        },
        randomNumber: function() {
            return Math.random();
        },
        onetimeComputedIsValid: function() {
            let isValid = validator.isValid(this.myNumber);
            console.log('myNumber is', isValid ? 'greater' : 'smaller', 'than 0.5');
            return isValid;
        },

        onceCurrentDate: function() {
            return Date.now();
        }
    },

    methods: {
        currentDate: function() {
            return Date.now();
        }
    },
});