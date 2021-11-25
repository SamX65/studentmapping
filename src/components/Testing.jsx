import React from 'react';
import Student from './Student';

const Aryobj = () => {
    return ( 
        <div>
            <Student name="Peter" image="./images/1.jpg" regno="SP19-BSE-069" cgpa="2.89" />
            <Student name="Doc Oc" image="https://picsum.photos/200/200" regno="SP19-BSE-079" cgpa="2.99" />
            <Student name="Strange" image="https://picsum.photos/200/200" regno="SP19-BSE-089" cgpa="3.09" />
        </div>
     );
}
 
export default Aryobj;