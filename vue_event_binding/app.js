const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    // add() {
    //   this.counter++; // 클릭 리스너는 반환 값이 필요하지 않다.
    // },
    // reduce() {
    //   this.counter--;
    // }
    add(num) {
      this.counter = this.counter + num; 
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(e, lastName) {
      this.name = e.target.value + ' ' + lastName;
    },
    submitForm(e) {
      e.preventDefault(); // 순수 자바스크립트 방법으로 브라우저의 기본값(새로고침) 방지
      alert('submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
