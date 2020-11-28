<template>

  <div class="hello">
    <table>
      <td>
        <tr>
       <div class="todolist">
         <div  v-bind:class="{'is-finished':task.isFinished}">{{task.title}}</div>
         <div class="dugme">
        <button @click="finishTask(index)">Zavrseno</button>
        <button @click="editTask(index)">Izmeni</button>
        <button @click="deleteTask(index)">Izbrisi</button>
         </div>
    </div>
    </tr>
    </td>
    
    </table>
  </div>
</template>

<script>
export default {
  name: 'todo',
  methods:{
    finishTask(index){
     this.$emit('finish-task', index)
    },
    deleteTask(index){
        this.$emit('delete-task', index)
    },
    editTask(index){
      this.$emit('edit-task',index)
    },
  },
  props: {
    task: Object,
    index:Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.is-finished {
    text-decoration: line-through;
  /*  color: red;*/
    opacity: 25%;
}
.todolist{
  display: flex;
  width: 100%;
  justify-content: flex-end;
  font-weight: bold;
  
}
.todolist button{
  justify-content: flex-end;
  margin-left: 5px;
  padding-left: 8px;
  color:wheat;
  background-color: darkslategrey;
}
.dugme button {
  color: white;
  padding-left: 20px;
  margin-left: 10px;
  background-color:  #2c3e50;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 8px;
}

</style>
