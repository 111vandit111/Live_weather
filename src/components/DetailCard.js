import moment from 'moment';
import Rain from "../assets/rain.png"
import Sunny from "../assets/sunny.png"
import Clouds from "../assets/clouds.png"
import Snow from '../assets/snow.png';
import notf from "../assets/notf.png"

function DetailCard({ data}) {
    const {clouds, main, weather} = data.list[0]
    const MyMap = new Map([
        ["Rain",Rain],
    ["Clear",Sunny],
    ["Clouds",Clouds],
    ["Snow",Snow],
    ["notf",notf]
])

console.log(weather[0].main)
if(MyMap.has(weather[0].main)) var i = MyMap.get(weather[0].main) ;
else i = notf;
    return (
        <div className="container p-4 flex items-center justify-center shadow-lg rounded-lg bg-white h-1/3 mb-auto">
            <div className="my-auto">
            <p className="font-bold text-5xl text-pink-800 mb-2">{Math.round(main.temp)-270}&deg;C</p>
            <p className="text-4xl text-gray-800 tracking-widest">{weather[0].main}
           
                <img src={i} className="w-1/4 inline" />
            </p>
            <p className="text-gray-400 text-xs uppercase tracking-widest">{weather[0].description}</p>
            <p className="tracking-wider">{moment().format("dddd MMM YYYY")}</p>
            </div>
            <div className="my-2 border-l-2 border-gray-100 p-2">
            <p className="text-gray-400 text-lg">RealFeel: {Math.round(main.feels_like)-270}&deg;C</p>
            <p className="text-gray-400 text-lg">Humidity: {main.humidity}%</p>
            <p className="text-gray-400 text-lg">Cloud Cover: {clouds.all}%</p>
            <p className="text-gray-400 text-lg">Min Temp: {Math.round(main.temp_min)-270}&deg;C</p>
            <p className="text-gray-400 text-lg">Max Temp: {Math.round(main.temp_max)-270}&deg;C</p>
            </div>
        </div>
    )
}



export default DetailCard
