const wrapper = document.getElementById('wrapper');
const qrInput = document.getElementById('input');
const button = document.getElementById('button');
const qrimg = document.getElementById('image');

button.addEventListener('click' , () => {
    let qrvalue = qrInput.get;
    console.log(qrvalue);
    if(qrvalue == "")return;
    qrimg.src= 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}';  

})