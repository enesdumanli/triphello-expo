import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React, { useContext } from "react";
import { SvgUri } from "react-native-svg";

import { FavouritesContext } from "./TabNavigationHandler";

export default function Profile() {
  const { regions, setRegions } = useContext(FavouritesContext);
  const [generalRegions, setGeneralRegions] = React.useState([]);

  const REGIONS = {
    Europe: [
      "Berlin,Germany",
      "Porto,Portugal",
      "Bucharest,Romania",
      "Budapest,Hungary",
      "Athens,Greece",
      "Kharkiv,Ukraine",
      "Belgrade,Serbia",
      "Brussels,Belgium",
      "Bratislava,Slovakia",
      "Sarajevo,Bosnia And Herzegovina",
      "Copenhagen,Denmark",
      "Ankara,Turkey",
      "Odessa (Odesa),Ukraine",
      "Lyon,France",
      "Yekaterinburg,Russia",
      "Brno,Czech Republic",
      "Dublin,Ireland",
      "Cork,Ireland",
      "Hamburg,Germany",
      "Helsinki,Finland",
      "Krakow (Cracow),Poland",
      "Tbilisi,Georgia",
      "Rotterdam,Netherlands",
      "Chisinau,Moldova",
      "Zurich,Switzerland",
      "Lisbon,Portugal",
      "Bologna,Italy",
      "Poznan,Poland",
      "Ljubljana,Slovenia",
      "London,United Kingdom",
      "Luxembourg,Luxembourg",
      "Nicosia,Cyprus",
      "Frankfurt,Germany",
      "Eindhoven,Netherlands",
      "Madrid,Spain",
      "Munich,Germany",
      "Novi Sad,Serbia",
      "Vienna,Austria",
      "Split,Croatia",
      "Oslo,Norway",
      "Lodz,Poland",
      "Paris,France",
      "Gdansk,Poland",
      "Izmir,Turkey",
      "Milan,Italy",
      "Novosibirsk,Russia",
      "Wroclaw,Poland",
      "Antwerp,Belgium",
      "Skopje,Macedonia",
      "Baku,Azerbaijan",
      "Almaty,Kazakhstan",
      "Geneva,Switzerland",
      "Kaunas,Lithuania",
      "Prague,Czech Republic",
      "Thessaloniki,Greece",
      "Riga,Latvia",
      "Rome,Italy",
      "Valencia,Spain",
      "Cluj-Napoca,Romania",
      "Lviv,Ukraine",
      "Yerevan,Armenia",
      "Sofia,Bulgaria",
      "Stockholm,Sweden",
      "Tallinn,Estonia",
      "Vilnius,Lithuania",
      "Warsaw,Poland",
      "Zagreb,Croatia",
      "Varna,Bulgaria",
      "Revkjavik,Iceland",
      "Gothenburg,Sweden",
      "Limassol,Cyprus",
      "Istanbul,Turkey",
      "Barcelona,Spain",
      "Nizhny Novgorod,Russia",
      "Moscow,Russia",
      "Saint Petersburg,Russia",
      "Amsterdam,Netherlands",
      "Stuttgart,Germany",
      "Turin,Italy",
      "Bursa,Turkey",
      "Dnipro, Ukraine",
      "Tirana,Albania",
      "Birmingham,United Kingdom",
      "Belfast, United Kingdom",
      "Bristol,United Kingdom",
      "Edinburgh,United Kingdom",
      "Manchester,United Kingdom",
      "Kiev (Kyiv),Ukraine",
      "Minsk,Belarus",
    ],
    Asia: [
      "Tokyo,Japan",
      "Seoul,South Korea",
      "Jakarta,Indonesia",
      "Manila,Philippines",
      "Mumbai,India",
      "Delhi,India",
      "Shanghai,China",
      "Shenzhen,China",
      "Karachi,Pakistan",
      "Beijing,China",
      "Dhaka,Bangladesh",
      "Osaka,Japan",
      "Colombo,Sri Lanka",
      "Bangalore,India",
      "Coimbatore,India",
      "Kuala Lumpur,Malaysia",
      "Sydney,Australia",
      "Pune,India",
      "Kolkata, India",
      "Bangkok,Thailand",
      "Chennai,India",
      "Tehran,Iran",
      "Hong Kong,Hong Kong",
      "Ho Chi Minh City,Vietnam",
      "Singapore,Singapore",
      "Taipei,Taiwan",
      "Hyderabad,India",
      "Melbourne,Australia",
      "Brisbane,Australia",
      "Gurgaon,India",
      "Auckland,New Zealand",
      "Perth,Australia",
      "Islamabad,Pakistan",
      "Ahmedabad,India",
      "Lahore,Pakistan",
      "Kathmandu,Nepal",
      "Hanoi,Vietnam",
      "Adelaide,Australia",
      "Christchurch,New Zealand",
      "Wellington,New Zealand",
    ],
    NorthAmerica: [
      "Los Angeles, CA,United States",
      "New York, NY,United States",
      "Las Vegas, NV,United States",
      "Sacramento, CA,United States",
      "Miami, FL,United States",
      "Chicago, IL,United States",
      "Houston, TX,United States",
      "Phoenix, AZ,United States",
      "Philadelphia, PA,United States",
      "San Antonio, TX,United States",
      "San Diego, CA,United States",
      "Dallas, TX,United States",
      "Atlanta, GA,United States",
      "San Jose, CA,United States",
      "Honolulu, HI,United States",
      "Austin, TX,United States",
      "Jacksonville, FL,United States",
      "San Francisco, CA,United States",
      "Indianapolis, IN,United States",
      "Raleigh, NC,United States",
      "Columbus, OH,United States",
      "Fort Worth, TX,United States",
      "Charlotte, NC,United States",
      "Detroit, MI,United States",
      "El Paso, TX,United States",
      "Salt Lake City, UT,United States",
      "Memphis, TN,United States",
      "Seattle, WA,United States",
      "Denver, CO,United States",
      "Tampa, FL,United States",
      "Washington, DC,United States",
      "Boston, MA,United States",
      "Nashville, TN,United States",
      "Baltimore, MD,United States",
      "Oklahoma City, OK,United States",
      "Orlando, FL,United States",
      "Portland, OR,United States",
      "Toronto,Canada",
      "Montreal,Canada",
      "Vancouver,Canada",
      "Calgary,Canada",
      "Ottawa,Canada",
      "Edmonton,Canada",
      "Winnipeg,Canada",
      "Mississauga,Canada",
    ],
    SouthAmerica: [
      "Sao Paulo,Brazil",
      "Rio de Janeiro,Brazil",
      "Buenos Aires,Argentina",
      "Guatemala City,Guatemala",
      "Mexico City,Mexico",
      "San Salvador,El Salvador",
      "Havana,Cuba",
      "Santo Domingo,Dominican Republic",
      "San Pedro Sula,Honduras",
      "Belo Horizonte,Brazil",
      "Guadalajara,Mexico",
      "Medellin,Colombia",
      "Monterrey,Mexico",
      "Santiago,Chile",
      "Lima,Peru",
      "Bogota,Colombia",
      "Caracas,Venezuela",
      "Quito,Ecuador",
      "Guayaquil,Ecuador",
      "Georgetown,Guyana",
      "Asuncion,Paraguay",
      "Montevideo,Uruguay",
      "La Paz,Bolivia",
      "Paramaribo,Suriname",
      "San Jose,Costa Rica",
      "Panama City,Panama",
      "Curitiba,Brazil",
      "Porto Alegre,Brazil",
    ],
    Africa_MiddleEast: [
      "Cairo,Egypt",
      "Johannesburg,South Africa",
      "Cape Town,South Africa",
      "Durban,South Africa",
      "Alexandria,Egypt",
      "Lagos,Nigeria",
      "Riyadh,Saudi Arabia",
      "Nairobi,Kenya",
      "Amman,Jordan",
      "Beirut,Lebanon",
      "Abu Dhabi,United Arab Emirates",
      "Dubai,United Arab Emirates",
      "Tel Aviv-Yafo,Israel",
      "Casablanca,Morocco",
      "Algiers,Algeria",
      "Kuwait City,Kuwait",
      "Riyadh,Saudi Arabia",
      "Tunis,Tunisia",
      "Jeddah (Jiddah),Saudi Arabia",
      "Doha,Qatar",
      "Muscat,Oman",
    ],
  };

  return (
    <ImageBackground
      style={{
        paddingHorizontal: 60,
        height: "100%",
      }}
      source={require("../utils/wallpaper.jpg")}
    >
      <SvgUri
        style={{ alignSelf: "center", top: 51 }}
        width="100"
        height="100"
        uri="https://svgshare.com/i/oBX.svg"
      />

      <View style={{ top: 50 }}>
        {regions.length === 0 && (
          <>
            <TouchableOpacity
              style={{
                backgroundColor: "#8FF7A7",
                margin: 10,
                padding: 12,
                borderRadius: 12,
                opacity: 0.8,
                alignItems: "center",
              }}
              onPress={() => {
                setRegions([REGIONS.Europe]);
                setGeneralRegions(["Europe"]);
              }}
            >
              <Text style={{ color: "#757761" }}>Filter Europe</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "#8FF7A7",
                margin: 10,
                padding: 12,
                borderRadius: 12,
                opacity: 0.8,
                alignItems: "center",
              }}
              onPress={() => {
                setRegions([REGIONS.NorthAmerica]);
                setGeneralRegions(["North America"]);
              }}
            >
              <Text style={{ color: "#757761" }}>Filter North America</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "#8FF7A7",
                margin: 10,
                padding: 12,
                borderRadius: 12,
                opacity: 0.8,
                alignItems: "center",
              }}
              onPress={() => {
                setRegions([REGIONS.SouthAmerica]);
                setGeneralRegions(["South America"]);
              }}
            >
              <Text style={{ color: "#757761" }}>Filter South America</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "#8FF7A7",
                margin: 10,
                padding: 12,
                borderRadius: 12,
                opacity: 0.8,
                alignItems: "center",
              }}
              onPress={() => {
                setRegions([REGIONS.Asia]);
                setGeneralRegions(["Asia"]);
              }}
            >
              <Text style={{ color: "#757761" }}>Filter Asia</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "#8FF7A7",
                margin: 10,
                padding: 12,
                borderRadius: 12,
                opacity: 0.8,
                alignItems: "center",
              }}
              onPress={() => {
                setRegions([REGIONS.Africa_MiddleEast]);
                setGeneralRegions(["Africa & Middle East"]);
              }}
            >
              <Text style={{ color: "#757761" }}>
                Filter Africa & Middle East
              </Text>
            </TouchableOpacity>
          </>
        )}

        {regions.length > 0 && (
          <View>
            <Text
              style={{
                fontSize: 16,
                color: "#0E273C",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              You are shown countries from only {generalRegions[0]}
            </Text>

            <Text style={{ top: 20, fontStyle: "italic", fontWeight: "bold" }}>
              You need to refresh preferences on Discover page to filter another
              region.
            </Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}
