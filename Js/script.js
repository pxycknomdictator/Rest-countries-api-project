// Dark mode switcher script
const root = document.documentElement
const togglebutton = document.getElementById("toggle")

togglebutton.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON" || event.target.tagName === "I") {
        root.classList.toggle("dark")
    }
})

// Dropdown script
const dropdown = document.getElementById("dropdown");
const dropdownbutton = document.getElementById("dropdownButton");
const icon = document.getElementById("icon");
let count = 0;

dropdownbutton.addEventListener("click", () => {
    if (count === 0) {
        dropdown.style.display = "block"
        icon.style.rotate = "180deg"
        count += 1
    } else {
        dropdown.style.display = "none"
        icon.style.rotate = "0deg"
        count = 0;
    }
})


// Search script

const CardContainer = document.getElementById("card-container");
const searchbar = document.getElementById("searchbar");
let countriesData = [];

// Fetching data from Json
const fetchingData = async () => {
    try {
        const getData = await fetch("Js/data.json");
        countriesData = await getData.json();
        displayCountries(countriesData);
    } catch (error) {
        console.log(error);
    }
}

const displayCountries = (data) => {
    CardContainer.innerHTML = "";
    data.forEach(country => {
        const singleCard = `<a href="country.html?name=${country.name}" class="block rounded-br-md rounded-bl-md dark:bg-header dark:text-white shadow-lg dark:shadow-none">
            <div class="w-full">
                <img class="w-full overflow-hidden rounded-tr-md rounded-tl-md" src="${country.flags.svg}" alt="${country.name}-flag">
            </div>
            <div style = "padding: 1.5rem 2rem;">
                <h2 class="mb-3 text-xl font-semibold">${country.name}</h2>
                <p style = "margin-top: .5rem">Population: <span>${country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p>
                <p style = "margin-top: .5rem">Region: <span>${country.region}</span></p>
                <p style = "margin-top: .5rem">Capital: <span>${country.capital}</span></p>
            </div>
        </a>`;
        CardContainer.innerHTML += singleCard;
    });
}


searchbar.addEventListener("input", () => {
    const changeinput = searchbar.value.toLowerCase();
    const filteredCountries = countriesData.filter(country => {
        return country.name.toLowerCase().includes(changeinput)
    });
    displayCountries(filteredCountries);
});

fetchingData();