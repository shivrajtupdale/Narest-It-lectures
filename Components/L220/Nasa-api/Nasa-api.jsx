
import { useEffect, useState } from "react";
import axios from "axios"; 

export function NasaApi() {
    const [MarsObj, setMarsObj] = useState({ photos: [] });

    useEffect(() => {
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=kiAKo7zAmdMc3ahoV9EBQdEYptM1nf8PYosEpx4a")
            .then(response => {
                // console.log(response.data) // to check the response data 
                setMarsObj(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []); // Add dependency array to ensure useEffect runs only once

    return (
        <div className="container-fluid">
            <h2>Mars Rover Photos</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Preview</th>
                        <th>Camera</th>
                        <th>Rover</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        MarsObj.photos.map(photo => (
                            <tr key={photo.id}>
                                <td>{photo.id}</td>
                                <td>
                                    <div>
                                        <a href={photo.img_src} className="btn mb-3"><span className="bi bi-download"></span></a>
                                    </div>
                                    <img src={photo.img_src}  width="100" /></td>
                                <td>
                                    {photo.camera.full_name}</td>
                                <td>{photo.rover.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}




