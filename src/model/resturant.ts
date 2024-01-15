// let data:Resturant ={
//     name:'누나네 식당',
//     category: 'western',
//     address:{
//       city:'incheoi',
//       detail:'somewhere',
//       zipCode:23425634
//     },
//     menu:[{name:'rose pasta',price:2000,category:"PASTA"},{name:"garlic steak",price:3000,category:"MEAL"}]
//   }

export type Resturant ={
    name:string;
    category:string;
    address:Address;
    menu:Menu[];
    

}


export type Address ={
    city:string;
    detail:string;
    zipCode:number;
}

export type Menu={
    name:string;
    price:number;
    category:string;
}