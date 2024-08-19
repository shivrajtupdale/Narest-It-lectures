import React from "react"


export function UserLogin(props){

    return (
        <>
        <div className="container-fluid">

            <dl className={props.Theme}>

                <h3>{props.Title}</h3>

                <dd>{props.UserLabel}</dd>
                <dt>
                    <input type={props.UserType} className="form-control"/>
                </dt>

                <dd>{props.Verify}</dd>
                <dt>
                    <input type={props.VerifyType} className="form-control"/>
                </dt>

                <button className={props.ButtonType}>Login</button>
            </dl>
        </div>
        </>
    )
}