import React, {useState } from 'react';
import './style.css'
const Spigot = () => { 
    let [ocr , setOcr] = useState(10); 
    let [out , setOut] = useState('') ;
    let [iter, setIter] = useState(0);
    let [time, setTime] = useState(0); 
    let a = [],LEN = (ocr / 4 + 1) * 14, b = 0, c = LEN, d = 0, e = 0, f = 10000, g = 0, h = 0;
    function clicker(){
        function calculate(){
    function mod(m, n) {
        return ((m % n) + n) % n;
} 
    for (; a.length !== LEN; a.push(0)){
    for (; (b = c -= 14) > 0;) {
        for (; --b > 0;){
            d *= b; 
            if (h === 0) {
                d += 2000 * f;
            } else {
                d += a[b] * f; 
            }
            g = b + b - 1;
            a[b] = mod(d, g);
            d = Math.floor(d / g);
        }
        h = Math.floor(e + d / f); 
       setOut(out += h);
       
        h = h.length;
        d = e = mod(d, f);
        setIter(iter++) 
    }
}
    console.log(out);
}
const start= new Date().getTime();
calculate(); 
const end = new Date().getTime();
setTime(end - start); 
}
const cleanState = () => {setOut(''); setIter(''); setTime(''); console.clear()}
    return(
    <div>
        <h1>Введите количество чисел 10,100,1000,10000</h1>
        <input className = "input" type = "text" value = {ocr} onChange={event => setOcr(event.target.value)}/>
        <h1>Ваше число: {ocr}</h1>  
      
       <button className = "Buttons" onClick={clicker}>Вывод</button>
       <button className = "Buttons" onClick={cleanState}>Сброс</button>

        <h1 className = "Vivod">{out}</h1>
        <h1>Кол-во операций: {iter}</h1>
        <h1>Время выполнения кода: {time}ms</h1>
    </div>
    )
    };  export default Spigot;
