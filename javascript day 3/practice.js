const url = "https://dumdata.vercel.app/api/products";
const para = document.getElementById("para")
const btn = document.getElementById("btn")
const h1 = document.getElementById("h1")


   

const getData = async () => {
    const res = await fetch(url);
    const data = await res.json()

    console.log(data);


    para.innerHTML = data.products[0].id
    h1.innerHTML = data.products[0].title


};

btn.addEventListener("click", getData)

