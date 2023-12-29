const response = new Promise(function(resolve, reject){
    const cars = [
        {
            name: "Lamborghini Huracan STO",
            image: "https://billionairetoys.com/wp-content/uploads/lamborghini_huracan_sto_front_side_garage_featured-1000x600.jpg",
            price: "2 000",
        },
        {
            name: "Aston Martin Vantage",
            image: "https://coolmaterial.com/wp-content/uploads/2017/11/Aston-Martin-Vantage-1000x600.jpg",
            price: "1 000",
        },
        {
            name: "Ferrari SF90 Stradale",
            image: "https://www.thesupercarblog.com/wp-content/uploads/2023/03/Ferrari-SF90-Stradale-for-sale-Houston-1-1000x600.jpg",
            price: "1 500",
        },
        {
            name: "McLaren",
            image: "https://images.carandbike.com/cms/articles/2023/9/3205535/Mclaren_GT_Cyber_Yellow_a79c8150f5.jpg",
            price: "900",
        },
        {
            name: "Ares S1",
            image: "https://billionairetoys.com/wp-content/uploads/ARES-S1-Project-Hero-1000x600.jpg",
            price: "2 000",
        },
    ];

    setTimeout(function(){
        if(cars !==0){
            resolve({success:200, message:"OK", data:cars})
        }else{
            reject({success:200, message:"Error", data:cars})

        }
    },4000)
});

response.then(renderItem).catch((err)=>{
    console.log(err);

})



function renderItem(data){
    const cars = data.data

    const list = document.querySelector("#list");
    list.innerHTML = cars.map(item => `<img src="${item.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.price}$</p>
      <a href="#" class="btn btn-primary">Rent this car</a>
    </div>`)

    console.log(cars);
}



