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
                <button className="btn btn-outline-Hex btn-floating m-1"
                       background="#ac2bac" >Transfert</button>
                <button className="btn btn-outline-primary btn-floating m-1"
                        background="#0082ca">Depot</button>
                <NavLink type='button' className="btn btn-primary btn-floating m-1"
                         to={`/edit_client/:{id}`}
                         backgroundColor="#333333">Edit Information</NavLink>
            </div>  
        </div>
    )
};

export default Home;