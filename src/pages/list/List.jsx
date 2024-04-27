import "./List.scss"
import {
    Outlet
  } from "react-router-dom";

const List = () => {
    return ( 
    <div className="List">
        <Outlet/>
        List
    </div> );
}
 
export default List;