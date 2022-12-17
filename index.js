const submitform = document.getElementById("submitbutton");
const qr = document.getElementById("qrcode");

function generateurl() {
    QRcodeclear();
    const inputurl = document.getElementById("inputurl").value;
    const inputsize = document.getElementById("inputsize").value;
    
    if (inputurl == "") {
        alert("Please enter an URL");
    }
    else {

        generateQRCode(inputurl, inputsize);
        // inputurl.value = '';

        setTimeout(()=>{
            const saveurl=qr.querySelector('img').src;
            qr.querySelector('img').style.margin="auto";
            createSavebtn(saveurl);
        },50);
        
        
        
    }
    console.log(inputsize, inputurl);
};

const generateQRCode = (inputurl, inputsize) => {
    const qrcode = new QRCode('qrcode', {
        text: inputurl,
        width: inputsize,
        height: inputsize,
    });
};

function QRcodeclear() {
    qr.innerHTML = '';
    const savelink=document.getElementById('save-btn');
    if(savelink){
        savelink.remove();
    }
}

const createSavebtn=(saveUrl)=>{
    const link=document.createElement('a');
    link.id='save-btn';
    link.classList='p-2 m-auto';
    link.href= saveUrl;
    link.download='qrcode';
    link.innerHTML='Save Image';
    document.getElementById('savebtn').appendChild(link);
}
submitform.addEventListener('click', generateurl);



