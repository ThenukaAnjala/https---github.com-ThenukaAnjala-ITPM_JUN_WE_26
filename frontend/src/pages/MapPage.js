import Map from "../components/Map"
import Notify from "../components/Notify"
import UserIndgrat from "../components/UserIndgrat"
export default function MapPage(){
    return(
        <div className="flex container mx-auto">
            <UserIndgrat/>
            <div className=" flex col w-3/4">
                <Notify/>
                <Map/>
            </div>
        </div>
    )
}