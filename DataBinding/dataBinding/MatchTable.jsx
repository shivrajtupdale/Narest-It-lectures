

export function MatchTab(){
    var iccTable = [
        {Team : "IND", Matches : 9, Won : 9, Lost :0, PTS : 18, NRR : "+2.570",Flag :"Ind.jpg"},
        {Team : "SA", Matches : 9, Won : 9, Lost :0, PTS : 18, NRR : "+2.570",Flag :"SA.jpg"},
        {Team : "AUS", Matches : 9, Won : 9, Lost :0, PTS : 18, NRR : "+2.570",Flag :"Aus.jpg"}
    ];

    return (
        <>
        <h1>ICC World Cup 2023</h1>
        <table className="table w-50 table-hover">
            <thead>
                <tr>
                    <th>Team</th>
                    <th>Matches</th>
                    <th>Won</th>
                    <th>Lost</th> 
                    <th>PTS</th>
                    <th>NRR</th>
                </tr>
            </thead>
            <tbody>
            
                {
                    iccTable.map(item => 
                       <tr key = {item.Team}>
                        <td><img src = {item.Flag} width = "40px"></img>{item.Team}</td>
                        <td>{item.Matches}</td>
                        <td>{item.Won}</td>
                        <td>{item.Lost}</td>
                        <td>{item.PTS}</td>
                        <td>{item.NRR}</td>
                       </tr> 
                    )
                }
        
            </tbody>
        </table>
        </>

    )
}