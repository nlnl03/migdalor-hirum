<template>
  <div class="notices-flex">
    <div class="noticeBoard">
      <h3 class="noticeBoard-title">לוח מודעות</h3>
      <p>הודעות מיקוד מסומנות <span class="red-message">באדום </span></p>

      <div class="messages-container">
        <div class="messages">
          <div class="notice-item" v-for="message in messages" :key="message">
            <div
              v-if="message.isCritical"
              class="not-urgancy bi bi-exclamation hid"
            ></div>
            <div
              v-if="!message.isCritical"
              class="not-urgancy bi bi-exclamation not-hid"
            ></div>
            <span class="notice">{{ message.Title }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "messagesComp",
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    async getMessages() {
      var res = null;
      if (this.$isSharePointUrl) {
        res = await axios.get(this.$url + "getByTitle('messages')/Items");
      } else {
        res = await axios.get(this.$url + "messages");
      }

      this.messages = res.data.value;

      console.log(this.messages);
    },
  },

  beforeMount() {
    this.getMessages();
  },
};
</script>

<style scoped>
.notices-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.messages-container {
  height: 480px;
  border-radius: 15px;
  /* background: rgb(190 190 190 / 43%); */
  /* background-color: rgb(190 190 190 / 94%); */
  /* background-color: #d9d9d998;
    box-shadow: 0px 0px 7px rgb(0 0 0); */

  overflow-y: hidden;
  position: relative;
  width: 100%;
  background-color: #ebebeba1;
  box-shadow: 0px 0px 8px rgb(51 51 51);

  /* border: 3px solid #848588; */
}
.messages {
  overflow-y: hidden;
  position: absolute;
  top: 0;
  padding: 5em;
  animation: scrollMessages 25s linear infinite;
}
@keyframes scrollMessages {
  0% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(-100%);
  }
}
.noticeBoard {
  width: 70%;
}
.noticeBoard-title {
  font-family: var(--font-title);
  font-size: 40px;
}
.noticeBoard-title,
p {
  color: white;
}
.flex-notices {
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: flex-start;
  width: 100%;
  height: auto;
  flex-direction: column;
}
.notice {
  padding: 0 15px;
  display: block;
  font-weight: 700;
  font-size: 18px;
}

.notice-item {
  position: relative;
  text-align: right;
  margin-bottom: 25px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  background-color: #f3f3f3;
  min-height: 60px;
  padding-top: 10px;
  padding-bottom: 15px;
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
}
.notice-item::after {
  /* content: 'חשוב'; */
  /* display: none; */
  position: absolute;
}

.not-urgancy {
  display: flex;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  align-items: center;
  justify-content: center;
  height: calc(100% + 2px) !important;
  /* position: absolute; */
  /* width:30px; */
  font-size: 35px;

  /* height: 30px; */
  position: absolute;
  height: 100%;
  border-radius: 0px 20px 20px 0px;
  transform: translate(100%, 2.5px);
}
.hid {
  color: var(--bg-color);
  background-color: var(--bg-color);
}
.not-hid {
  color: white;
  background-color: var(--bg-secondary-color);
}

.red-message {
  color: red;
  font-family: var(--font-title);
}
</style>
