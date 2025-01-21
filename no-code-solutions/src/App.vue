<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/cart">Cart</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
nav {
  display: flex;
  gap: 15px;
  background-color: #aa99ff;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  color: #2e2e2e;
}

nav a.router-link-active {
  font-weight: bold;
  color: #ffffff;
}
nav a:hover {
  text-decoration: underline;
}
body{
  background-color: #14121b;
}
p{
  color: white;
}
div{
  color: white;
}
</style>
