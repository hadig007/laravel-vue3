<template>
    <div class="nav">
        <h2><router-link to="/">BlogPost</router-link></h2>
        <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/tags">Tags</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    created(){

    }
}
</script>

<style scoped>
.nav{
    background-color: purple;
    padding: 0.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
h2 a{
    color: white;
    text-decoration: none;
}
ul{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
    margin: auto 0;
}
ul li{
    list-style: none;
    margin: 0 10px;
}
ul li a{
    text-decoration: none;
    color: white;
    padding: 5px 10px;
    font-weight: bold;
}
a:hover,
a:active,
a.router-link-active{
    font-weight: bold;
    text-decoration: none;
    border-bottom: solid 3px rgb(255, 255, 255);
    background-color: rgba(255, 225, 255, 0.397);
    padding: 5px 10px;
}

</style>