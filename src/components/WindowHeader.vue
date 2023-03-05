<template>
  <div class="messengers__window-header">
    <img
    
      :src="avatars[src]"
      class="messengers__window-avatar"
      alt=""
    />
    <div class="messengers__window-info">
      <h2 class="messengers__window-name">{{name}}</h2>
      <p class="messengers__window-status">{{status}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WindowHeader",
  props: {
    src: String,
    name: String,
    status: String,
  },
data() {
    return {
        avatars: {
            alex: require('@src/assets/images/alex.png'),
            jane: require('@src/assets/images/jane.png')
        }
    }
}
};
</script>