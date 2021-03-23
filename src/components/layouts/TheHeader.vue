<template>
  <header>Novelty Evaluation</header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  padding: 20px;
  justify-content: center;
  border-bottom: solid;
  border-color: #725e88;
  text-align: center;
  size: 30px;
  margin-bottom: 5px;
  background: rgb(187, 165, 196);
  color: #725e88;
  font-size: 30px;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
