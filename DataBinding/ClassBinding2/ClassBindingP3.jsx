import { useState } from "react";

export function ClassBindingSort (){

    const [SortClass,setSortClass] = useState("bi bi-sort-alpha-down btn btn-danger p-5");

    function HandleSortCLick(e){
        setSortClass((SortClass === "bi bi-sort-alpha-down btn btn-danger p-5") ? "bi bi-sort-alpha-up btn btn-success p-5" : "bi bi-sort-alpha-down btn btn-danger p-5")
    }

    return (
        <>
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
            <button style ={{}} onClick={HandleSortCLick} className={SortClass}></button>
        </div>
        </>
    )
}