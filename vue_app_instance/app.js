const app = Vue.createApp({
  // 정해져있는 프로퍼티의 한 종류
  // data: function() {
  //   return {};
  // }
  // data는 그 자체로 메서드이자 함수이다.
  // 다음은 메서드 속기법으로 정의한 data 프로퍼티이다.
  data() {
    return {
      // 정해지지 않은 프로퍼티
      courseGoalA: 'VueJS 이해하고 사용하기!',
      courseGoalB: 'VueJS로 프로젝트하기!',
      vueLink: 'https://vuejs.org',
      vhtmlUse: '<h3>v-html 활용을 위한 변수입니다.</h3>'
    }; // 항상 객체를 반환한다.
  },
  // methods는 메서드나 함수를 객체로 가질 수 있다.
  // 이 객체에서 정의하는 프로퍼티는 호출 가능한 함수여야만 한다.
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
    vhtmlUseFunc() {
      return '<h3>v-html 활용을 위한 함수입니다.</h3>';
    }
  }
});

app.mount('#user-goal');