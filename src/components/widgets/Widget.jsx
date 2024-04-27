import "./Widget.scss"
import NorthEastIcon from '@mui/icons-material/NorthEast';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

const Widget = ({type}) => {

//temporary
const amount=100;
const diff =20;


  let data ;

  switch(type){
    case "user":
      data={
        title:"USERS",
        isMoney:false,
        link:"See all users",
        icon:(
          <PersonOutlineOutlinedIcon className="icon" />
        )
      }
      break;
      case "order":
        data={
          title:"ORDER",
          isMoney:false,
          link:"view all users",
          icon:(
            <ShoppingCartOutlinedIcon className="icon" />
          )
        }
        break;
        case "earning":
          data={
            title:"EARNING",
            isMoney:true,
            link:"View net earnings",
            icon:(
              <MonetizationOnOutlinedIcon className="icon" />
            )
          }
          break;
          case "balance":
            data={
              title:"BALANCE",
              isMoney:true,
              link:"See ditails",
              icon:(
                <AccountBalanceOutlinedIcon className="icon" />
              )
            }
            break;
      default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="conuter">{data.isMoney && "$"} {amount}</span>
        <span className="link"> {data.link} </span>
      </div>
      <div className="rigth">
        <span className="percentage  psitive">
          <NorthEastIcon  />
          {diff}%
           </span>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget

