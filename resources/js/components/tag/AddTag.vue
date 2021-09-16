<template>
    <div class="hide">
        <div class="form-group" v-if="show">
        <label for="tagName">TagName</label>
        <input type="text" class="form-control" v-model="newTag" placeholder="add new tag name...">
        <button @click="$emit('batal')" class="btn btn-sm btn-warning">Batal</button>
        <button @click="$emit('simpan', newTag)" class="btn btn-sm btn-primary">{{ title }}</button>
    </div>
    </div>
</template>

<script>
export default {
    props:['newTag','title'],
    data(){
        return{
            show:true
        }
    }
    
}
</script>

<style scoped>
.form-group{
    width: 20rem;
    padding: 20px;
    box-shadow: 1px 1px 6px 3px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    display: block;
    margin: 0 auto;
}
.btn{
    margin: 5px 10px;
}

</style>
