import "./Single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import Avatar from '@mui/material/Avatar';
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
const Single = () => {
    return (
        <dive className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">

                            <Avatar
                                alt="Remy Sharp"
                                src="https://images.pexels.com/photos/3586091/pexels-photo-3586091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="avatar"
                                sx={{width:100,height:100}}
                            />
                            <div className="details">
                                <h1 className="name" >Jane Doe</h1>
                                <div className="itemDetail">
                                    <span className="itemKey">Emaile:</span>
                                    <span className="itemValue">jane@gmail.com</span>
                                </div>
                                <div className="itemDetail">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+212 6 354 635</span>
                                </div>
                                <div className="itemDetail">
                                    <span className="itemKey">Adreass:</span>
                                    <span className="itemValue">Tetouan Marocoo Nr 13</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart />

                    </div>
                </div>
                <div className="bottom">
                    <Table />
                </div>
            </div>
        </dive>);
}

export default Single;