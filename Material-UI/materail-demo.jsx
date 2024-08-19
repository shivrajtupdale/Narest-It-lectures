
import React from "react";
import {TextField} from "@mui/material";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'




export function MaterialDemo(){

    return(
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="container-fluid">
                    <h1>DATE PICKER</h1>
                    <DatePicker/>
                </div>
            </LocalizationProvider>
        </>
    )
}