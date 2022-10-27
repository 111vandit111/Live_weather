import moment from 'moment'
import Rain from "../assets/rain.png"
import Sunny from "../assets/sunny.png"
import Clouds from "../assets/clouds.png"
import Snow from '../assets/snow.png';
import notf from "../assets/notf.png"


function SummaryCard({day}) {
    const MyMap = new Map([
        ["Rain",Rain],
    ["Clear",Sunny],
    ["Clouds",Clouds],
    ["Snow",Snow],
    ["notf",notf]
])


if(MyMap.has(day.weather[0].main)) var day_icon = MyMap.get(day.weather[0].main) ;
else day_icon = notf;
    return (
        <li className="container p-4 flex items-center justify-center bg-gray-200 rounded-lg my-auto mr-1">
            <div className="my-auto">
                <p className="font-bold text-3xl text-pink-600 mb-2">{Math.round(day.main.temp)-270}&deg;C</p>
                <p className="text-2xl text-gray-800 tracking-widest">{day.weather[0].main}
                    <img src={day_icon} className="w-1/4 inline" />
                </p>
                <p className="text-gray-400 text-xs uppercase tracking-widest">{day.weather[0].description}</p>
                <p className="tracking-wider">{moment(day.dt_txt).format("dddd hh:mm")}am</p>
            </div>
        </li>
    )
}

export default SummaryCard
