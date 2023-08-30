<template>
    <div class="block">
        <h2>Show me a joke</h2>
        <button @click="fetchData()">Show a joke</button>
        <div class="block" v-if="joke">{{ joke }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            joke: "",
        };
    },
    methods: {
        async fetchData() {
            fetch('https://jokes-a4706-default-rtdb.firebaseio.com/newjokes.json')
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((data) => {
                    const jokeIds = Object.keys(data);
                    if (jokeIds.length > 0) {
                        const randomId = jokeIds[Math.floor(Math.random() * jokeIds.length)];
                        this.joke = data[randomId].joke;
                    } else {
                        this.joke = "No jokes available.";
                    }

                });
        },
    },
};
</script>