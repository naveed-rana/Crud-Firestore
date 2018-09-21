import React from 'react';
class Showresult extends React.Component {

 render (){
   return (

       <tr>
         <td>{this.props.data.p_id}</td>
          <td>{this.props.data.name}</td>
           <td>{this.props.data.price}</td>
             <td>
          <button onClick={(e) =>{
            this.props.remove(this.props.data.id);
          }}  className="btn btn-danger" >Delete</button>
          </td>

          <td>
          <button onClick={(e) =>{
            this.props.edit(this.props.data);
          }}  className="btn btn-danger" >edit</button>
          </td>
       </tr>


   );
 }

}
export default Showresult;
