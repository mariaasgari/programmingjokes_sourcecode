<template>
  <section>
    <header>
      <h1>Programming Jokes</h1>
      <p>Disclaimer: this might not be funny if you don't code</p>
    </header>
    <div>
      <jokes-form></jokes-form>
      <new-jokes></new-jokes>
    </div>
  </section>
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 3rem auto;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #bba6a4;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

.block {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background: #ffff;
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

h1 {
  font-size: 2rem;
  color: #ffffff;
  margin: 0 0 1rem 0;
}

h2 {
  font-size: 2rem;
  color: #524949;
  margin: 0 0 1rem 0;
}

button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #928281;
  border-radius: 10px;
  background-color: #928281;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

button:hover,
button:active {
  background-color: #5c4545;
  border-color: #5c4545;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
