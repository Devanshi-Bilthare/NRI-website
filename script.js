const pageOneImages =[
    {
        id:1,
        img:"https://www.nrigroupindia.com/niist/wp-content/uploads/sites/6/2022/02/WhatsApp-Image-2022-02-04-at-4.21.29-PM.jpeg"
    },
    {
        id:1,
        img:"https://www.nrigroupindia.com/niist/wp-content/uploads/sites/6/2019/05/slider_niist3-min.jpg"
    },
    {
        id:1,
        img:"https://www.nrigroupindia.com/niist/wp-content/uploads/sites/6/2019/05/slider_niist4-min.jpg"
    },
    {
        id:1,
        img:"https://www.nrigroupindia.com/niist/wp-content/uploads/sites/6/2019/05/slider_niist2-min.jpg"
    },
    {
        id:1,
        img:"https://www.nrigroupindia.com/niist/wp-content/uploads/sites/6/2019/05/slider_niist1-min.jpg"
    }
]

const img = document.querySelector('.page1-images');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener("DOMContentLoaded",function (){
    showImage(currentItem)
});

function showImage(image){
    const item = pageOneImages[image];
    img.src = item.img;
}

nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem > pageOneImages.length - 1){
        currentItem = 0;
    }
    showImage(currentItem)
})

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = pageOneImages.length - 1;
    }
    showImage(currentItem)
})