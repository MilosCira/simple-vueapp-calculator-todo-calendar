<template>
  <div class="pozadina">
  <div id="app">
    <h1>TO DO LISTA :</h1>
    <table>
      <tr>
        <td>
          <div class="wrapper1">
       <label>Novi zadatak</label>
        <input type="text" v-model="titleValue">
        <div class="dugme">
        <button v-if="isEditing" @click="confirmEdit">Izmeni zadatak</button>
        <button v-else @click="addNew">Dodaj zadatak </button>
        </div>
          </div>
    <div v-for="(task,index) in tasks" :key="index" class="wrapper">
    <todo :task="task" :index="index" @finish-task="finishTask" @delete-task="deleteTask" @edit-task="editTask">
       
    </todo>
  
    </div>
        </td>
    </tr>
    </table>   
  </div>
  </div>
</template>

<script>
import Todo from '../components/Todo.vue'

export default {
  name: 'Home',
  data(){
   return{
     isEditing: false,
     selId:null,
     titleValue:'',
    tasks :[
        {
          title:'Nauci Vue',
          isFinished:false
        },
        {
          title:'Opet nauci Vue',
          isFinished:false
        }
    ]
  }
  },
  methods:{
    finishTask(index){
     this.tasks[index].isFinished = !this.tasks[index].isFinished;
    },
    addNew(){
     let newTask={};
     newTask.title=this.titleValue;
     newTask.isFinished=false;
     this.tasks.push(newTask);
     this.titleValue='';
    },
    deleteTask(index){
      this.tasks.splice(index,1);
      this.isEditing=false;
      this.titleValue='';
    },
    editTask(index){
      this.isEditing=true;
      this.selId=index;
      this.titleValue=this.tasks[index].title;
    },
     confirmEdit() {
      this.tasks[this.selId].title = this.titleValue;
      this.titleValue = "";
      this.isEditing = false;
    },
  },
  components: {
    Todo
  }
}
</script>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  justify-content: center;
  color: #202020;
  margin-top: 132.1px;
  margin-left: 39%;
}
.pozadina{
  margin-top: 0px;
  height: 800px;
  width: 100%;
 
}
.wrapper { 
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: #09e792;
}
.wrapper1{
  background: #2c3e50;
  margin-bottom: 10px;
}
.task {
    display: flex;
    justify-content: flex-end;
    margin: 15px 0;
    
}
.dugme button {
  color: white;
  padding-left: 20px;
  margin-left: 10px;
  margin-top: 9px;
  background-color:  #2c3e50;
  justify-content: flex-end;
  border-radius: 8px;
}
.title{
  color: #2c3e50;
  justify-content: flex-start;

}
label{
  color:aliceblue;
  font-weight: bold;
}
table .task{
  width: 100%;
  color: rgb(255, 0, 0);
}
table{
  border-collapse:collapse ;
}
button{
  justify-content: center;
}
.title.is-finished {
    text-decoration: line-through;
}
table input{
  margin-left: 15px;
  margin-top: 3px;
  margin-right: 20px;
  width: 70%;
}
h1{
  color:  #2c3e50;
  margin-right: 55%;
  
}
 
</style>