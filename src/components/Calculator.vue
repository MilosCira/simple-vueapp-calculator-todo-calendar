<template>
<div class="pozadina">
  <div class="calculator">
    <div class="result">
      <input type="text" v-model="num">
      {{ result }}
    </div>
    <div class="button" @click="number(7)">7</div>
    <div class="button" @click="number(8)">8</div>
    <div class="button" @click="number(9)">9</div>
    <div class="button" @click="button('+')">+</div>
    <div class="button" @click="number(4)">4</div>
    <div class="button" @click="number(5)">5</div>
    <div class="button" @click="number(6)">6</div>
    <div class="button" @click="button('-')">-</div>
    <div class="button" @click="number(1)">1</div>
    <div class="button" @click="number(2)">2</div>
    <div class="button" @click="number(3)">3</div>
    <div class="button" @click="button('*')">*</div>
    <div class="button" @click="number(0)">0</div>
    <div class="button" @click="button('c')">c</div>
    <div class="button" @click="equal">=</div>
    <div class="button" @click="button('/')">/</div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      result: 0,
      prevOperator: null,
      firstNumber: 0,
    };
  },
  methods: {
    number(num) {
      if (this.num === 0) {
        this.num = num;
      } else {
        let a = "" + this.num + num;
        this.num = Number(a);
      }
    },
    button(char){
        if (this.num === ''){
            if (char == "c") {
                this.result = 0;
                this.num = '';
                this.firstNumber = 0;
            } else if (char == "+"){
                this.prevOperator = "+"
            } else if (char == "-"){
                this.prevOperator = "-"
            } else if (char == "*"){
                this.prevOperator = "*"
            } else if (char == "/"){
                this.prevOperator = "/"
            }
        }
        else{
        if (char == "c") {
        this.result = 0;
        this.num = '';
        this.firstNumber = 0;
        } else if (char == "+"){
            if (this.prevOperator === null){
                this.prevOperator = "+"
                this.firstNumber = this.num
                this.result = this.firstNumber
                this.num = '';
            } else{
                this.equal()
                this.prevOperator = "+"
            }
        } else if (char == "-"){
            if (this.prevOperator === null){
                this.prevOperator = "-"
                this.firstNumber = this.num
                 this.result = this.firstNumber
                this.num = '';
            } else{
                this.equal()
                this.prevOperator = "-"
            }
        } else if (char == "*"){
            if (this.prevOperator === null){
                this.prevOperator = "*"
                this.firstNumber = this.num
                this.result = this.firstNumber
                this.num = '';
            } else{
                this.equal()
                this.prevOperator = "*"
            }
        } else if (char == "/"){
            if (this.prevOperator == ""){
                this.prevOperator = "/"
                this.firstNumber = this.num
                 this.result = this.firstNumber
                this.num = '';
            } else{
                this.equal()
                this.prevOperator = "/"
            }
        } }
    },
    equal() {
      if (this.prevOperator === "+") {
        this.result = this.firstNumber + this.num;
        this.firstNumber = this.result;
        this.num = '';
      }
      else if (this.prevOperator === "-") {
        this.result = this.firstNumber - this.num;
        this.firstNumber = this.result;
        this.num = '';
      }
      else if (this.prevOperator === "*") {
        
        this.result = this.firstNumber * this.num;
        this.firstNumber = this.result;
        this.num = '';
      } else if (this.prevOperator === "/") {
        if(this.firstNumber)
        this.result = this.firstNumber / this.num;
        this.firstNumber = this.result;
        this.num = '';
      }

    },
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 210px;
  justify-content: center;
  margin-left: 43%;
  margin-top:100px ;
  background-color: aquamarine;
}
.button {
  width: 50px;
  height: 50px;
  display: flex;
  border: 1px solid rgb(81, 148, 179);
  justify-content: center;
  font-weight: bold;
  color: blue;
  align-items: center;
}
.result {
  width: 100%;
  height: 50px;
  background: rgb(74, 207, 231);
  margin-bottom: 5px;
  font-weight:bold ;
}
input{
display: flex;
margin-left: 16px;
font-weight:bold ;
margin-top: 3px;
}
.pozadina{
  
    height: 800px;
}
</style>