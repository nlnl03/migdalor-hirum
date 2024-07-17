<template>
   <img class="israel-flag" src="@/assets/Flag_of_Israel.gif" alt="">

    <div class="night-and-day" :class="{ night: !isDay, days: isDay }">
       <div v-if="isDay" class="sun"></div>
       <div v-if="!isDay" class="moon"></div>
       
         <div class="clock"> 
           <!-- <div class="times-container"> </div> -->
            <!-- <span class=" week-day"> {{ day }}</span>
            <span class="day loaz "> {{ loaziDate }}</span>
            <span class="mid"> </span>
            <span class="day "> {{ hebrewDate }}</span>
            <span ref="span" :seconds = "seconds" class="day big-clock">{{ time }}</span> -->
         </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
 name:'ilFlag',
 data(){
  return{
    isDay: false,
  }
 },

 methods:{
    checkIfDay() {
      var currentHour = moment().format("HH");

      if (currentHour >= 6 && currentHour < 20) {
         this.isDay = true
      } 
      else {
         this.isDay = false
      }
   }
 },

 beforeMount(){
   this.checkIfDay()
 }
}
</script>

<style scoped>
.israel-flag{
   position: relative;
   border-radius: 10px;
   width: 100%;
   height: 100%;

}
 </style>