<template>
  <div class="space-flex" :ref="spaceFlex">
      <h3>:מרחבים מוגנים בקרייה</h3>
      <div class="space">
          {{spaceAreas.Title}}
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'spaceAreas',
    data(){
        return{
            spaceAreas:[],
            spaceFlex: null
        }
    },
    methods:{
        async getData(){
          var res = null
            if(this.$isSharePointUrl){
                res = await axios.get(this.$url + "getByTitle('spaceAreas')/Items")
            }
            else{
                res = await axios.get(this.$url+ "spaceAreas")
            }
                this.spaceAreas = res.data.value[0]
                console.log(this.spaceAreas)
        }
    },
    beforeMount(){
        this.getData()
    },
    mounted(){
        this.spaceFlex = this.$refs.spaceFlex
    }
}
</script>

<style scoped>
.space-flex{
   background-color: #d9d9d97d;
   border-radius: 15px;
   width: 75%;
   height: 100%;
   display: flex;
   flex-direction: column;
   padding: 0 0.7em;
 }
.space{
    margin-top: 10px;
    font-size: 20px;
    color: white;
 }
h3{
    margin-top: 30px;
    color: white;
    font-family: var(--font-title);
}
</style>