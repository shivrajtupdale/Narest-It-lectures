import { useCallback, useEffect, useState } from "react"




export function TimerDemo(){

    const[Now] = useState(new Date());
    const[Status,setStatus] = useState("");
    const[Time,setTime] = useState("");

    function GetSalutation(){
         let date = new Date();
         let hrs = date.getHours();

         if(hrs >= 0 && hrs <= 12){
            setStatus("Good Morning!");
         }else if(hrs > 12 && hrs <= 16){
            setStatus("Good Afternoon!");
         }else{
            setStatus("Good Evening!");

         }
    };

    function Clock(){
        let now = new Date;
        let time = now.toLocaleTimeString();
        setTime(time);
    }


    useEffect(()=>{
        GetSalutation();
        setInterval(Clock,1000);
        // setTimeout(Clock,5000);
    },[])

    return (
        <>
        <div className="Container-fluid">
            <header className="bg-dark text-white p-2 d-flex justify-content-between">
                <div>
                    <span>Shopper.</span>
                </div>
                <div>
                    <span>{Status}</span>
                </div>
                <div>
                    <span className="bi bi-calendar pe-5">{Now.toDateString()}</span>
                    <span className="bi bi-clock">{Time}</span>
                </div>
            </header>
        </div>
        </>
    )
}