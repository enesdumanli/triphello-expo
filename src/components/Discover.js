import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import { SvgUri } from "react-native-svg";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FavouritesContext } from "./TabNavigationHandler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Discover = ({ navigation }) => {
  const filters = [
    {
      name: "Traffic",
    },
    {
      name: "Crime",
    },
    {
      name: "Pollution",
    },
    {
      name: "Living Price",
    },
    {
      name: "Property Price",
    },
  ];

  const { favourites, setFavourites, regions, setRegions } =
    useContext(FavouritesContext);

  const [categories, setCategories] = useState(filters);
  const [isShowCity, setIsShowCity] = useState([
    { cityName: "fdfwe", showCity: false },
  ]);
  const CITY_INFORMATION_DENEME = [
    {
      Crime: 190,
      "Living Price": 67,
      name: "Lagos,Nigeria",
      Pollution: 190,
      "Property Price": 113,
      Traffic: 199,
    },
    {
      Crime: 140,
      "Living Price": 178,
      name: "Los Angeles, CA,United States",
      Pollution: 151,
      "Property Price": 57,
      Traffic: 198,
    },
    {
      Crime: 163,
      "Living Price": 84,
      name: "San Jose,Costa Rica",
      Pollution: 89,
      "Property Price": 86,
      Traffic: 197,
    },
    {
      Crime: 92,
      "Living Price": 11,
      name: "Colombo,Sri Lanka",
      Pollution: 118,
      "Property Price": 196,
      Traffic: 196,
    },
    {
      Crime: 170,
      "Living Price": 16,
      name: "Delhi,India",
      Pollution: 193,
      "Property Price": 124,
      Traffic: 195,
    },
    {
      Crime: 183,
      "Living Price": 30,
      name: "Dhaka,Bangladesh",
      Pollution: 197,
      "Property Price": 151,
      Traffic: 194,
    },
    {
      Crime: 120,
      "Living Price": 6,
      name: "Kolkata,India",
      Pollution: 175,
      "Property Price": 55,
      Traffic: 193,
    },
    {
      Crime: 175,
      "Living Price": 195,
      name: "San Francisco, CA,United States",
      Pollution: 99,
      "Property Price": 48,
      Traffic: 192,
    },
    {
      Crime: 179,
      "Living Price": 79,
      name: "Guatemala City,Guatemala",
      Pollution: 162,
      "Property Price": 128,
      Traffic: 191,
    },
    {
      Crime: 191,
      "Living Price": 63,
      name: "Mexico City,Mexico",
      Pollution: 182,
      "Property Price": 149,
      Traffic: 190,
    },
    {
      Crime: 172,
      "Living Price": 42,
      name: "Nairobi,Kenya",
      Pollution: 178,
      "Property Price": 158,
      Traffic: 189,
    },
    {
      Crime: 114,
      "Living Price": 19,
      name: "Mumbai,India",
      Pollution: 185,
      "Property Price": 185,
      Traffic: 188,
    },
    {
      Crime: 187,
      "Living Price": 50,
      name: "Manila,Philippines",
      Pollution: 192,
      "Property Price": 194,
      Traffic: 187,
    },
    {
      Crime: 150,
      "Living Price": 46,
      name: "Jakarta,Indonesia",
      Pollution: 186,
      "Property Price": 177,
      Traffic: 186,
    },
    {
      Crime: 165,
      "Living Price": 34,
      name: "Tehran,Iran",
      Pollution: 180,
      "Property Price": 192,
      Traffic: 185,
    },
    {
      Crime: 160,
      "Living Price": 17,
      name: "Bangalore,India",
      Pollution: 184,
      "Property Price": 12,
      Traffic: 184,
    },
    {
      Crime: 138,
      "Living Price": 21,
      name: "Cairo,Egypt",
      Pollution: 194,
      "Property Price": 97,
      Traffic: 183,
    },
    {
      Crime: 131,
      "Living Price": 28,
      name: "Istanbul,Turkey",
      Pollution: 155,
      "Property Price": 184,
      Traffic: 182,
    },
    {
      Crime: 192,
      "Living Price": 75,
      name: "Sao Paulo,Brazil",
      Pollution: 177,
      "Property Price": 181,
      Traffic: 181,
    },
    {
      Crime: 193,
      "Living Price": 37,
      name: "Lima,Peru",
      Pollution: 187,
      "Property Price": 164,
      Traffic: 180,
    },
    {
      Crime: 196,
      "Living Price": 71,
      name: "Rio de Janeiro,Brazil",
      Pollution: 150,
      "Property Price": 183,
      Traffic: 179,
    },
    {
      Crime: 188,
      "Living Price": 15,
      name: "Bogota,Colombia",
      Pollution: 156,
      "Property Price": 182,
      Traffic: 178,
    },
    {
      Crime: 89,
      "Living Price": 88,
      name: "Bangkok,Thailand",
      Pollution: 173,
      "Property Price": 191,
      Traffic: 177,
    },
    {
      Crime: 141,
      "Living Price": 180,
      name: "Miami, FL,United States",
      Pollution: 65,
      "Property Price": 40,
      Traffic: 176,
    },
    {
      Crime: 73,
      "Living Price": 102,
      name: "Moscow,Russia",
      Pollution: 102,
      "Property Price": 173,
      Traffic: 175,
    },
    {
      Crime: 195,
      "Living Price": 55,
      name: "Cape Town,South Africa",
      Pollution: 63,
      "Property Price": 42,
      Traffic: 174,
    },
    {
      Crime: 91,
      "Living Price": 190,
      name: "Boston, MA,United States",
      Pollution: 45,
      "Property Price": 54,
      Traffic: 173,
    },
    {
      Crime: 186,
      "Living Price": 143,
      name: "Houston, TX,United States",
      Pollution: 105,
      "Property Price": 2,
      Traffic: 172,
    },
    {
      Crime: 88,
      "Living Price": 107,
      name: "Saint Petersburg,Russia",
      Pollution: 125,
      "Property Price": 180,
      Traffic: 171,
    },
    {
      Crime: 97,
      "Living Price": 166,
      name: "Toronto,Canada",
      Pollution: 59,
      "Property Price": 108,
      Traffic: 170,
    },
    {
      Crime: 90,
      "Living Price": 5,
      name: "Chennai,India",
      Pollution: 169,
      "Property Price": 110,
      Traffic: 169,
    },
    {
      Crime: 116,
      "Living Price": 198,
      name: "Honolulu, HI,United States",
      Pollution: 58,
      "Property Price": 60,
      Traffic: 168,
    },
    {
      Crime: 182,
      "Living Price": 33,
      name: "Buenos Aires,Argentina",
      Pollution: 93,
      "Property Price": 187,
      Traffic: 167,
    },
    {
      Crime: 197,
      "Living Price": 68,
      name: "Johannesburg,South Africa",
      Pollution: 123,
      "Property Price": 3,
      Traffic: 166,
    },
    {
      Crime: 180,
      "Living Price": 160,
      name: "Atlanta, GA,United States",
      Pollution: 79,
      "Property Price": 15,
      Traffic: 165,
    },
    {
      Crime: 84,
      "Living Price": 95,
      name: "Amman,Jordan",
      Pollution: 171,
      "Property Price": 67,
      Traffic: 164,
    },
    {
      Crime: 87,
      "Living Price": 4,
      name: "Coimbatore,India",
      Pollution: 132,
      "Property Price": 43,
      Traffic: 163,
    },
    {
      Crime: 145,
      "Living Price": 192,
      name: "Seattle, WA,United States",
      Pollution: 36,
      "Property Price": 25,
      Traffic: 162,
    },
    {
      Crime: 181,
      "Living Price": 58,
      name: "Kuala Lumpur,Malaysia",
      Pollution: 145,
      "Property Price": 50,
      Traffic: 161,
    },
    {
      Crime: 121,
      "Living Price": 193,
      name: "Beirut,Lebanon",
      Pollution: 198,
      "Property Price": 186,
      Traffic: 160,
    },
    {
      Crime: 189,
      "Living Price": 177,
      name: "Chicago, IL,United States",
      Pollution: 90,
      "Property Price": 11,
      Traffic: 159,
    },
    {
      Crime: 64,
      "Living Price": 179,
      name: "Sydney,Australia",
      Pollution: 29,
      "Property Price": 83,
      Traffic: 158,
    },
    {
      Crime: 184,
      "Living Price": 48,
      name: "Belo Horizonte,Brazil",
      Pollution: 94,
      "Property Price": 174,
      Traffic: 157,
    },
    {
      Crime: 173,
      "Living Price": 189,
      name: "Washington, DC,United States",
      Pollution: 66,
      "Property Price": 51,
      Traffic: 156,
    },
    {
      Crime: 118,
      "Living Price": 187,
      name: "Nashville, TN,United States",
      Pollution: 52,
      "Property Price": 22,
      Traffic: 155,
    },
    {
      Crime: 157,
      "Living Price": 2,
      name: "Karachi,Pakistan",
      Pollution: 191,
      "Property Price": 167,
      Traffic: 154,
    },
    {
      Crime: 93,
      "Living Price": 10,
      name: "Pune,India",
      Pollution: 160,
      "Property Price": 41,
      Traffic: 153,
    },
    {
      Crime: 177,
      "Living Price": 51,
      name: "Guadalajara,Mexico",
      Pollution: 127,
      "Property Price": 56,
      Traffic: 152,
    },
    {
      Crime: 109,
      "Living Price": 181,
      name: "San Jose, CA,United States",
      Pollution: 84,
      "Property Price": 46,
      Traffic: 151,
    },
    {
      Crime: 52,
      "Living Price": 91,
      name: "Beijing,China",
      Pollution: 181,
      "Property Price": 199,
      Traffic: 150,
    },
    {
      Crime: 59,
      "Living Price": 92,
      name: "Shanghai,China",
      Pollution: 167,
      "Property Price": 198,
      Traffic: 149,
    },
    {
      Crime: 176,
      "Living Price": 56,
      name: "Quito,Ecuador",
      Pollution: 136,
      "Property Price": 116,
      Traffic: 148,
    },
    {
      Crime: 103,
      "Living Price": 12,
      name: "Hyderabad,India",
      Pollution: 172,
      "Property Price": 71,
      Traffic: 147,
    },
    {
      Crime: 142,
      "Living Price": 151,
      name: "Orlando, FL,United States",
      Pollution: 55,
      "Property Price": 6,
      Traffic: 146,
    },
    {
      Crime: 113,
      "Living Price": 25,
      name: "Kiev (Kyiv),Ukraine",
      Pollution: 139,
      "Property Price": 132,
      Traffic: 145,
    },
    {
      Crime: 106,
      "Living Price": 171,
      name: "Melbourne,Australia",
      Pollution: 25,
      "Property Price": 47,
      Traffic: 144,
    },
    {
      Crime: 4,
      "Living Price": 130,
      name: "Dubai,United Arab Emirates",
      Pollution: 88,
      "Property Price": 10,
      Traffic: 143,
    },
    {
      Crime: 156,
      "Living Price": 120,
      name: "Rome,Italy",
      Pollution: 144,
      "Property Price": 162,
      Traffic: 142,
    },
    {
      Crime: 129,
      "Living Price": 168,
      name: "Tampa, FL,United States",
      Pollution: 39,
      "Property Price": 8,
      Traffic: 141,
    },
    {
      Crime: 67,
      "Living Price": 170,
      name: "Brisbane,Australia",
      Pollution: 19,
      "Property Price": 36,
      Traffic: 140,
    },
    {
      Crime: 168,
      "Living Price": 161,
      name: "Jacksonville, FL,United States",
      Pollution: 69,
      "Property Price": 17,
      Traffic: 139,
    },
    {
      Crime: 133,
      "Living Price": 196,
      name: "New York, NY,United States",
      Pollution: 114,
      "Property Price": 85,
      Traffic: 138,
    },
    {
      Crime: 117,
      "Living Price": 155,
      name: "Charlotte, NC,United States",
      Pollution: 37,
      "Property Price": 5,
      Traffic: 137,
    },
    {
      Crime: 110,
      "Living Price": 183,
      name: "Denver, CO,United States",
      Pollution: 76,
      "Property Price": 20,
      Traffic: 136,
    },
    {
      Crime: 139,
      "Living Price": 164,
      name: "Dallas, TX,United States",
      Pollution: 73,
      "Property Price": 4,
      Traffic: 135,
    },
    {
      Crime: 162,
      "Living Price": 23,
      name: "Gurgaon,India",
      Pollution: 195,
      "Property Price": 26,
      Traffic: 134,
    },
    {
      Crime: 102,
      "Living Price": 142,
      name: "Mississauga,Canada",
      Pollution: 21,
      "Property Price": 93,
      Traffic: 133,
    },
    {
      Crime: 164,
      "Living Price": 127,
      name: "Manchester,United Kingdom",
      Pollution: 97,
      "Property Price": 52,
      Traffic: 132,
    },
    {
      Crime: 33,
      "Living Price": 66,
      name: "Bucharest,Romania",
      Pollution: 170,
      "Property Price": 92,
      Traffic: 131,
    },
    {
      Crime: 47,
      "Living Price": 24,
      name: "Izmir,Turkey",
      Pollution: 116,
      "Property Price": 122,
      Traffic: 130,
    },
    {
      Crime: 127,
      "Living Price": 96,
      name: "Novosibirsk,Russia",
      Pollution: 159,
      "Property Price": 142,
      Traffic: 129,
    },
    {
      Crime: 81,
      "Living Price": 131,
      name: "Antwerp,Belgium",
      Pollution: 113,
      "Property Price": 38,
      Traffic: 128,
    },
    {
      Crime: 83,
      "Living Price": 148,
      name: "Austin, TX,United States",
      Pollution: 61,
      "Property Price": 32,
      Traffic: 127,
    },
    {
      Crime: 78,
      "Living Price": 135,
      name: "Raleigh, NC,United States",
      Pollution: 28,
      "Property Price": 30,
      Traffic: 126,
    },
    {
      Crime: 112,
      "Living Price": 122,
      name: "Belfast,United Kingdom",
      Pollution: 30,
      "Property Price": 63,
      Traffic: 125,
    },
    {
      Crime: 128,
      "Living Price": 172,
      name: "Auckland,New Zealand",
      Pollution: 33,
      "Property Price": 114,
      Traffic: 124,
    },
    {
      Crime: 49,
      "Living Price": 147,
      name: "Montreal,Canada",
      Pollution: 48,
      "Property Price": 69,
      Traffic: 123,
    },
    {
      Crime: 58,
      "Living Price": 138,
      name: "Salt Lake City, UT,United States",
      Pollution: 129,
      "Property Price": 23,
      Traffic: 122,
    },
    {
      Crime: 144,
      "Living Price": 156,
      name: "Dublin,Ireland",
      Pollution: 67,
      "Property Price": 77,
      Traffic: 121,
    },
    {
      Crime: 86,
      "Living Price": 182,
      name: "San Diego, CA,United States",
      Pollution: 60,
      "Property Price": 58,
      Traffic: 120,
    },
    {
      Crime: 152,
      "Living Price": 20,
      name: "Medellin,Colombia",
      Pollution: 128,
      "Property Price": 144,
      Traffic: 119,
    },
    {
      Crime: 28,
      "Living Price": 188,
      name: "Tel Aviv-Yafo,Israel",
      Pollution: 83,
      "Property Price": 179,
      Traffic: 118,
    },
    {
      Crime: 123,
      "Living Price": 98,
      name: "Panama City,Panama",
      Pollution: 130,
      "Property Price": 99,
      Traffic: 117,
    },
    {
      Crime: 21,
      "Living Price": 175,
      name: "Seoul,South Korea",
      Pollution: 115,
      "Property Price": 190,
      Traffic: 116,
    },
    {
      Crime: 39,
      "Living Price": 1,
      name: "Islamabad,Pakistan",
      Pollution: 68,
      "Property Price": 118,
      Traffic: 115,
    },
    {
      Crime: 166,
      "Living Price": 109,
      name: "Athens,Greece",
      Pollution: 109,
      "Property Price": 130,
      Traffic: 114,
    },
    {
      Crime: 153,
      "Living Price": 165,
      name: "London,United Kingdom",
      Pollution: 112,
      "Property Price": 156,
      Traffic: 113,
    },
    {
      Crime: 94,
      "Living Price": 169,
      name: "Perth,Australia",
      Pollution: 16,
      "Property Price": 24,
      Traffic: 112,
    },
    {
      Crime: 167,
      "Living Price": 153,
      name: "Paris,France",
      Pollution: 133,
      "Property Price": 175,
      Traffic: 111,
    },
    {
      Crime: 185,
      "Living Price": 26,
      name: "Almaty,Kazakhstan",
      Pollution: 174,
      "Property Price": 107,
      Traffic: 110,
    },
    {
      Crime: 42,
      "Living Price": 27,
      name: "Baku,Azerbaijan",
      Pollution: 168,
      "Property Price": 136,
      Traffic: 109,
    },
    {
      Crime: 147,
      "Living Price": 163,
      name: "Phoenix, AZ,United States",
      Pollution: 104,
      "Property Price": 21,
      Traffic: 108,
    },
    {
      Crime: 101,
      "Living Price": 35,
      name: "Lodz,Poland",
      Pollution: 146,
      "Property Price": 103,
      Traffic: 107,
    },
    {
      Crime: 199,
      "Living Price": 78,
      name: "Caracas,Venezuela",
      Pollution: 165,
      "Property Price": 178,
      Traffic: 106,
    },
    {
      Crime: 82,
      "Living Price": 173,
      name: "Vancouver,Canada",
      Pollution: 24,
      "Property Price": 119,
      Traffic: 105,
    },
    {
      Crime: 53,
      "Living Price": 8,
      name: "Ahmedabad,India",
      Pollution: 163,
      "Property Price": 80,
      Traffic: 104,
    },
    {
      Crime: 149,
      "Living Price": 132,
      name: "Brussels,Belgium",
      Pollution: 124,
      "Property Price": 45,
      Traffic: 103,
    },
    {
      Crime: 85,
      "Living Price": 18,
      name: "Ankara,Turkey",
      Pollution: 141,
      "Property Price": 76,
      Traffic: 102,
    },
    {
      Crime: 151,
      "Living Price": 14,
      name: "Odessa (Odesa),Ukraine",
      Pollution: 126,
      "Property Price": 131,
      Traffic: 101,
    },
    {
      Crime: 29,
      "Living Price": 184,
      name: "Singapore,Singapore",
      Pollution: 46,
      "Property Price": 159,
      Traffic: 100,
    },
    {
      Crime: 10,
      "Living Price": 174,
      name: "Hong Kong,Hong Kong",
      Pollution: 147,
      "Property Price": 197,
      Traffic: 99,
    },
    {
      Crime: 70,
      "Living Price": 3,
      name: "Lahore,Pakistan",
      Pollution: 176,
      "Property Price": 95,
      Traffic: 98,
    },
    {
      Crime: 154,
      "Living Price": 185,
      name: "Portland, OR,United States",
      Pollution: 42,
      "Property Price": 31,
      Traffic: 97,
    },
    {
      Crime: 44,
      "Living Price": 89,
      name: "Kuwait City,Kuwait",
      Pollution: 152,
      "Property Price": 111,
      Traffic: 96,
    },
    {
      Crime: 146,
      "Living Price": 146,
      name: "Lyon,France",
      Pollution: 98,
      "Property Price": 81,
      Traffic: 95,
    },
    {
      Crime: 66,
      "Living Price": 64,
      name: "Budapest,Hungary",
      Pollution: 100,
      "Property Price": 139,
      Traffic: 94,
    },
    {
      Crime: 26,
      "Living Price": 108,
      name: "Riyadh,Saudi Arabia",
      Pollution: 131,
      "Property Price": 13,
      Traffic: 93,
    },
    {
      Crime: 32,
      "Living Price": 106,
      name: "Jeddah (Jiddah),Saudi Arabia",
      Pollution: 148,
      "Property Price": 9,
      Traffic: 92,
    },
    {
      Crime: 119,
      "Living Price": 101,
      name: "Yekaterinburg,Russia",
      Pollution: 166,
      "Property Price": 68,
      Traffic: 91,
    },
    {
      Crime: 69,
      "Living Price": 134,
      name: "Cork,Ireland",
      Pollution: 32,
      "Property Price": 33,
      Traffic: 90,
    },
    {
      Crime: 161,
      "Living Price": 116,
      name: "Montevideo,Uruguay",
      Pollution: 85,
      "Property Price": 165,
      Traffic: 89,
    },
    {
      Crime: 41,
      "Living Price": 104,
      name: "Madrid,Spain",
      Pollution: 92,
      "Property Price": 98,
      Traffic: 88,
    },
    {
      Crime: 2,
      "Living Price": 118,
      name: "Doha,Qatar",
      Pollution: 117,
      "Property Price": 53,
      Traffic: 87,
    },
    {
      Crime: 136,
      "Living Price": 125,
      name: "San Antonio, TX,United States",
      Pollution: 82,
      "Property Price": 1,
      Traffic: 86,
    },
    {
      Crime: 79,
      "Living Price": 61,
      name: "Belgrade,Serbia",
      Pollution: 142,
      "Property Price": 171,
      Traffic: 85,
    },
    {
      Crime: 174,
      "Living Price": 76,
      name: "Santiago,Chile",
      Pollution: 157,
      "Property Price": 168,
      Traffic: 84,
    },
    {
      Crime: 135,
      "Living Price": 7,
      name: "Kharkiv,Ukraine",
      Pollution: 107,
      "Property Price": 115,
      Traffic: 83,
    },
    {
      Crime: 37,
      "Living Price": 83,
      name: "Lisbon,Portugal",
      Pollution: 53,
      "Property Price": 170,
      Traffic: 82,
    },
    {
      Crime: 126,
      "Living Price": 72,
      name: "Monterrey,Mexico",
      Pollution: 158,
      "Property Price": 66,
      Traffic: 81,
    },
    {
      Crime: 22,
      "Living Price": 53,
      name: "Tbilisi,Georgia",
      Pollution: 161,
      "Property Price": 133,
      Traffic: 80,
    },
    {
      Crime: 15,
      "Living Price": 150,
      name: "Tokyo,Japan",
      Pollution: 71,
      "Property Price": 125,
      Traffic: 79,
    },
    {
      Crime: 178,
      "Living Price": 39,
      name: "Curitiba,Brazil",
      Pollution: 43,
      "Property Price": 138,
      Traffic: 78,
    },
    {
      Crime: 132,
      "Living Price": 144,
      name: "Milan,Italy",
      Pollution: 149,
      "Property Price": 169,
      Traffic: 77,
    },
    {
      Crime: 61,
      "Living Price": 60,
      name: "Wroclaw,Poland",
      Pollution: 137,
      "Property Price": 123,
      Traffic: 76,
    },
    {
      Crime: 72,
      "Living Price": 157,
      name: "Calgary,Canada",
      Pollution: 20,
      "Property Price": 18,
      Traffic: 75,
    },
    {
      Crime: 55,
      "Living Price": 52,
      name: "Gdansk,Poland",
      Pollution: 111,
      "Property Price": 157,
      Traffic: 74,
    },
    {
      Crime: 159,
      "Living Price": 154,
      name: "Las Vegas, NV,United States",
      Pollution: 96,
      "Property Price": 16,
      Traffic: 73,
    },
    {
      Crime: 31,
      "Living Price": 65,
      name: "Warsaw,Poland",
      Pollution: 122,
      "Property Price": 150,
      Traffic: 72,
    },
    {
      Crime: 50,
      "Living Price": 123,
      name: "Stuttgart,Germany",
      Pollution: 80,
      "Property Price": 96,
      Traffic: 71,
    },
    {
      Crime: 171,
      "Living Price": 70,
      name: "Brasilia,Brazil",
      Pollution: 47,
      "Property Price": 129,
      Traffic: 70,
    },
    {
      Crime: 35,
      "Living Price": 41,
      name: "Bursa,Turkey",
      Pollution: 77,
      "Property Price": 94,
      Traffic: 69,
    },
    {
      Crime: 148,
      "Living Price": 13,
      name: "Dnipro,Ukraine",
      Pollution: 179,
      "Property Price": 106,
      Traffic: 68,
    },
    {
      Crime: 134,
      "Living Price": 186,
      name: "Sacramento, CA,United States",
      Pollution: 81,
      "Property Price": 73,
      Traffic: 67,
    },
    {
      Crime: 194,
      "Living Price": 47,
      name: "Porto Alegre,Brazil",
      Pollution: 106,
      "Property Price": 147,
      Traffic: 66,
    },
    {
      Crime: 104,
      "Living Price": 38,
      name: "Tirana,Albania",
      Pollution: 188,
      "Property Price": 154,
      Traffic: 65,
    },
    {
      Crime: 105,
      "Living Price": 158,
      name: "Edmonton,Canada",
      Pollution: 35,
      "Property Price": 7,
      Traffic: 64,
    },
    {
      Crime: 46,
      "Living Price": 167,
      name: "Luxembourg,Luxembourg",
      Pollution: 15,
      "Property Price": 137,
      Traffic: 63,
    },
    {
      Crime: 100,
      "Living Price": 136,
      name: "Hamburg,Germany",
      Pollution: 38,
      "Property Price": 100,
      Traffic: 62,
    },
    {
      Crime: 198,
      "Living Price": 54,
      name: "Durban,South Africa",
      Pollution: 95,
      "Property Price": 14,
      Traffic: 61,
    },
    {
      Crime: 1,
      "Living Price": 112,
      name: "Abu Dhabi,United Arab Emirates",
      Pollution: 75,
      "Property Price": 28,
      Traffic: 60,
    },
    {
      Crime: 124,
      "Living Price": 124,
      name: "Bologna,Italy",
      Pollution: 110,
      "Property Price": 104,
      Traffic: 59,
    },
    {
      Crime: 60,
      "Living Price": 40,
      name: "Poznan,Poland",
      Pollution: 138,
      "Property Price": 146,
      Traffic: 58,
    },
    {
      Crime: 3,
      "Living Price": 115,
      name: "Taipei,Taiwan",
      Pollution: 86,
      "Property Price": 189,
      Traffic: 57,
    },
    {
      Crime: 111,
      "Living Price": 152,
      name: "Columbus, OH,United States",
      Pollution: 27,
      "Property Price": 34,
      Traffic: 56,
    },
    {
      Crime: 51,
      "Living Price": 82,
      name: "Shenzhen,China",
      Pollution: 121,
      "Property Price": 195,
      Traffic: 55,
    },
    {
      Crime: 155,
      "Living Price": 59,
      name: "Ho Chi Minh City,Vietnam",
      Pollution: 196,
      "Property Price": 193,
      Traffic: 54,
    },
    {
      Crime: 12,
      "Living Price": 86,
      name: "Zagreb,Croatia",
      Pollution: 44,
      "Property Price": 127,
      Traffic: 53,
    },
    {
      Crime: 68,
      "Living Price": 80,
      name: "Porto,Portugal",
      Pollution: 54,
      "Property Price": 126,
      Traffic: 52,
    },
    {
      Crime: 115,
      "Living Price": 140,
      name: "Stockholm,Sweden",
      Pollution: 7,
      "Property Price": 143,
      Traffic: 51,
    },
    {
      Crime: 54,
      "Living Price": 57,
      name: "Krakow (Cracow),Poland",
      Pollution: 164,
      "Property Price": 153,
      Traffic: 50,
    },
    {
      Crime: 8,
      "Living Price": 99,
      name: "Muscat,Oman",
      Pollution: 51,
      "Property Price": 27,
      Traffic: 49,
    },
    {
      Crime: 77,
      "Living Price": 97,
      name: "Riga,Latvia",
      Pollution: 57,
      "Property Price": 75,
      Traffic: 48,
    },
    {
      Crime: 6,
      "Living Price": 145,
      name: "Munich,Germany",
      Pollution: 23,
      "Property Price": 161,
      Traffic: 47,
    },
    {
      Crime: 38,
      "Living Price": 105,
      name: "Nicosia,Cyprus",
      Pollution: 120,
      "Property Price": 44,
      Traffic: 46,
    },
    {
      Crime: 158,
      "Living Price": 103,
      name: "Thessaloniki,Greece",
      Pollution: 134,
      "Property Price": 105,
      Traffic: 45,
    },
    {
      Crime: 80,
      "Living Price": 9,
      name: "Lviv,Ukraine",
      Pollution: 87,
      "Property Price": 101,
      Traffic: 44,
    },
    {
      Crime: 169,
      "Living Price": 49,
      name: "Minsk,Belarus",
      Pollution: 70,
      "Property Price": 145,
      Traffic: 43,
    },
    {
      Crime: 143,
      "Living Price": 113,
      name: "Turin,Italy",
      Pollution: 153,
      "Property Price": 62,
      Traffic: 42,
    },
    {
      Crime: 98,
      "Living Price": 74,
      name: "Sofia,Bulgaria",
      Pollution: 154,
      "Property Price": 84,
      Traffic: 41,
    },
    {
      Crime: 74,
      "Living Price": 22,
      name: "Kathmandu,Nepal",
      Pollution: 199,
      "Property Price": 188,
      Traffic: 40,
    },
    {
      Crime: 11,
      "Living Price": 69,
      name: "Yerevan,Armenia",
      Pollution: 108,
      "Property Price": 166,
      Traffic: 39,
    },
    {
      Crime: 65,
      "Living Price": 194,
      name: "Oslo,Norway",
      Pollution: 18,
      "Property Price": 109,
      Traffic: 38,
    },
    {
      Crime: 75,
      "Living Price": 44,
      name: "Hanoi,Vietnam",
      Pollution: 189,
      "Property Price": 172,
      Traffic: 37,
    },
    {
      Crime: 43,
      "Living Price": 162,
      name: "Adelaide,Australia",
      Pollution: 6,
      "Property Price": 19,
      Traffic: 36,
    },
    {
      Crime: 40,
      "Living Price": 87,
      name: "Bratislava,Slovakia",
      Pollution: 64,
      "Property Price": 155,
      Traffic: 35,
    },
    {
      Crime: 122,
      "Living Price": 45,
      name: "Sarajevo,Bosnia And Herzegovina",
      Pollution: 143,
      "Property Price": 102,
      Traffic: 34,
    },
    {
      Crime: 36,
      "Living Price": 93,
      name: "Valencia,Spain",
      Pollution: 74,
      "Property Price": 61,
      Traffic: 33,
    },
    {
      Crime: 13,
      "Living Price": 62,
      name: "Cluj-Napoca,Romania",
      Pollution: 78,
      "Property Price": 148,
      Traffic: 32,
    },
    {
      Crime: 48,
      "Living Price": 117,
      name: "Edinburgh,United Kingdom",
      Pollution: 31,
      "Property Price": 59,
      Traffic: 31,
    },
    {
      Crime: 99,
      "Living Price": 128,
      name: "Berlin,Germany",
      Pollution: 62,
      "Property Price": 91,
      Traffic: 30,
    },
    {
      Crime: 9,
      "Living Price": 100,
      name: "Ljubljana,Slovenia",
      Pollution: 17,
      "Property Price": 134,
      Traffic: 29,
    },
    {
      Crime: 62,
      "Living Price": 133,
      name: "Rotterdam,Netherlands",
      Pollution: 40,
      "Property Price": 35,
      Traffic: 28,
    },
    {
      Crime: 108,
      "Living Price": 29,
      name: "Chisinau,Moldova",
      Pollution: 135,
      "Property Price": 87,
      Traffic: 27,
    },
    {
      Crime: 5,
      "Living Price": 199,
      name: "Zurich,Switzerland",
      Pollution: 4,
      "Property Price": 82,
      Traffic: 26,
    },
    {
      Crime: 19,
      "Living Price": 94,
      name: "Prague,Czech Republic",
      Pollution: 49,
      "Property Price": 176,
      Traffic: 25,
    },
    {
      Crime: 130,
      "Living Price": 31,
      name: "Skopje,North Macedonia",
      Pollution: 183,
      "Property Price": 141,
      Traffic: 24,
    },
    {
      Crime: 76,
      "Living Price": 73,
      name: "Kaunas,Lithuania",
      Pollution: 26,
      "Property Price": 79,
      Traffic: 23,
    },
    {
      Crime: 95,
      "Living Price": 137,
      name: "Christchurch,New Zealand",
      Pollution: 14,
      "Property Price": 29,
      Traffic: 22,
    },
    {
      Crime: 25,
      "Living Price": 197,
      name: "Geneva,Switzerland",
      Pollution: 22,
      "Property Price": 78,
      Traffic: 21,
    },
    {
      Crime: 137,
      "Living Price": 111,
      name: "Barcelona,Spain",
      Pollution: 140,
      "Property Price": 88,
      Traffic: 20,
    },
    {
      Crime: 34,
      "Living Price": 90,
      name: "Nizhny Novgorod,Russia",
      Pollution: 41,
      "Property Price": 135,
      Traffic: 19,
    },
    {
      Crime: 125,
      "Living Price": 119,
      name: "Gothenburg,Sweden",
      Pollution: 9,
      "Property Price": 70,
      Traffic: 18,
    },
    {
      Crime: 45,
      "Living Price": 149,
      name: "Wellington,New Zealand",
      Pollution: 1,
      "Property Price": 49,
      Traffic: 17,
    },
    {
      Crime: 16,
      "Living Price": 110,
      name: "Tallinn,Estonia",
      Pollution: 12,
      "Property Price": 112,
      Traffic: 16,
    },
    {
      Crime: 57,
      "Living Price": 114,
      name: "Limassol,Cyprus",
      Pollution: 101,
      "Property Price": 65,
      Traffic: 15,
    },
    {
      Crime: 56,
      "Living Price": 159,
      name: "Amsterdam,Netherlands",
      Pollution: 34,
      "Property Price": 90,
      Traffic: 14,
    },
    {
      Crime: 71,
      "Living Price": 43,
      name: "Varna,Bulgaria",
      Pollution: 119,
      "Property Price": 74,
      Traffic: 13,
    },
    {
      Crime: 14,
      "Living Price": 191,
      name: "Reykjavik,Iceland",
      Pollution: 3,
      "Property Price": 64,
      Traffic: 12,
    },
    {
      Crime: 24,
      "Living Price": 85,
      name: "Vilnius,Lithuania",
      Pollution: 10,
      "Property Price": 120,
      Traffic: 11,
    },
    {
      Crime: 27,
      "Living Price": 176,
      name: "Copenhagen,Denmark",
      Pollution: 11,
      "Property Price": 72,
      Traffic: 10,
    },
    /* {
      Crime: 7,
      "Living Price": 126,
      name: "The Hague (Den Haag),Netherlands",
      Pollution: 8,
      "Property Price": 37,
      Traffic: 9,
    }, */
    {
      Crime: 23,
      "Living Price": 81,
      name: "Brno,Czech Republic",
      Pollution: 72,
      "Property Price": 160,
      Traffic: 8,
    },
    {
      Crime: 107,
      "Living Price": 129,
      name: "Frankfurt,Germany",
      Pollution: 56,
      "Property Price": 121,
      Traffic: 7,
    },
    {
      Crime: 20,
      "Living Price": 139,
      name: "Helsinki,Finland",
      Pollution: 2,
      "Property Price": 117,
      Traffic: 6,
    },
    {
      Crime: 17,
      "Living Price": 141,
      name: "Eindhoven,Netherlands",
      Pollution: 13,
      "Property Price": 39,
      Traffic: 5,
    },
    /* {
      Crime: 18,
      "Living Price": 36,
      name: "Timisoara,Romania",
      Pollution: 103,
      "Property Price": 89,
      Traffic: 4,
    }, */
    {
      Crime: 96,
      "Living Price": 32,
      name: "Novi Sad,Serbia",
      Pollution: 91,
      "Property Price": 152,
      Traffic: 3,
    },
    {
      Crime: 30,
      "Living Price": 121,
      name: "Vienna,Austria",
      Pollution: 5,
      "Property Price": 140,
      Traffic: 2,
    },
    {
      Crime: 63,
      "Living Price": 77,
      name: "Split,Croatia",
      Pollution: 50,
      "Property Price": 163,
      Traffic: 1,
    },
  ];
  const [regionFilteredCityInformation, setRegionFilteredCityInformation] =
    useState([]);
  const [CITY_INFORMATION, setCITY_INFORMATION] = useState(
    CITY_INFORMATION_DENEME
  );
  const REGION_FILTERED_ALL_DATA = JSON.parse(
    JSON.stringify(regionFilteredCityInformation)
  );

  let regionFilteredCities = [];

  useEffect(() => {
    console.log(regions.length);

    if (regions.length > 0) {
      regions.map((regions) =>
        regions.map((regionCity) =>
          CITY_INFORMATION.filter(
            (city) =>
              city.name === regionCity && regionFilteredCities.push(city)
          )
        )
      );
      setCITY_INFORMATION(regionFilteredCities);
      setRegionFilteredCityInformation(regionFilteredCities);
    } else {
      setRegionFilteredCityInformation(CITY_INFORMATION_DENEME);
    }
  }, [regions]);

  const countries = CITY_INFORMATION.map((city) => city.name.split(",")[1]);
  const cities = CITY_INFORMATION.map((city) => city.name.split(",")[0]);

  const data = CITY_INFORMATION;

  let new_data = [];

  const appHandler = () => {
    let i = categories.length;

    categories.map((filter) => {
      data.map((city) => {
        city[filter.name] = city[filter.name] * i;
      });
      i--;
    });

    data.map((city) => {
      let sum = 0;
      categories.map((filter) => {
        sum += city[filter.name];
      });
      new_data.push({ name: city.name, sum: sum });
    });

    let temp_city = new_data[0];
    new_data.map((city) => {
      city;
      if (city.sum < temp_city.sum) {
        temp_city = city;
      }
    });

    setIsShowCity([
      { cityName: temp_city.name, showCity: !isShowCity[0].showCity },
    ]);

    regionFilteredCityInformation.length > 0
      ? setCITY_INFORMATION(REGION_FILTERED_ALL_DATA)
      : setCITY_INFORMATION(CITY_INFORMATION_DENEME);
  };

  const visitNearby = (temp_city) => {
    let sameCountryCities = [];
    let itemCountry = temp_city.split(",")[1];

    for (let i = 0; i < countries.length; i++) {
      if (countries[i] === itemCountry) {
        sameCountryCities.push(cities[i]);
      }
    }

    return sameCountryCities;
  };

  const renderItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              alignSelf: "center",
              marginVertical: 5,
              width: 200,
              borderRadius: 5,
              backgroundColor: "#80CFA9",
              opacity: 0.8,
            },
          ]}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontStyle: "italic",
              fontWeight: "600",
            }}
          >
            {item.name}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#4C6663",
              paddingHorizontal: 5,
              borderRadius: 8,
            }}
            onPress={() => {
              setCategories(
                categories.filter((filterName) => filterName.name !== item.name)
              );
            }}
          >
            <Text style={{ color: "white" }}>x</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <GestureHandlerRootView style={{ height: "100%" }}>
      <ImageBackground
        style={{
          justifyContent: "center",
          paddingHorizontal: 60,
          height: "100%",
        }}
        source={require("../utils/wallpaper.jpg")}
      >
        <SvgUri
          style={{ alignSelf: "center" }}
          width="100"
          height="100"
          uri="https://svgshare.com/i/oBX.svg"
        />
        {/* <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "black",
            }}
          >
            Move the slider to set your budget
          </Text>
          <Slider values={[0, 10000]} />
        </View> */}
        <View
          style={{
            marginHorizontal: -40,
          }}
        >
          <Text
            style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
          >
            Drag and drop the filters to set your preferences.
          </Text>

          <TouchableOpacity
            style={{
              top: 30,
              borderRadius: 12,
              alignItems: "center",
              alignSelf: "baseline",
            }}
            onPress={() => {
              setCategories(filters);
              setRegions([]);
              setCITY_INFORMATION(CITY_INFORMATION_DENEME);
            }}
          >
            <MaterialCommunityIcons name="refresh" size={24} color={"black"} />
            <Text style={{ textAlignVertical: "center", fontWeight: "500" }}>
              Refresh Preferences
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: 50 }}>
          <DraggableFlatList
            data={categories}
            onDragEnd={(thing) => {
              setCategories(thing.data);
              thing.data;
            }}
            keyExtractor={(item) => item.name}
            renderItem={renderItem}
          />
          <TouchableOpacity
            onPress={appHandler}
            style={{
              padding: 10,
              opacity: 0.75,
              backgroundColor: "#A7E2E3",
              borderRadius: 10,
              marginTop: 25,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 24,
                borderRadius: 8,
                color: "#2a2e2b",
              }}
            >
              Give me city!
            </Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={isShowCity[0].showCity}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 22,
            }}
          >
            <View
              style={{
                margin: 20,
                backgroundColor: "white",
                borderRadius: 20,
                padding: 35,
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: "#0B4F6C",
                  textAlign: "center",
                }}
              >
                Let's visit {isShowCity[0].cityName}!
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "60%",
                  marginTop: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    setIsShowCity([{ cityName: "", showCity: false }])
                  }
                  style={{
                    borderRadius: 10,
                    padding: 10,
                  }}
                >
                  <Text style={{ color: "black", fontWeight: "600" }}>
                    Try again!
                  </Text>
                  <MaterialCommunityIcons
                    name="refresh"
                    size={48}
                    color={"black"}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setFavourites([...favourites, isShowCity[0].cityName]);
                    setIsShowCity([{ cityName: "", showCity: false }]);
                  }}
                  style={{
                    borderRadius: 10,
                    width: 80,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#D81E5B",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    Like it!
                  </Text>
                  <MaterialCommunityIcons
                    name="cards-heart"
                    size={48}
                    color={"#D81E5B"}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  let nearbyCities = visitNearby(isShowCity[0].cityName);
                  navigation.navigate("NearbyCities", {
                    baseCountry: isShowCity[0].cityName.split(",")[1],
                    nearbyCities: nearbyCities,
                  });
                  setIsShowCity([{ cityName: "", showCity: false }]);
                }}
                style={{
                  backgroundColor: "#E3F09B",
                  borderRadius: 12,
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    margin: 20,
                    color: "#5B5941",
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {`or visit a nearby city in ${
                    isShowCity[0].cityName.split(",")[1]
                  }!`}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    alignItems: "center",
  },
  rowItem: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Discover;
