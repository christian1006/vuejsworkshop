let numbers = {

    data: [1,2,3],

    nextNumber: function() {
        return Math.random();
    },

    getNumbers: function() {
        return this.data;
    },

    addNumber: function(number) {
        this.data.push(number);
    } 

}