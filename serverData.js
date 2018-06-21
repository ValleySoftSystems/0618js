

// Associative array is Hash Map
// K, V

var capitalCitiesAssociativeArray = [];
capitalCitiesAssociativeArray["India"] = "New Delhi";
capitalCitiesAssociativeArray["USA"] = "Washington DC";
capitalCitiesAssociativeArray["UK"] = "London";


function printCapitalCity(countryName){
    console.log(capitalCitiesAssociativeArray[countryName]);
}

var countries = [];
countries[0] = "India";
countries[1] = "USA";
countries[2] = "UK";

var capitalCities = [];
capitalCities[0] = "New Delhi";
capitalCities[1] = "Washington DC";
capitalCities[2] = "London";

function findCountryIndex(countryName) {
	for (var i = 0; i < countries.length; i++) {
		if (countries[i] === countryName) return i;
	}
	return -1;
}

function printCapitalCityForACountry(countryName) {
	var index = findCountryIndex(countryName);
	if (index === -1) {
		console.log('not found');
	}
	else
	{
		console.log(capitalCities[index]);
	}
}









