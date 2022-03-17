const body        =document.querySelector("body");
const containerdiv=document.createElement("div");
containerdiv.className="container"
const rowdiv      =document.createElement("div");
rowdiv.className ="row"
containerdiv.append(rowdiv);
body.append(containerdiv);

async function weatherAPI()
 {
    const Apiresponse= await fetch(`https://restcountries.com/v3.1/all`);
    const ApiData= await Apiresponse.json();
    ApiData.forEach(data => {
       const Countryname=data.name.common;
       const latlong    =data.latlng[0]+' '+data.latlng[1];
       const flag       =data.flags.png;
       const region     =data.region;
       const captial    =data.capital;
       const countrycode=data.cioc;

       const Maindiv=document.createElement("div");
       Maindiv.className="col-lg-4 col-sm-12 spacing"

       const carddiv=document.createElement("div");
       carddiv.className="card"
    
       const headingdiv=document.createElement("div");
       headingdiv.style.backgroundColor="black";
       headingdiv.className="card-header"

       const countryheader=document.createElement("h2");
       countryheader.className="countryhead"
       countryheader.innerText=Countryname;
       headingdiv.append(countryheader);

       const imagediv=document.createElement("div");
       imagediv.classList.add("card_image_color","common")
       
       const image=document.createElement("img");
       image.setAttribute("src",flag);
       image.setAttribute("width","200px");
       image.setAttribute("height","150px");
       image.setAttribute("alt",Countryname);
       image.style.className="card_image_color ";
       imagediv.appendChild(image);
  
       const cardbody=document.createElement("div");
       cardbody.className="card-body card_image_color common";

       const Caps=document.createElement("p");
       Caps.innerText=`Captial :${captial}`;

       const reg=document.createElement("p");
       reg.innerText=`Region :${region}`

       const  code=document.createElement("p");
       code.innerHTML=` Country Code :${countrycode}`;

       const anchortag=document.createElement("a");
       anchortag.setAttribute("href",`https://openweathermap.org/find?q=${Countryname}`);
       anchortag.className="btn btn-outline-primary btn-sm common anchor-border";
       anchortag.innerText="Click for Weather";

       cardbody.append(Caps);
       cardbody.append(reg);
       cardbody.append(code);
       cardbody.append(anchortag);

       carddiv.append(headingdiv);
       carddiv.append(imagediv);
       carddiv.append(cardbody);
     
       Maindiv.append(carddiv);
       rowdiv.append(Maindiv);

    });
 }

 weatherAPI()