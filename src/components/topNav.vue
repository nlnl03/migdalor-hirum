<template>
  <div class="header">
    <div class="time-date">
      <TimeDate />
    </div>
    <img src="@/assets/hoshen.png" class="hoshen-img" />

    <div class="Title-container">
      <div class="swiper">
        <span class="title"
          >מגדל<img class="migalor-img" src="@/assets/migdalor.png" alt="" />ר
          צמרת -
        </span>
      </div>
    </div>
    <img class="zameret-img" src="@/assets/383zameret.png" />
  </div>
</template>

<script>
// import TimeDate from './TimeDate.vue'
import TimeDate from "@/components/TimeDate.vue";

export default {
  name: "toNav",
  components: {
    TimeDate,
  },
};
</script>

<style scoped>
.main-nav {
  display: flex;
  flex-direction: row-reverse;
  /* background-color: white; */
  background-color: #ffffffcc;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.4);
}
.header {
  direction: rtl;
  color: black;
  position: relative;
  display: flex;
  height: 110px !important;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  background-color: #ffffffcc;
  /* background-color: white; */
}

.zameret-img,
.hoshen-img {
  width: 55px;
  height: 70px;
  margin-left: 50px;
}
.migalor-img {
  margin-bottom: 16px;
  margin-left: 2px;
  margin-right: 2px;
}
.hoshen-img {
  width: 70px;
  margin-right: 50px;
  margin-left: 0;
}
.Title-container {
  height: 100%;
  position: relative;
}
.Title-container span {
  text-align: right;
  position: relative;
  font-size: 60px;
  font-family: var(--font-title);
  font-weight: var(--font-bold);
}
.Title-container span::after {
  content: "מלחמת חרבות הברזל";
  margin-right: 15px;
  font-family: var(--font-primary);
  margin-top: 10px;
  justify-content: center;
  font-size: 30px;
  color: var(--font-secondary-color);
}

.swiper {
  display: flex;
  justify-content: space-around;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 30px;
}
.time-date {
  position: absolute;
  top: 0;
  right: 90px;
  display: flex;
  justify-content: center;
  height: 100%;
}
</style>
