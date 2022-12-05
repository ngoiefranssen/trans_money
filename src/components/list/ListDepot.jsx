

const ListsDepot = () =>{
    return (
        <div className="side-menu">
        <div className="brand-name">
            <h1>Brand</h1>
        </div>
        <ul>
            <li><img src="dashboard (2).png" alt="">&nbsp; <span>Dashboard</span> </li>
            <li><img src="reading-book (1).png" alt="">&nbsp;<span>Students</span> </li>
            <li><img src="teacher2.png" alt="">&nbsp;<span>Teachers</span> </li>
            <li><img src="school.png" alt="">&nbsp;<span>Schools</span> </li>
            <li><img src="payment.png" alt="">&nbsp;<span>Income</span> </li>
            <li><img src="help-web-button.png" alt="">&nbsp; <span>Help</span></li>
            <li><img src="settings.png" alt="">&nbsp;<span>Settings</span> </li>
        </ul>
    </div>
    <div className="container">
        <div className="header">
            <div className="nav">
                <div className="search">
                    <input type="text" placeholder="Search..">
                    <button type="submit"><img src="search.png" alt=""></button>
                </div>
                <div className="user">
                    <a href="#" className="btn">Add New</a>
                    <img src="notifications.png" alt="">
                    <div className="img-case">
                        <img src="user.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div className="content">
            <div className="cards">
                <div className="card">
                    <div className="box">
                        <h1>2194</h1>
                        <h3>Students</h3>
                    </div>
                    <div className="icon-case">
                        <img src="students.png" alt="">
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <h1>53</h1>
                        <h3>Teachers</h3>
                    </div>
                    <div className="icon-case">
                        <img src="teachers.png" alt="">
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <h1>5</h1>
                        <h3>Schools</h3>
                    </div>
                    <div className="icon-case">
                        <img src="schools.png" alt="">
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <h1>350000</h1>
                        <h3>Income</h3>
                    </div>
                    <div className="icon-case">
                        <img src="income.png" alt="">
                    </div>
                </div>
            </div>
            <div className="content-2">
                <div className="recent-payments">
                    <div className="title">
                        <h2>Recent Payments</h2>
                        <a href="#" className="btn">View All</a>
                    </div>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>School</th>
                            <th>Amount</th>
                            <th>Option</th>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td><a href="#" className="btn">View</a></td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td><a href="#" className="btn">View</a></td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td><a href="#" className="btn">View</a></td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td><a href="#" className="btn">View</a></td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td><a href="#" className="btn">View</a></td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>St. James College</td>
                            <td>$120</td>
                            <td><a href="#" className="btn">View</a></td>
                        </tr>
                    </table>
                </div>
                <div className="new-students">
                    <div className="title">
                        <h2>New Students</h2>
                        <a href="#" className="btn">View All</a>
                    </div>
                    <table>
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>option</th>
                        </tr>
                        <tr>
                            <td><img src="user.png" alt=""></td>
                            <td>John Steve Doe</td>
                            <td><img src="info.png" alt=""></td>
                        </tr>
                        <tr>
                            <td><img src="user.png" alt=""></td>
                            <td>John Steve Doe</td>
                            <td><img src="info.png" alt=""></td>
                        </tr>
                        <tr>
                            <td><img src="user.png" alt=""></td>
                            <td>John Steve Doe</td>
                            <td><img src="info.png" alt=""></td>
                        </tr>
                        <tr>
                            <td><img src="user.png" alt=""></td>
                            <td>John Steve Doe</td>
                            <td><img src="info.png" alt=""></td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ListsDepot;