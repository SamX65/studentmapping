import React from 'react';

const Student = (props) => {
    return ( 
        <div>
            <img src={props.image} />
            <h2>Hello {props.name}</h2>
            <h4>Reg: {props.regno}</h4>
            <h4>CGPA: {props.cgpa}</h4>
        </div>
     );
}
 
export default Student;