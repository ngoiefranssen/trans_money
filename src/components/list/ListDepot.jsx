

const ListsDepot = () =>{
    return (
        <div className="container">
            <div className="content">
                <div className="content-2">
                    <div className="recent-lists-depots">
                        <div className="title">
                            <h2>List depot</h2>
                            <a href="#" className="btn">View All</a>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                <th>Montant</th>
                                <th>Date</th>
                                <th>Devise</th>
                                <th>Option</th>
                            </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                <td>John Doe</td>
                                <td>St. James College</td>
                                <td>$120</td>
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

export default ListsDepot;