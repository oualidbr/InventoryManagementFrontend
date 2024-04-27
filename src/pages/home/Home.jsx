 import "./Home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widgets/Widget";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";
const Home = () => {
    return (  
        <div className="home">
            <Sidebar/>
            <div className="homecontaner">
                <Navbar/>
                <div className="widgets">
                    <Widget  type="user"/>
                    <Widget  type="order"/>
                    <Widget  type="earning"/>
                    <Widget  type="balance"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart/>
                </div>
                <div className="listContainer">
                   
                    <Table/>
                </div>
            </div>
        </div>
    );
}
 
export default Home;