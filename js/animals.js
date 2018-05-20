var vue = new Vue({
    el: '#app',
    data: {
        animalId: undefined,
        singleAnimal: [],
        animals: []
    },

    computed: {
        simpleAnimal: function () {
            return this.singleAnimal.length != 0 ? this.singleAnimal[0] : { id: -1 };
        }
    },

    methods: {
        getAnimals: function () {
            axios.get('http://localhost:3000/animals')
                .then(function (response) {
                    response.data.forEach(element => vue.animals.push(element));
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        getAnimalById: function (id) {
            axios.get('http://localhost:3000/animals')
            .then(function (response) {
                    response.data.forEach(element =>vue.singleAnimals.push();/* code for adding data from response to the animal array */
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
});
