<template>
  <div class="">
      <div class="kalendar">
          <div class="kalendar_mesec">

              <div class="kalendar_mesec_godina">
                  <h1>{{godina}}</h1>
              </div>

              <div class="redovi">
                  <i @click="prosliMesec" class="red levo"/>
              </div>

              <div class="kalendar_mesec_mesec">
                  <h3>{{getMesec}}</h3>
              </div>
               
               <div class="redovi">
                   <i @click="sledeciMesec" class="red desno"/>
               </div>
          </div>
          
          <div class="daniUnedelji">
                 <div class="daniundelji_dan" v-for="dani in daniUnedelji" :key="dani">
                     {{dani}}
                 </div>
          </div>

          <div class="daniUmesecu">
              <div class="daniuMesecu_dan" v-for="(dani, index) in getKalendar" :key="index"  v-bind:class="{ curr: dani.trenutniMesec }">
                {{dani.dan}}
              </div>

          </div>
      </div>
  </div>
</template>

<script>
export default {
 name:"Kalendar",
 data(){
     return{
         datum:new Date(),
         godina:null,
         mesec:null,
         danUmesecu:null,
         danUnedelji:null,
         prviDanUmesecu:null,
         zadnjiDanUmesecu:null,
         daniUnedelji:["PON","UTO","SRE","ČET","PET","SUB","NED"],
         daniUmesecu:[],
         zadnjiDanUproslomMesecu:null,
         daniUproslomMesecu:[],
     };
 },
 methods:{
     getDatum(){
         this.godina=this.datum.getFullYear();
         this.mesec=this.datum.getMonth();

         this.danUmesecu=this.datum.getDate();
         this.danUnedelji=this.datum.getDay();

         this.prviDanUmesecu=new Date(this.godina,this.mesec,1).getDay();
         this.zadnjiDanUmesecu=new Date(this.godina,this.mesec+1,0).getDate();
         this.zadnjiDanUproslomMesecu=new Date(this.godina,this.mesec,0).getDate();

     },
     getDaniUMesecu(){
         this.daniUmesecu=[];
         for(let index=1; index<=this.zadnjiDanUmesecu; index++){
             this.daniUmesecu.push(index);
         }
     },
     sledeciMesec(){
       if(this.mesec<11){
           this.mesec++;
       }else{
           this.mesec=0;
           this.godina++;
       }
        this.prviDanUmesecu=new Date(this.godina,this.mesec,1).getDay();
        this.zadnjiDanUmesecu=new Date(this.godina,this.mesec+1,0).getDate();
        this.zadnjiDanUproslomMesecu=new Date(this.godina,this.mesec,0).getDate();
        this.getDaniUMesecu();
     },
      prosliMesec(){
          if(this.mesec>0){
              this.mesec--;
          }else{
              this.mesec=11;
              this.godina--;
          }
        this.prviDanUmesecu=new Date(this.godina,this.mesec,1).getDay();
        this.zadnjiDanUmesecu=new Date(this.godina,this.mesec+1,0).getDate();
        this.zadnjiDanUproslomMesecu=new Date(this.godina,this.mesec,0).getDate();
        this.getDaniUMesecu();
      },
 },
 computed:{
     getMesec(){
         let meseci=[
          "Januar",
          "Februar",
          "Mart",
          "April",
          "Maj",
          "Jun",
          "Jul",
          "Avgust",
          "Septembar",
          "Oktobar",
          "Novembar",
          "Decembar",
         ];
         let m=meseci[this.mesec];
         return m;
     },
     getKalendar(){
         let niz=[];
         niz=this.getdaniUproslomMesecu;
         let duzina=niz.length;
         let broj=1;
         for(let index=1; index<=42-duzina; index++){
             if(index<=this.zadnjiDanUmesecu){
              let obj={
                  dan: index,
                  trenutniMesec: true,
              };
              niz.push(obj);
             }else{
                 let obj={
                     dan:broj++,
                     trenutniMesec: false,
                 };
                 niz.push(obj);
             }
         }
         return niz;
     },
     getdaniUproslomMesecu(){
         let a=null;
         let b=[];
         let c=null;

          if(this.prviDanUmesecu===0){
              a=6;
              c=this.zadnjiDanUproslomMesecu-5;
          }else{
              a=this.prviDanUmesecu-1;
              c=this.zadnjiDanUproslomMesecu-a+1;
          }

          for(let index=c; index<=this.zadnjiDanUproslomMesecu; index++){
              let obj={
                  dan:index,
                  trenutniMesec: false,
              };
              b.push(obj);
          }
          return b;
     },
 },
 mounted(){
   this.getDatum();
   this.getDaniUMesecu();
 },
}
</script>

<style scoped>
.btn {
  border: none;
  background-color: transparent;
}
.curr {
  color: black;
  font-weight: bold;

}
.daniUnedelji{
    display: flex;
}
.kalendar_mesec {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.daniUnedelji{
    display: flex;
}
.daniundelji_dan{
   width: 52px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9c975c;
  color: white;
  font-family: 'Poppins',sans-serif;
}
.daniUmesecu{
   display: flex;
   flex-wrap: wrap;
}
.daniuMesecu_dan{
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  border:solid black 0.5px; 
  justify-content: center;
  font-family: 'Poppins',sans-serif;
}

.kalendar{
    width: 370px;
    margin-left: 38%;
}
.red{
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
.desno{
   transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.levo{
 transform: rotate(135deg);
-webkit-transform: rotate(135deg);
}
.kalendar_mesec_godina{
    width: 100%;
}
.kalendar_mesec_mesec{
    width: 30%;
}
.redovi{
    padding: 1px;
}
h1 {
  margin-bottom: 0;
  color: rgb(194, 115, 59);
}
h3 {
  margin: 0;
  color:  rgb(194, 115, 59);
}

</style>