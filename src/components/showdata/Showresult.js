import React from 'react';
class Showresult extends React.Component {

 render (){
   console.log('====================================');
   console.log(this.props.data);
   console.log('====================================');
   return (

       <tr>
         <td>{this.props.data.title}</td>
          <td>{this.props.data.discription}</td>
           <td>{this.props.data.timestamp}</td>
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
