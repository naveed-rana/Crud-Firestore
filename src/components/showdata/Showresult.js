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
         
       </tr>


   );
 }

}
export default Showresult;
