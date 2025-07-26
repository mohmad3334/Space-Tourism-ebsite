const planetPicture = document.querySelector('.planet');
const planetName = document.querySelector('.name');
const planetDescription = document.querySelector('.description');
const distance = document.querySelector('.distance');
const travelTime = document.querySelector('.time');
const planets = document.querySelectorAll('.planets-names li');

let data;

fetch('starter-code/data.json')
    .then(res => res.json())
    .then((json) => {
        data = json.destinations;

        // عرض أول كوكب عند تحميل الصفحة
        updatePlanet(0);
        planets[0].classList.add('active');

        planets.forEach((planet, i) => {
            planet.addEventListener('click', () => {
                // إزالة الكلاس active من الجميع
                planets.forEach(btn => btn.classList.remove('active'));

                // إضافة الكلاس active للكوكب المختار
                planet.classList.add('active');

                // تحديث المحتوى بالكوكب المختار
                updatePlanet(i);
            });
        });
    });

function updatePlanet(i) {
    planetPicture.src = 'starter-code/' + data[i].images.png.slice(2); // نحيد "./" من بداية المسار
    planetName.textContent = data[i].name.toUpperCase();
    planetDescription.textContent = data[i].description;
    distance.textContent = data[i].distance;
    travelTime.textContent = data[i].travel;
}



// Crew slider using dot navigation
const roleEl = document.querySelector(".role");
const nameEl = document.querySelector(".crew-name");
const bioEl = document.querySelector(".crew-bio");
const imgEl = document.querySelector(".crew-picture img");
const dots = document.querySelectorAll(".dot");

let crewData;

fetch("starter-code/data.json")
    .then((res) => res.json())
    .then((data) => {
        crewData = data.crew;

        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                // Remove active class from all dots
                dots.forEach((d) => d.classList.remove("dot-active"));

                // Add to clicked dot
                dot.classList.add("dot-active");

                // Update UI
                const crew = crewData[index];
                roleEl.textContent = crew.role.toUpperCase();
                nameEl.textContent = crew.name.toUpperCase();
                bioEl.textContent = crew.bio;
                imgEl.src = "starter-code/" + crew.images.png;
            });
        });
    });


// technology slider using numbers

const technologyName = document.querySelector('.technology-name')
const technologyDescription = document.querySelector('.technology-description')
const technologyImg = document.querySelector('.technology-img')
const numbers = document.querySelectorAll('.numbers h1')

let techData;

fetch("starter-code/data.json")
    .then(res => res.json())
    .then((data) => {
        techData = data.technology

        numbers.forEach((number, index) => {
            number.addEventListener('click', function () {
                numbers.forEach((d) => d.classList.remove('n-active'));
                number.classList.add('n-active');

                const tech = techData[index];
                technologyName.textContent = tech.name.toUpperCase();
                technologyDescription.textContent = tech.description;

                if (window.innerWidth <= 768) {
                    technologyImg.src = 'starter-code/' + tech.images.landscape;
                } else {
                    technologyImg.src = 'starter-code/' + tech.images.portrait;
                }

            });
        });


    });







const menuBtn = document.getElementById('menu');
const closeBtn = document.getElementById('close');
const navbar = document.getElementById('navbar');

// فتح القائمة
menuBtn.addEventListener('click', () => {
    navbar.classList.add('nav-open');
    menuBtn.style.visibility = 'hidden';
});

// إغلاق القائمة
closeBtn.addEventListener('click', () => {
    navbar.classList.remove('nav-open');
    menuBtn.style.visibility = 'visible';
});