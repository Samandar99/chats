<template>
  <footer class="footer">
    <textarea
      class="footer__edit"
      placeholder="Написать сообщение..."
      rows="1"
      v-model="message"
    ></textarea>
    <img
      v-if="message.length == 0"
      class="footer__btn"
      src="@src/assets/images/photo.svg"
      alt=""
      @click="window = true"
    />
    <img
      v-else
      class="footer__btn"
      @click="sendMess"
      src="@src/assets/images/send.svg"
      alt=""
    />
    <div class="window" v-if="window" @click="window = false">
      <div class="window-body" @click.stop.prevent>
        <h2 class="window__title">Отправить картинку</h2>
        <div class="window__form">
          <label>
            <span>URL</span>
            <input v-model="photo" autofocus />
          </label>
          <label>
            <span>Комментарий</span>
            <textarea v-model="comment"></textarea>
          </label>
        </div>
        <div class="window__btns">
          <button class="btn red" @click="window = false">Отмена</button>
          <button v-if="!this.edit" class="btn purpure" @click="sendMessAndPhoto">
            ОТПРАВИТЬ
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "WindowVue",
  props: {
    id: Number,
  },
  data() {
    return {
      message: "",
      comment: "",
      photo: "",
      window: false,
    };
  },
  methods: {
    sendMess() {
      if (this.message.length > 0) {
        const mess = {};
        mess.body = this.message;
        mess.photo = this.photo;
        mess.sendId = this.id;
        mess.time = `${new Date().getHours()}:${new Date().getMinutes()}`;
        this.$emit("new-mess", mess);
        this.message = this.photo = "";
      }
    },
    sendMessAndPhoto() {
      if (this.photo.length > 0) {
        const mess = {};
        mess.body = this.comment;
        mess.photo = this.photo;
        mess.sendId = this.id;
        mess.time = `${new Date().getHours()}:${new Date().getMinutes()}`;
        this.$emit("new-mess", mess);
        this.comment = this.photo = "";
        this.window = false
      }
    },
  },
};
</script>