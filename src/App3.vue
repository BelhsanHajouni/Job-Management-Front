<script setup>
import { ref,onMounted } from "vue";

const name = ref("belhsa hajoun");
const status = ref("active");
const tasks = ref(['task one', 'task two', 'task three']);
const newTask = ref('');
const toggleStatus = () => {
  alert(status.value)
  if (status.value === 'active') {
    status.value = 'pending';
  } else if (status.value === 'pending') {
    status.value = 'inactive';
  } else {
    status.value = 'active';
  }
}
const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = '';
  } else {
    alert("veuillez insere text");
  }

};
const deletTask = (index) => {
  tasks.value.splice(index,1)
}

onMounted(async () => {
  try {
    const response =await fetch('https://jsonplaceholder.typicode.com/todos');
    const data =await response.json();    
    tasks.value =data.map((task)=>task.title);
  } catch (error) {
    console.log(error);
    
    alert("error");

  }
  
})

</script>
<template>
  <h1>hello {{ name }}</h1>
  <p v-if="status === 'active'">user is {{ status }}</p>
  <p v-else-if="status === 'inactive'">user is {{ status }}</p>
  <p v-else>user is null</p>
  <h3>tasks</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>
        {{ index }}"/"{{ task }}
      </span>
      <button @click="deletTask(index)">delete</button>
    </li>
  </ul>
  <a v-bind:href="link">click for google</a>
  <a :href="link">click for google</a>
  <button @click="toggleStatus">change status</button>

  <!-- form -->
  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" name="newTask" id="newTask" v-model="newTask">
    <button type="submit">submit</button>
  </form>


</template>