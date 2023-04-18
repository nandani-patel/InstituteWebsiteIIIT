import { Border } from "react-bootstrap-icons";
import { BoardofGoverners } from "../../dummydata";
import './Boardofgoverners.css';
const Boardofgoverners = () => {
  return (
    <div className="outermost">
    <div className="mx-auto" style={{ width: "95%" }}><div className='items' >
      {BoardofGoverners.map((val) => {
        return (
          <div className='item flexSB' style={{padding : "0.5rem"}}>
            <table >   
              <th><td style={{ padding: "0.8rem" }}>{val.id}</td></th>
              <td style={{ padding: "0.8rem" }}>
                <div className='img'>
                  <img src={val.coverimg} alt='' />
                </div>
              </td>
              <td style={{ padding: "0.8rem"}}> <h2 style={{fontSize : "1rem"}}>{val.name}</h2> </td>
              <td style={{ padding: "0.8rem"   }}>  <p><h6>{val.designation}</h6></p> </td>
              <td style={{ padding: "0.8rem" }}>  <p><h6>{val.address}</h6></p> </td>
            </table>
          </div>
        )
      })}
    </div></div>
    </div>
  )
}

export default Boardofgoverners