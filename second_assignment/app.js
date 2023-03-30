const app = Vue.createApp({
  data() {
    return {
      user: '',
      input: '',
      username: '',
    };
  },
  methods: {
    alert() {
      alert('alert!');
    },
    register(e) {
      this.user = e.target.value;
    },
    inputUsername(e) {
      this.input = e.target.value;
    },
    confirmUsername() {
      this.username = this.input;
    }
  }
});

app.mount("#assignment");