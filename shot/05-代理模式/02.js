;<template>
  <div>{{ counter }}</div>
</template>

new Vue({
  data: {
    counter: 0
  },
  mounted() {
    let length = 1000
    while (--length > 0) {
      this.counter++
      this.ms = 123
    }
    this.sayHi()
    this.$nextTick(() => {})
    this.sy()
  }
})
