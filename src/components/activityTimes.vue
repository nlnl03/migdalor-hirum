<template>
  <h3>שעות פעילות</h3>
  <div class="activity-container">
    <div class="activity-flex">
      <div class="activity" v-for="activity in activityTimes" :key="activity">
        
        <span class="activity-title">{{ activity.Title }}</span>
        <span style="margin-right: 10px;" v-if="activity.label.length==1">{{ activity.label[0] }}</span>
        <div v-if="activity.label.length>1">
            <div class="activity-group" v-for="item in activity.label" :key="item">
                <div class="sub-title">{{ item.subTitle }}</div>
                <span v-if="!Array.isArray(item.hours)">{{ item.hours }}</span>

                <div style="margin-top: 5px;" v-if="Array.isArray(item.hours)">
                  <div style="padding-bottom: 0.2em;" v-for="inner in item.hours" :key="inner">
                    {{ inner }}
                  </div>
                </div>
              
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
 name:'activityTimes',
 data(){
  return{
   activityTimes:[]
  }
 },
 methods:{
  async getActivityTimes(){
    var res = null
    if(this.$isSharePointUrl){
      res = await axios.get(this.$url + "getByTitle('activityTimes')/Items")
      this.activityTimes = res.data.value

       const promiseItems = await Promise.all(this.activityTimes.map((item)=>{
          return this.$asyncParse(item.label).then((inner)=>{
           item.label = inner
              return {item}
           })
        })) 
          console.log(promiseItems)
          
        // const item = await Promise.all(promiseItems.map((i)=>{
        //   return this.$asyncParse(i.hours).then((result)=>{
        //     i.hours = result
        //     return {i}
        //   })
        // }))
        // console.log(item)
    }
    else{
      res = await axios.get(this.$url + "activityTimes")
      this.activityTimes = res.data.value
    }
        console.log(this.activityTimes)
   }
 },
 beforeMount(){
  this.getActivityTimes()
 }
}
</script>

<style scoped>
 h3{
   font-family: var(--font-title);
    font-size: 40px;
        margin-bottom: 18px;


 }
 .activity-flex{
  width: 80%;
 }
 .activity-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }
.activity{
    /* display: flex; */
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 1em;
    padding: 0.5em 1.2em;
    border-radius: 15px;
    /* background-color: #d9d9d9bf; */
    background-color: #d9d9d97d;

}
.activity-title{
    font-size: 28px;
    font-family: var(--font-title);
    /* color: #262626e8; */
    color: white;
 
}
.activity-group{
  margin-bottom: 17px;
}
.activity-group:last-child{
  margin-bottom: 4px;
}
.activity-group:first-child{
  margin-top: 5px;
}
.sub-title{
  font-size: 20px;
  font-weight: 700;
}
</style>