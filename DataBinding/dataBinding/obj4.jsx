import React from 'react';

export function DataBind4(){
    var topics = [
        {Title : "HTML",
         Description : "It is a markup language"
        },
        {Title : "CSS",
        Description : "It configures style for html"
       }
    ];

    return (
        <>
        <h1>Case 4 :</h1>
        <dl>
            {topics.map(item =>
            // here we are using an empty element coz it should return only one fragment/element. 
            <React.Fragment key = {item.Title}> 
                <dt key = {item.Title}>{item.Title}</dt>
                <dd key = {item.Description}>{item.Description}</dd>
            </React.Fragment>
            )
            }
        </dl>
        </>
    )
}