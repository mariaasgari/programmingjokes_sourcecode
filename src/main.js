import { createApp } from "vue";
import App from "./App.vue";
import JokesForm from './components/JokesForm.vue';
import NewJokes from './components/NewJokes.vue';

const app = createApp(App);

app.component('jokes-form', JokesForm);
app.component('new-jokes', NewJokes);

app.mount("#app");
