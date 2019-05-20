const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM</br>Is</br>Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street</br>Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// Nav
let logo = document.getElementById("logo-img");
let navLinks = document.querySelectorAll("a");
for(let i = 0; i < navLinks.length; i++) {
  navLinks[i].innerText = siteContent["nav"]["nav-item-" + [i+1]];
  navLinks[i].style.color = "green";
}

logo.setAttribute("src", siteContent["nav"]["img-src"]);

// CTA 
let cta = document.querySelector(".cta-text");
cta.childNodes[1].innerHTML = siteContent["cta"]["h1"];
cta.childNodes[3].innerText = siteContent["cta"]["button"];

// CTA Image
let ctaIMG = document.getElementById("cta-img");
ctaIMG.src = siteContent["cta"]["img-src"];

// Main-Content
let mainContentIMG = document.getElementById("middle-img");
mainContentIMG.src = siteContent["main-content"]["middle-img-src"];

let mainContent = document.querySelectorAll("div.text-content");
mainContent[0].childNodes[1].innerText = siteContent["main-content"]["features-h4"];
mainContent[0].childNodes[3].innerText = siteContent["main-content"]["features-content"];
mainContent[1].childNodes[1].innerText = siteContent["main-content"]["about-h4"];
mainContent[1].childNodes[3].innerText = siteContent["main-content"]["about-content"];
mainContent[2].childNodes[1].innerText = siteContent["main-content"]["services-h4"];
mainContent[2].childNodes[3].innerText = siteContent["main-content"]["services-content"];
mainContent[3].childNodes[1].innerText = siteContent["main-content"]["product-h4"];
mainContent[3].childNodes[3].innerText = siteContent["main-content"]["product-content"];
mainContent[4].childNodes[1].innerText = siteContent["main-content"]["vision-h4"];
mainContent[4].childNodes[3].innerText = siteContent["main-content"]["vision-content"];


// Contact
let contact = document.querySelector(".contact");
contact.childNodes[1].innerText = siteContent["contact"]["contact-h4"];
contact.childNodes[3].innerHTML = siteContent["contact"]["address"];
contact.childNodes[5].innerText = siteContent["contact"]["phone"];
contact.childNodes[7].innerText = siteContent["contact"]["email"];

// Footer
let footer = document.querySelector("footer");
footer.innerHTML="<p>" + siteContent["footer"]["copyright"] + "</p>";
footer.style = " background-color: #fff; color: #000";

// New Elements
let newItems = document.querySelector(".container header nav")
let newItem = document.createElement("a");
newItem.innerText = "Leadership";
newItem.style.color = "green";
newItem.href = "#";
newItems.prepend(newItem);

let newItem1 = document.createElement("a");
newItem1.innerText = "Videos";
newItem1.style.color = "green";
newItem1.href = "#";
newItems.appendChild(newItem1);