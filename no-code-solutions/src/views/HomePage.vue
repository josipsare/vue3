<template>
  <div>
    <h1>Welcome to No-Code Automations</h1>
    <p>Discover powerful tools to automate your business with ease.</p>
    <router-link to="/products">
      <button>View Products</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
h1 {
  color: #4caf50;
}
button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>
