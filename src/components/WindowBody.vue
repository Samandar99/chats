<template>
  <main class="main">
    <ul>
      <TransitionGroup name="list" tag="ul">
        <li class="main__chat" v-for="(mess, index) in messages" :key="index">
          <div
            class="main__chat-body"
            :class="{
              send: mess.sendId == id,
              get: mess.sendId != id,
              photo: mess.photo.length > 0 && mess.body.length == 0,
              'photo-text': mess.photo.length > 0 && mess.body.length > 0,
            }"
          >
            <span class="main__chat-time">{{ mess.time }}</span>
            <div class="main__chat-text">
              <img
                :src="mess.photo"
                @click="getPhoto(mess.photo)"
                v-if="mess.photo.length > 0"
                alt=""
              />
              <p>{{ mess.body }}</p>
            </div>
          </div>
        </li>
      </TransitionGroup>
    </ul>
    <div class="window" v-if="window" @click="closeWindow">
      <img :src="windowURL" alt="" />
    </div>
  </main>
</template>

<script>
export default {
  name: "WindowBody",
  props: {
    id: Number,
    messages: Array,
  },
  data() {
    return {
      window: false,
      windowURL: "",
    };
  },
  methods: {
    getPhoto(url) {
      console.log(url);
      this.window = true;
      this.windowURL = url;
    },
    closeWindow() {
      this.window = false;
      this.windowURL = "";
    },
  },
};
</script>