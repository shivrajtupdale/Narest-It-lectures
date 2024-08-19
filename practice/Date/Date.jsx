

import React from "react";

export function PresentDate(){


    var departure = new Date();
    var months = ["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEPT","OCT","NOV","DEC"];
    var weekDays = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    return(
        <>
            DEPARTURE : {departure.getDate()} {weekDays[departure.getDay]} {months[departure.getMonth()]} at {departure.toLocaleTimeString()}
        </>
    )
}