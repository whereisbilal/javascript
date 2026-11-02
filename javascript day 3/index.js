const url = "https://dumdata.vercel.app/api/products";
const para = document.getElementById("para");
const para2 = document.getElementById("para2");
const h1 = document.getElementById("h1");
const btn = document.getElementById("btn");


// const getData = async () => {
//     console.log("getting data....");

//     const res = await fetch(url);
//     const data = await res.json();

//     console.log(data);

//     para.innerHTML = data.products[0].id;
//     h1.innerHTML = data.products[0].title;
// };

const getData = () => {
    fetch(url).then((res) => {
        return res.json();
    })

        .then((data) => {
            console.log(data);
            para.innerHTML = data.products[0].id
            h1.innerHTML = data.products[0].title
            para2.innerHTML = data.products[0].description
        })
};

btn.addEventListener("click", getData);