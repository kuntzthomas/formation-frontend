let favoriteCityId = "rome";
console.log(favoriteCityId);

favoriteCityId = "paris";
console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);

//const citiesId = [];

citiesId.push("tokyo");
console.log(citiesId);

function getWeather(cityId) {
  let city = cityId.toUpperCase();
  let temperature = 20;
  return { city, temperature };
}

const weather = getWeather(favoriteCityId);
console.log(weather);

let { city, temperature } = weather;
console.log(city);
console.log(temperature);

let [parisId, nycID, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycID);
console.log(othersCitiesId.length);

class Trip {
  constructor(id, name, imageUrl, price) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this._price = price;
  }
  toString() {
    return (
      "Trip [" +
      this.id +
      ", " +
      this.name +
      ", " +
      this.imageUrl +
      ", " +
      this._price +
      "]"
    );
  }
  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
  static getDefaultTrip(
    id = "rio-de-janeiro",
    name = "Rio de Janeiro",
    imageUrl = "img/rio-de-janeiro.jpg"
  ) {
    return new Trip(id, name, imageUrl);
  }
}

parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
console.log(parisTrip);
console.log(parisTrip.name);

console.log(parisTrip.toString());

parisTrip.price = 100;
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

class FreeTrip extends Trip {
  constructor(id, name, imageUrl) {
    super(id, name, imageUrl);
    this._price = 0;
  }
  toString() {
    return "Free" + super.toString();
  }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString());

class TripService {
  constructor() {
    this.trips = new Set([
      new Trip("paris", "Paris", "img/paris.jpg"),
      new Trip("nantes", "Nantes", "img/nantes.jpg"),
      new Trip("rio-de-janeiro", "Rio de janeiro", "img/rio-de-janeiro.jpg")
    ]);
  }
  findByName(tripName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let found;
        let trip = this.trips.forEach(t => {
          if (t.id === tripName) found = t;
        });
        if (found) resolve(found);
        else console.log("No trip with name", tripName.id);
      }, 2000);
    });
  }
}

class PriceService {
  constructor() {
    this.prices = new Map([["paris", 100], ["rio-de-janeiro", 800]]);
  }

  findPriceByTripId(tripId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let found = this.prices.get(tripId.id);
        if (found) resolve(found);
        else console.log("No price found for trip id", tripId.id);
      }, 2000);
    });
  }
}

let tripService = new TripService();
let priceService = new PriceService();

tripService.findByName("paris").then(trip => console.log("Trip found :", trip));
tripService
  .findByName("toulouse")
  .then(trip => console.log("Trip found :", trip));
tripService
  .findByName("rio-de-janeiro")
  .then(trip => priceService.findPriceByTripId(trip))
  .then(price => console.log(price));
tripService
  .findByName("nantes")
  .then(trip => priceService.findPriceByTripId(trip))
  .then(price => console.log(price));