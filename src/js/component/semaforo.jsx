import React, { useState } from 'react';


const Semaforo = () => {

const [ color, setColor] = useState("naranja");

return (
      <div>
        <div className='trafficLight'>
        <button className={`rojo ${color == 'rojo' ? 'on' : ''}`} onClick={() => setColor('rojo')}></button>
         <button className={`naranja ${color == 'naranja' ? 'on' : ''}`} onClick={() => setColor('naranja')}></button>
         <button className={`verde ${color ==='verde' ? 'on' : ''}`} onClick={() => setColor('verde')}></button>
        </div>
      </div>
    );
};

export default Semaforo;