// let products = []

// const uimaker = (data) => {
//     document.getElementById("box").innerHTML = "";
//     data.map((ele, i) => {

//         let title = document.createElement("h1");
//         title.innerHTML = ele.title;

//         let price = document.createElement("p");
//         price.innerHTML = ele.price;

//         let images = document.createElement("img");
//         images.src = ele.images;

//         let div = document.createElement("div");
//         div.append(title, images, price);

//         // div.setAttribute("class", "data");

//         document.getElementById("box").append(div);
//     });
// };
//fetch
// const get = async() => {
//     let res = await fetch("https://dummyjson.com/products")
//     let data = await res.json()
//     console.log(data);
//     uimaker(data.products)
//     product = data.product
// }
// get()

// fetch("https://dummyjson.com/products")
//     .then(res => res.json())
//     .then((data => {
//         uimaker(data)

//     }))




const postdata = (data) => {
    fetch("http://localhost:3000/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)

    })

}
const hendaledata = (e) => {
    e.preventDefault();
    let data = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        img: document.getElementById("img").value,

    }
    console.log("data", data);
    postdata(data);

}
document.getElementById("myform").addEventListener("submit", hendaledata)