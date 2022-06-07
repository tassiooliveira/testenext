<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/addcontato">Criar Contato</router-link>
  </nav>
  <router-view/>
</template>


<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-size: 14px;
  font-family: 'Poppins', sans-serif;
}

html{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #808080;
}
nav{
  width: 100vw;
  height: 6rem;
  background-color: #fff;
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
nav> a {
  font-size: 1.5rem;
  text-decoration: none;
  color: #808080;
}
.home{
  display: flex;
  align-items: center;
  justify-content: center;
}
.about{
   display: flex;
  align-items: center;
  justify-content: center;
}

</style>
