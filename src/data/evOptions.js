import ather450x from "../assets/images/Ather 450X EV scooter.jpg";
import olaS1Pro from "../assets/images/Ola S1 Pro EV scooter.jpg";
import revoltRV400 from "../assets/images/Revolt RV400 EV motorbike.jpg";
import heroOptima from "../assets/images/Hero Electric Optima EV scooter.jpg";
import bajajChetak from "../assets/images/Bajaj Chetak EV scooter.jpg";
import tvsIqube from "../assets/images/TVS iQube EV scooter.jpg";
import ampereZeal from "../assets/images/Ampere Zeal EV scooter.jpg";
import pureEPluto from "../assets/images/Pure EV EPluto 7G scooter.jpg";
import komakiXgtKM from "../assets/images/Komaki XGT KM EV motorbike.jpg";
import okinawaRidgePlus from "../assets/images/Okinawa Ridge+ EV scooter.jpg";
import heroFlash from "../assets/images/Hero Electric Flash EV scooter.jpg";
import battreLoEV from "../assets/images/BattRELoEV EVscooter.jpg";
import kabiraKM3000 from "../assets/images/Kabira KM3000 EV motorbike.jpg";
import avonEScoot from "../assets/images/Avon E Scoot EV scooter.jpg";
import lohiaComfort from "../assets/images/Lohia Comfort EV scooter.jpg";
import heroNYX from "../assets/images/Hero Electric NYX EV scooter.jpg";
import ampereV48 from "../assets/images/Ampere V48 EV scooter.jpg";
import tunwalSport63 from "../assets/images/Tunwal Sport 63 EV motorbike.jpg";

const evOptions = [
  {
    id: 1,
    brand: "Ather",
    model: "450X",
    type: "scooter",
    range: "100-200 km",
    price: "₹1,50,000",
    battery: "3.7 kWh",
    topSpeed: "80 km/h",
    image: ather450x,
  },
  {
    id: 2,
    brand: "Ola",
    model: "S1 Pro",
    type: "scooter",
    range: "100-200 km",
    price: "₹1,40,000",
    battery: "4 kWh",
    topSpeed: "115 km/h",
    image: olaS1Pro,
  },
  {
    id: 3,
    brand: "Revolt",
    model: "RV400",
    type: "motorbike",
    range: "100-200 km",
    price: "₹1,20,000",
    battery: "3.24 kWh",
    topSpeed: "85 km/h",
    image: revoltRV400,
  },
  {
    id: 4,
    brand: "Hero Electric",
    model: "Optima",
    type: "scooter",
    range: "50-100 km",
    price: "₹70,000",
    battery: "1.2 kWh",
    topSpeed: "45 km/h",
    image: heroOptima,
  },
  {
    id: 5,
    brand: "Bajaj",
    model: "Chetak",
    type: "scooter",
    range: "50-100 km",
    price: "₹1,00,000",
    battery: "3 kWh",
    topSpeed: "70 km/h",
    image: bajajChetak,
  },
  {
    id: 6,
    brand: "TVS",
    model: "iQube",
    type: "scooter",
    range: "50-100 km",
    price: "₹1,10,000",
    battery: "4.56 kWh",
    topSpeed: "82 km/h",
    image: tvsIqube,
  },
  {
    id: 7,
    brand: "Ampere",
    model: "Zeal",
    type: "scooter",
    range: "0-50 km",
    price: "₹50,000",
    battery: "1.8 kWh",
    topSpeed: "55 km/h",
    image: ampereZeal,
  },
  {
    id: 8,
    brand: "Pure EV",
    model: "EPluto 7G",
    type: "scooter",
    range: "50-100 km",
    price: "₹80,000",
    battery: "2.5 kWh",
    topSpeed: "60 km/h",
    image: pureEPluto,
  },
  {
    id: 9,
    brand: "Komaki",
    model: "XGT KM",
    type: "motorbike",
    range: "100-200 km",
    price: "₹1,30,000",
    battery: "3.6 kWh",
    topSpeed: "85 km/h",
    image: komakiXgtKM,
  },
  {
    id: 10,
    brand: "Kabira",
    model: "KM3000",
    type: "motorbike",
    range: "100-200 km",
    price: "₹1,75,000",
    battery: "4 kWh",
    topSpeed: "100 km/h",
    image: kabiraKM3000,
  },
  {
    id: 11,
    brand: "Okinawa",
    model: "Ridge+",
    type: "scooter",
    range: "50-100 km",
    price: "₹90,000",
    image: okinawaRidgePlus,
  },
  {
    id: 12,
    brand: "Hero Electric",
    model: "Flash",
    type: "scooter",
    range: "50-100 km",
    price: "₹60,000",
    image: heroFlash,
  },
  {
    id: 13,
    brand: "BattRE",
    model: "LoEV",
    type: "scooter",
    range: "0-50 km",
    price: "₹55,000",
    image: battreLoEV,
  },
  {
    id: 14,
    brand: "Kabira",
    model: "KM3000",
    type: "motorbike",
    range: "100-200 km",
    price: "₹1,75,000",
    image: kabiraKM3000,
  },
  {
    id: 15,
    brand: "Avon",
    model: "E Scoot",
    type: "scooter",
    range: "0-50 km",
    price: "₹45,000",
    image: avonEScoot,
  },
  {
    id: 16,
    brand: "Lohia",
    model: "Comfort",
    type: "scooter",
    range: "0-50 km",
    price: "₹40,000",
    image: lohiaComfort,
  },
  {
    id: 17,
    brand: "Hero Electric",
    model: "NYX",
    type: "scooter",
    range: "50-100 km",
    price: "₹85,000",
    image: heroNYX,
  },
  {
    id: 18,
    brand: "Ampere",
    model: "V48",
    type: "scooter",
    range: "0-50 km",
    price: "₹35,000",
    image: ampereV48,
  },
  {
    id: 19,
    brand: "Tunwal",
    model: "Sport 63",
    type: "motorbike",
    range: "100-200 km",
    price: "₹1,50,000",
    image: tunwalSport63,
  },
];

export default evOptions;
