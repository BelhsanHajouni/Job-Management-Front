<script>
export default {
  data() {
    return {
      name: 'belhsan hajouni',
      status: "azaz",
      tasks: ['task one', 'task two', 'task three'],
      link: "https://www.google.com"
    }
  },
  methods: {
    toggleStatus() {
      alert(this.status)
      if (this.status === 'active') {
        this.status = 'inactive';
      } else if (this.status === 'inactive') {
        this.status = 'active';
      }else {
        this.status = 'active';
      }
    }
  }
}
</script>
<template>
  <h1>hello {{ name }}</h1>
  <p v-if="status === 'active'">user is active</p>
  <p v-else-if="status === 'inactive'">user is inactive</p>
  <p v-else>user is null</p>
  <h3>tasks</h3>
  <ul>
    <li v-for="bel in tasks" :key="bel">{{ task }}</li>
  </ul>
  <a v-bind:href="link">click for google</a>
  <a :href="link">click for google</a>
  <button @click="toggleStatus">change status</button>



</template>