

const ListTransfert = () =>{
    return (
        <div className="container">
            <div className="content">
                <div className="content-2">
                    <div className="recent-lists-depots">
                        <div className="title">
                            <h2>List Transfert</h2>
                            <a href="#" className="btn">View All</a>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                <th>Montant envoye</th>
                                <th>Tva</th>
                                <th>Montant/Tva</th>
                                <th>Code transaction</th>
                                <th>Option</th>
                            </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                <td>John Doe</td>
                                <td>St. James College</td>
                                <td>$120</td>
                                <td>25158f125dde358e</td>
                                <td><a href="#" className="btn">View</a></td>
                            </tr>
                            </tfoot>
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListTransfert;