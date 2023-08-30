<template>
  <section>
    <div class="block">
      <h2>Add a new joke</h2>
      <p v-show="showStart">You're welcome to add a new programming joke to the site</p>
      <button @click="showForm = true" v-show="!showForm && showStart">Add a joke</button>
      <form @submit.prevent="saveJoke" v-show="showForm">
        <div>
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" required>
        </div>
        <div>
          <label for="joke">Your Joke</label>
          <textarea type="text" id="joke" name="joke" v-model.trim="enteredJoke" required></textarea>
            </div>
            <button @click="saveJoke">Add joke</button>
          </form>
          <p class="block" v-show="showThankYou">Thank you for your geeky joke, you can now try and see if it will show!</p>
          <button @click="showForm = true; showThankYou = false;" v-show="showThankYou">Add a new joke</button>
        </div>
      </section>
  </template>
  
<script>
export default {
  data() {
    return {
      enteredName: '',
      enteredJoke: '',
      showStart: true,
      showForm: false,
      showThankYou: false,
    };
  },

  methods: {
    saveJoke() {
      if (this.enteredName === '' && this.enteredJoke === '') {
        return;
      }
      fetch('https://jokes-a4706-default-rtdb.firebaseio.com/newjokes.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.enteredName,
          joke: this.enteredJoke,
        }),
      });

      this.enteredName = '';
      this.enteredJoke = '';
      this.showStart = false;
      this.showForm = false;
      this.showThankYou = true;
    },
  },
};
</script>
  
<style scoped>
input[type='text'] {
  border-width: 0px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
}

textarea {
  border-width: 0px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  resize: vertical;
  height: 10rem;
  overflow-y: auto;

}
</style>