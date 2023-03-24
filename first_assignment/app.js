const app = Vue.createApp({
  data() {
    return {
      name: '오승현',
      nickname: 'oshmos',
      age: 25,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vue.png/220px-Vue.png',
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandomNumber() {
      return Math.random();
    }
  }
});

app.mount("#introduction");