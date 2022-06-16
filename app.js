const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 10,
    title: "Yaprak dolma",
    category: "Turkey",
    price: 4.99,
    img:
      "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1100,c_fill,g_auto,h_619,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200401171739-06-best-turkish-foods-yaprak-dolma.jpg",
    desc: `This traditional dish is essentially vine leaves rolled and filled with either well-seasoned rice or mincemeat.`,
  },
  {
    id: 11,
    title: "Iskender kebab",
    category: "Turkey",
    price: 7.99,
    img:
      "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200401171826-08-best-turkish-foods-iskender-kebab.jpg",
    desc: `Iskender kebab is named after İskender Efendi, the man who invented the dish.`,
  },
  {
    id: 12,
    title: "Manti",
    category: "Turkey",
    price: 3.99,
    img:
      "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200401172027-12-best-turkish-foods-manti.jpg",
    desc: `The most coveted version of these tasty Turkish dumplings are made in Kayseri, Central Anatolia.`,
  },
  {
    id: 13,
    title: "Lahmacun",
    category: "Turkey",
    price: 1.99,
    img:
      "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200402101927-18-best-turkish-foods-lahmacun.jpg",
    desc: `Lahmacun is commonly referred to as Turkish Pizza.`,
  },
];

let menuButtonsDOM = document.querySelector('.btn-container') // Menu kategorilerinin olduğu div
let categoryList = [] // Menu kategorilerinin ekleneceği array
menu.map(function(element){ // menu.map kullanarak tek tek menu elemanlarını çağırıyor ve kategorilerinin kategori listesinde olup olmadığı durumuna göre kategori listesine ekliyoruz
  if(!categoryList.includes(element.category)){
    categoryList.push(element.category)
  }
})

categoryList.map(function(element){ // Kategori listesi alınıyor ve Butonlara dönüştürülüyor
  menuButtonsDOM.innerHTML += `<button class="btn btn-outline-dark btn-item" data-id="${element}">${element}</button>`
})

let buttonsDOM = document.querySelectorAll('.btn-container>button')
buttonsDOM.forEach(function(clickedButtonDOM){
  clickedButtonDOM.addEventListener('click',function(){
    let select = clickedButtonDOM.getAttribute('data-id')
    let selectedCategory = []
    menu.map(function (params) {
      if(params.category == select){
        selectedCategory.push(params)
      }else if(select == 'All'){
        selectedCategory.push(params)
      }
    })
    listele(selectedCategory)
  })
})

function listele(selectedCategory){
  let menuDOM = document.querySelector('#menu')
  let html = ""
  for (let index = 0; index < selectedCategory.length; index++) {
      const element = selectedCategory[index];
      html += `
      <div class="menu-items col-lg-6 col-sm-12">
            <img src="${element.img}" alt="${element.title}" class="photo">
            <div class="menu-info">
              <div class="menu-title">
                <h4>${element.title}</h4>
                <h4 class="price">${element.price}</h4>
              </div>
              <div class="menu-text">
                ${element.desc}
              </div>
            </div>
          </div>
      `
  }
  menuDOM.innerHTML = html
}