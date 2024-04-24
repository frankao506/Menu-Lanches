const showAllButton = document.querySelector('.show-all')
const  mapButton = document.querySelector('.map-all')
const  somaButton = document.querySelector('.sum-all')
const filtrarButton = document.querySelector('.filter-vegan')
const list = document.querySelector('.list')



function format(value){
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'   
    }).format(value)
}





function showAll(items){
    console.log(menuOptions)


    let newLi = ''

items.forEach(item => {
        newLi = newLi + `
        <li>
        
        <img src="${item.src}">
        <p>${item.name}</p>
        <p class="price">${format (item.price)}</p>
          
        </li>
        
        `
    })


        list.innerHTML = newLi

}

function mapAll(){
const newPrice = menuOptions.map( item => ({
    ...item,
    price: item.price * 0.9,
   
}))

showAll(newPrice)

}

function somarTudo(){
   const totalValue = menuOptions.reduce(  ( acc, cur)  => {

    return acc + cur.price

   },0)


  list.innerHTML = `
  <li> A soma de todos os items do menu: <p class="price"> ${format(totalValue)}</li>
  
  `

}



function filtrarSóVegano(){
    const apenasVegan = menuOptions.filter(item => item.vegan)

    showAll(apenasVegan)
}






showAllButton.addEventListener('click', () => showAll(menuOptions)) 
mapButton.addEventListener('click',  mapAll)
somaButton.addEventListener('click',  somarTudo)
filtrarButton.addEventListener('click',  filtrarSóVegano)