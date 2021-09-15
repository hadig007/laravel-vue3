<template>
    <div>
        <Header/>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
    components:{Header}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
html{
    font-family: 'Rubik', sans-serif;
}
body{
    margin: 0;
    padding: 0;
}
</style>