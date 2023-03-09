
import { Menu } from "@mui/material";
import MenuAccordion from "../../components/MenuAccordion";
import MenuSwitch from "../../components/MenuSwitch"
import ResponsiveAppBar from "../../components/ResponsiveAppBar";


const Home = () => {
    return (
        <div>

<ResponsiveAppBar />

<MenuSwitch />

<MenuAccordion />
        </div>

        
    )
}


export default Home;