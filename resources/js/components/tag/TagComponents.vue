<template>
    <div class="pembungkus">
        <div class="kotak m-2" v-for="data in datas" :key="data.id">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{ data.tagName }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{ data.created_at}}</h6>
                    <a href="#" class="btn btn-info m-2">Detail</a>
                    <a href="#" class="btn btn-warning m-2">Edit</a>
                </div>
            </div>
        </div>
            <button @click="show=!show" class="btn btn-primary m-auto">Add New Tag</button>
            <add-tag @batal="show=!show" v-if="show" @simpan="shows" :loading="isAdding" :title="tagbtn" :disabled="isAdding" class="btn"></add-tag>
    </div>
</template>

<script>
import AddTag from './AddTag.vue';
export default {
  components: { AddTag },
    data(){
        return{
            show:false,
            datas:{
                tagName:''
            },
            isLoading:true,
            isAdding:false
        }
    },
    computed:{
        tagbtn(){
            return this.isAdding ? "adding..." : "Add Tag"
        }
    },
    async created(){
        console.log('created')
        await this.callApi('get','/app/get_tags')
        .then((res) =>
           { this.datas = res.data,
            console.log(res.data)}
        )
         console.log('created selesai')
    },
    methods:{
        async shows(data){
            // console.log('berhasil tagName datas dengan nilai ->',this.datas.tagName)
            // console.log('datas -> ',this.datas)
            await this.callApi('post','/app/create_tag',{tagName:data})
            // this.datas.tagName.push(data)
            // console.log(res)
            this.show = false
        }
    }
}
</script>

<style scoped>
.pembungkus{
    margin: 20px;
}
.kotak{
    display: inline-block;
}
.card{
    max-width: 20rem;
}
.card-body{
    display: flex;
    flex-direction: inherit;
    justify-content: center;
}
.btn{
    display: block;
    margin: 40px auto 20px auto;
}
</style>