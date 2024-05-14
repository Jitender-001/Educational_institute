const image_input = document.querySelector("#image_input");
const sign = document.getElementById('sign');

var uploaded_image="";

image_input.addEventListener("change",function(){
    const reader = new FileReader();
    reader.addEventListener("load",()=>{
        uploaded_image = reader.result;
        document.querySelector(".display_image").style.backgroundImage =`url(${uploaded_image})`;
    })
    reader.readAsDataURL(this.files[0]);
})

var image = "";
sign.addEventListener("change",function(){
    let reader = new FileReader();
    reader.addEventListener("load",()=>{
        image = reader.result;
        document.querySelector(".display_image1").style.backgroundImage =`url(${image})`;
    })
    reader.readAsDataURL(this.files[0]);
})

var pdf = "";
sign.addEventListener("change",function(){
    let reader = new FileReader();
    reader.addEventListener("load",()=>{
        pdf = reader.result;
        document.querySelector(".display_pdf").style.backgroundImage =`url(${pdf})`;
    })
    reader.readAsDataURL(this.files[0]);
})

