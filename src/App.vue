<template>
  <div class="messengers">
    <div class="messengers__window">
      <WindowHeader :src="'alex'" :name="'Александр'" :status="'Онлайн'" />
      <WindowBody :id="2" :messages="message" />
      <WindowFooter :id="2" @new-mess="newMess" />
    </div>
    <div class="messengers__window">
      <WindowHeader :src="'jane'" :name="'Евгений'" :status="'Онлайн'" />
      <WindowBody :id="1" :messages="message" />
      <WindowFooter :id="1" @new-mess="newMess" />
    </div>
  </div>
</template>

<script>
import WindowHeader from "./components/WindowHeader.vue";
import WindowBody from "./components/WindowBody.vue";
import WindowFooter from "./components/WindowFooter.vue";
export default {
  name: "App",
  components: {
    WindowHeader,
    WindowBody,
    WindowFooter,
  },
  data() {
    return {
      message: [],
    };
  },
  created() {
    const messStorage = localStorage.message
      ? JSON.parse(localStorage.message)
      : [];
    this.message = messStorage;
  },
  methods: {
    newMess(mess) {
      console.log(mess);
      this.message.push(mess);
      localStorage.message = JSON.stringify(this.message);
    },
  },
};
</script>