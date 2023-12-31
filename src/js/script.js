let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let sliderimg1 = document.getElementById('sliderimg1');
let sliderimg2 = document.getElementById('sliderimg2');
let sliderimg3 = document.getElementById('sliderimg3');
let sliderimg4 = document.getElementById('sliderimg4');

let currentSlide = 1;

function showSlide(slideNumber) {
    
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`slide${i}`).style.display = 'none';
    }
    document.getElementById(`slide${slideNumber}`).style.display = 'block';

    // Update the variables to the current slide's image elements
    let currentSliderImg;
    let currentSliderImg2;
    let currentSliderImg3;
    let currentSliderImg4;

    if (slideNumber === 1) {
        currentSliderImg = sliderimg1;
        currentSliderImg2 = sliderimg2;
    } else if (slideNumber === 2) {
        currentSliderImg3 = sliderimg3;
    } else if (slideNumber === 3) {
        currentSliderImg4 = sliderimg4;
    }

    setTimeout(function () {
        // Apply transformations to the current slide's images
        if (currentSliderImg) {
            currentSliderImg.style.transform = 'translate(0, 0)';
            currentSliderImg2.style.transform = 'translate(0, 0)';
        }
        if (currentSliderImg3) {
            currentSliderImg3.style.transform = 'translate(0, 0)';
        }
        if (currentSliderImg4) {
            currentSliderImg4.style.transform = 'translate(0, 0)';
        }
        sliding = false;
    }, 1000);
}




function nextSlide() {
    currentSlide = currentSlide === 3 ? 1 : currentSlide + 1;
    showSlide(currentSlide);
}





function previousSlide() {
    currentSlide = currentSlide === 1 ? 3 : currentSlide - 1;
    showSlide(currentSlide);
}



showSlide(currentSlide);





btn1.addEventListener('click', function () {
    showSlide(1);
});

btn2.addEventListener('click', function () {
    showSlide(2);
});

btn3.addEventListener('click', function () {
    showSlide(3);
});



const interval = 3000;
let autoSlide = setInterval(nextSlide, interval);





fetch('db.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(productsData) {
        const limitedData = productsData.products.slice(0, 8);

        var productList = document.querySelector(".productsitem"); 
        limitedData.forEach(function(product) {
            var col = document.createElement("div");
            col.className = "prd";
            col.innerHTML = `
                <img src="src/image/${product.primary_photo}" alt="Foto" style="max-width:100%;">
                <div class="prinfo">
                    <h2 class="prtitle">${product.name}</h2>
                    <p class="price">$${product.price}</p>
                    <a href="#" class="addtocart" data-id="${product._id}">ADD TO CART</a>
                </div>
            `;
            productList.appendChild(col);

            col.addEventListener("mouseenter", function() {
                var priceElement = col.querySelector(".price");
                var addToCartElement = col.querySelector(".addtocart");
                
                priceElement.style.transform = "translateX(50px)";
                priceElement.style.opacity = 0; 

                addToCartElement.style.transform = "translateX(0px)";
                addToCartElement.style.opacity = 1;

            });
            
            col.addEventListener("mouseleave", function() {
                var priceElement = col.querySelector(".price");
                var addToCartElement = col.querySelector(".addtocart");
                
                priceElement.style.transform = "translateX(0px)";
                priceElement.style.opacity = 1; 
               
                addToCartElement.style.transform = "translateX(-50px)";
                addToCartElement.style.opacity = 0;
            });
        });
    })
    .catch(function(error) {
        console.error("Datalarda xəta var:", error);
    });



    document.addEventListener('DOMContentLoaded', function () {
        const sidebar = document.getElementById("sidebar");
        const sidebox = document.getElementById("sidebox");
        const sidebarclose = document.getElementById("sidebarclose");
    
        const searchIcon = document.getElementById("searchIcon");
        const searchBox = document.getElementById("searchlink");
    
        function toggleSearchBox() {
            if (searchBox.style.opacity === '1') {
              searchBox.style.opacity = '0';
            } else {
              searchBox.style.opacity = '1';
            }
          }
     
    
        sidebar.addEventListener('click', function () {
            sidebox.style.left = '0'; 
        });
        sidebarclose.addEventListener('click', function () {
            sidebox.style.left = '100%';
        });
    
        searchIcon.addEventListener('click', toggleSearchBox);
    });
    