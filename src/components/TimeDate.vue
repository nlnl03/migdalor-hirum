<template>
  <div class="time-date">
    <span ref="span" :seconds="seconds" class="day big-clock">{{ time }}</span>
    <div class="date-day">
      <div>,יום {{ day }}</div>
      <div style="margin-right: 10px">{{ loaziDate }}</div>
    </div>
    <!-- <span class=" week-day">  </span><span class="date">  </span> -->
  </div>
</template>

<script>
// import {Engine} from "tsparticles-engine"
// import {loadStarsPreset} from "tsparticles-preset-stars"
import Hebcal from "hebcal";
import moment from "moment";
export default {
  name: "TimeDate",
  props: ["shigra"],
  data() {
    return {
      isDay: false,
      loaziDate: "",
      hebrewDate: "",
      day: "dayInWeek",
      days: ["שבת", "שישי", "חמישי", "רביעי", "שלישי", "שני", "ראשון"],
      time: "",
      seconds: "",
      clearInt: "",
      clearSunMoonInt: "",
      options: {
        background: {
          color: "#070B34",
        },
        fullScreen: {
          enable: false,
        },
        preset: "stars",
      },
    };
  },

  methods: {
    calCLoaziDate() {
      var date = new Date();
      var dd = String(date.getDate()).padStart(2, "0");
      var mm = String(date.getMonth() + 1).padStart(2, "0");
      var yyy = date.getFullYear();
      this.loaziDate = dd + "." + mm + "." + yyy;
    },
    getHebrewDate() {
      var unparsed = new Hebcal.HDate().toString("h");
      var arr = unparsed.split(" ");
      this.hebrewDate = `${arr[0]} ב${arr[1]} ${arr[2].slice(1)} `;
    },
    showDate() {
      var date = new Date();
      var day = 6 - date.getDay();
      this.day = this.days[day];
    },
    //  async particlesInit(engine){
    //   await loadStarsPreset(engine)

    // },
    updateTime() {
      var date = new Date();
      var h = date.getHours(); // 0 - 23
      var m = date.getMinutes(); // 0 - 59

      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;

      this.time = h + ":" + m;
    },
    updateSeconds() {
      var date = new Date();
      var s = date.getSeconds(); // 0 - 59
      s = s < 10 ? "0" + s : s;
      this.seconds = ":" + s;
    },
    doAll() {
      this.showDate();
      this.updateSeconds();
      this.updateTime();
    },

    checkIfDay() {
      var currentHour = moment().format("HH");

      if (currentHour >= 6 && currentHour < 20) {
        this.isDay = true;
      } else {
        this.isDay = false;
      }
    },
  },

  beforeMount() {
    this.checkIfDay();
  },

  mounted() {
    this.calCLoaziDate();
    this.getHebrewDate();
    this.doAll();

    this.clearInt = setInterval(() => {
      this.doAll();
    }, 1000);

    this.clearSunMoonInt = setInterval(() => {
      this.checkIfDay();
    }, 3600000);
  },

  unmounted() {
    clearInterval(this.clearInt);
  },
};
</script>

<style scoped>
.sun {
  width: 80px;
  height: 80px;
  position: absolute;
  top: 8%;
  right: 15%;
  background-color: #ffde00;
  border-radius: 50%;
}
.moon {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 8%;
  right: 15%;
  /* background-color: white; */
  border-radius: 50%;
}

@keyframes sunrise {
  0% {
    box-shadow: none;
  }
}

@keyframes rays {
  0% {
    box-shadow: 0 0 0 0 #ffde0080, 0 0 0 20px #ffde0080, 0 0 0 40px #ffde0040,
      0 0 0 60px #ffde0020, 0 0 0 80px #ffde0010, 0 0 40px 100px #ffde0010;
  }
  100% {
    box-shadow: 0 0 0 20px #ffde0080, 0 0 0 40px #ffde0040, 0 0 0 60px #ffde0020,
      0 0 0 80px #ffde0010, 0 0 0 100px #ffde0000, 0 0 40px 100px #ffde0010;
  }
}
.date-day {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  font-size: 17px;
  color: gray;
  font-weight: 600;
}
.logo-container {
  width: 80%;
  height: 50%;
  position: relative;
}
.logo-container span {
  z-index: 1;
  position: absolute;
  top: 60%;
  font-family: var(--font-title);
  font-size: 24px;
  /* color: green; */
  left: 50%;
  transform: translate(-50%, -50%);
}
.logo-container i {
  position: absolute;
  top: 60%;
  font-size: 120px;
  /* color: green; */
  left: 50%;
  transform: translate(-50%, -50%);
}
.gdud-pic {
  position: absolute;
  top: 55%;
  height: 70%;
  width: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-title);
  font-size: 40px;
}
.shigra-circle {
  position: absolute;
  top: 70%;
  left: 50%;
  border-radius: 50%;
  font-size: 30px;
  color: white;
  background-color: green;
  padding: 0.8em 0.8em;
  transform: translate(-50%, -50%);
}
.week-day {
  font-size: 27px;
  font-weight: 700;
  color: #262626e8;
}
.mid {
  /* border-right: 1px solid white; */
  border-left: 1px solid white;
  /* padding: 0px 10px ; */
  /* /* margin-left: 10px; */
  color: black;
  margin-right: 10px;
}
.times-container {
  position: relative;
  /* padding-top: 10px; */
  font-size: 17px !important;
  display: flex;
  width: 100%;

  margin: 0 auto;
  align-items: flex-start;

  justify-content: center;
  flex-direction: row;
}
.day {
  color: black;
}
.clock span {
  width: 60%;
  text-align: center;
}

.israel-flag {
  position: relative;
  border-radius: 30px;
  width: 100%;
  height: 100%;
}

.big-clock {
  /* position: absolute; */
  /* top: 73%; */
  /* left: 52%;  */
  /* transform: translate(-50%,-50%); */
  display: inline-block;
  /* margin-left:0.5vw; */
  color: black;
  font-weight: 700;
  font-family: var(--font-title);
  font-size: 45px;
}
.big-clock::after {
  content: attr(seconds);
  color: black;
  top: 35%;
  box-sizing: border-box;
  /* font-family: var(--font-clock); */
  /* font-size:35px; */
}
.particles-container {
  height: 100%;
}
.particles-container div {
  height: 100%;
}
canvas {
  border-radius: 20px !important;
}
.night-icon {
  color: rgba(255, 255, 255, 1);

  position: absolute;
  left: 10%;
  font-size: 100px;
}
/* .night{
    background-image:url(../../../assets/nightSky.jpg);

}
.days{
      background-image:url(../../../assets/daySky.jpg);

} */
.night-and-day {
  position: relative;
  border-radius: 30px;
  background-size: 100% 100%;
  /* background-origin: border-box; */
  background-position: 0% 0% !important;
  background-repeat: no-repeat;
  width: 30%;
  height: 100%;
}
.semel-and-shigra-container {
  height: 100%;
  width: 65%;
  border-radius: 30px;
  /* background-color: white; */
}
.shigra-container {
  position: relative;
  width: 80%;
  height: 50%;
  border-bottom: 1px solid grey;
}
.time-date {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* left: 20%; */
  color: white;
}
</style>
