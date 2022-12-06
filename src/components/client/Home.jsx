import '../client/style/homeStyle.css';
import { NavLink } from 'react-router-dom';


const Home = () =>{

    return (
        <div className="container home">
            <div className="row">
                <div className="col-md-6 image">
                    <img src="./assets/star.jpg" width="30%" height="200px" />
                </div>
               <div className="col-md-3">
                    <p className="">Name : </p>
                    <p className="">Last name : </p>
                    <p className="">Email : </p>
                    <p className="">Name : </p>
                    <a href="#" ></a>
                </div>
            </div>
            <div className="my-4">
                <button className="btn btn-outline-primary btn-floating m-1 ms-3"
                        >Transfert</button> {/* style="background-color: #3b5998" */}
                <button className="btn btn-outline-success ms-3">Depot</button>
                <NavLink type='button' className="btn btn-outline-dark ms-3"
                         to={`/edit_client/:{id}`} 
                         data-toggle="modal" data-target="#exampleModal" d
                         ata-whatever="@mdo">Edit Information</NavLink>
            </div>
        </div>
    )
};

export default Home;