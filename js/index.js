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
    "h1": "DOM Is Awesome",
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
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Menu Items



let menuItems = document.querySelectorAll('nav a');

menuItems.forEach((item, index) => item.textContent = siteContent['nav'][`nav-item-${index += 1}`])
// menuItems[0].textContent = siteContent['nav']['nav-item-1'];
// menuItems[1].textContent = siteContent['nav']['nav-item-2'];
// menuItems[2].textContent = siteContent['nav']['nav-item-3'];
// menuItems[3].textContent = siteContent['nav']['nav-item-4'];
// menuItems[4].textContent = siteContent['nav']['nav-item-5'];
// menuItems[5].textContent = siteContent['nav']['nav-item-6'];

  // Append Child Element 

  let menu = document.querySelector('nav');
  let newMenuItem1 = document.createElement('a');
  newMenuItem1.textContent = 'Fun';
  newMenuItem1.style.color = 'green'
  menu.appendChild(newMenuItem1);

  // Prepend Text

menuItems[0].prepend('Serious ');


  // Change Text To Green 

menuItems.forEach(item => item.style.color = 'green');

// CTA

let ctaHeading = document.querySelector('.cta-text h1');
ctaHeading.textContent = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];


let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

// Main Content

let headingsValues = Object.keys(siteContent['main-content']).filter(item => item.includes('h4'))
console.log(headingsValues)
let contentValues = Object.keys(siteContent['main-content']).filter(item => item.includes('content'))


  // Top Content

let topHeadings = document.querySelectorAll('.top-content .text-content h4');
topHeadings.forEach((item, index) => item.textContent = siteContent['main-content'][headingsValues[index]])
// topHeadings[0].textContent = siteContent['main-content']['features-h4'];
// topHeadings[1].textContent = siteContent['main-content']['about-h4'];

let topText = document.querySelectorAll('.top-content .text-content p');
topText.forEach((item,index) => item.textContent = siteContent['main-content'][contentValues[index]])
topText[0].textContent = siteContent['main-content']['features-content'];
topText[1].textContent = siteContent['main-content']['about-content'];

  // Middle Image

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

  // Bottom Content


let bottomHeadings = document.querySelectorAll('.bottom-content .text-content h4');
bottomHeadings.forEach((item,index) => item.textContent = siteContent['main-content'][headingsValues[index += 2]])
// bottomHeadings[0].textContent = siteContent['main-content']['services-h4'];
// bottomHeadings[1].textContent = siteContent['main-content']['product-h4'];
// bottomHeadings[2].textContent = siteContent['main-content']['vision-h4'];

let bottomText = document.querySelectorAll('.bottom-content .text-content p');
bottomText.forEach((item,index) => item.textContent = siteContent['main-content'][contentValues[index += 2]])
// bottomText[0].textContent = siteContent['main-content']['services-content'];
// bottomText[1].textContent = siteContent['main-content']['product-content'];
// bottomText[2].textContent = siteContent['main-content']['vision-content'];

// Contact 

let contactValues = Object.keys(siteContent['contact'])
console.log(contactValues)

let contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent['contact']['contact-h4'];

let contactLabels = document.querySelectorAll('.contact p');
contactLabels.forEach((item,index) => item.textContent = siteContent['contact'][contactValues[index += 1]])
// contactLabels[0].textContent = siteContent['contact']['address'];
// contactLabels[1].textContent = siteContent['contact']['phone'];
// contactLabels[2].textContent = siteContent['contact']['email'];

// Footer 

let copyright = document.querySelector('footer p');
copyright.textContent = siteContent['footer']['copyright'];
