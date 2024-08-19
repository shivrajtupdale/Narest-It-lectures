

export function User({data}){
    // alert(data);

    const {name,age,location} = data;
    return (
        <>
        <h1>User Component</h1>
        <h3>Name is {name}</h3>
        <h3>My age is {age}</h3>
        <h3>My current location is {location }</h3>
        </>
    )
}