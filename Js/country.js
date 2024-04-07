const queryname = new URLSearchParams(window.location.search);
const element = document.getElementById("infoContainer")
const image = document.getElementById("countryImg")
const borders = document.getElementById("bordercountry")
// Fetching Data

const fetchedData = async () => {
    const getData = await fetch(`./Js/data.json`);
    const response = await getData.json();

    const country = response.find(country => country.name === queryname.get("name"));

    image.src = country.flags.svg

    const data = ` <h1 class="text-2xl font-bold mb-6 mysm:text-xl mysm:mt-6">${country.name}</h1>

    <div id="description" class="grid mysm:grid-cols-2">

        <div>
            <p class="mt-1"><b>Native Name: </b>${country.nativeName}</p>
            <p class="mt-1"><b>Population: </b>${country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            <p class="mt-1"><b>Region: </b>${country.region}</p>
            <p class="mt-1"><b>Sub Region: </b>${country.subregion}</p>
            <p><b>Capital: </b>${country.capital}</p>
        </div>

        <div>
            <p class="mt-1"><b>Top Level Domain: </b>${country.topLevelDomain}</p>
            <p class="mt-1"><b>Currencies: </b>${country.currencies[0].code}</p>
            <p class="mt-1"><b>Languages: </b>${country.languages.map(element => element.nativeName)}</p>
        </div>

    </div>

    <div id="borders" class="flex flex-col gap-3 lg:flex-row lg:items-center mt-10">

        <p>Border Countries:</p>

        <div id="border-country" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
        <span style="letter-spacing: 4px;">${country.borders}</span>
        </div>

    </div>`
    element.innerHTML = data;
}

fetchedData()

const root = document.documentElement
const togglebutton = document.getElementById("toggle")

togglebutton.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON" || event.target.tagName === "I") {
        root.classList.toggle("dark")
    }
})