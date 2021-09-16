import { createStore } from 'vuex'

const store = createStore({
    state(){
        return{
            posts:[
                {id:1,date:'12/02/1990',title:'title 1', post:'Migrations 1 are like version control for your database, allowing your team to define and share the applications database schema definition. If you have ever had to'},
                {id:2,date:'10/07/2005',title:'title 2', post:'Migrations 2 are like version control for your database, allowing your team to define and share the applications database schema definition. If you have ever had to'},
                {id:3,date:'23/04/2020',title:'title 3', post:'Migrations 3 are like version control for your database, allowing your team to define and share the applications database schema definition. If you have ever had to'},
            ]
        }
    }
});

export default store;