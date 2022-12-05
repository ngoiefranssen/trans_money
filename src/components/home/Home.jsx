import "../home/homeStyle/homeStyle.css";


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
                </div>
            </div>
            <div className="my-4">
                <button className="btn btn-outline-dark ms-3">Transfert</button>
                <button className="btn btn-outline-success ms-3">Depot</button>
            </div>
        </div>
    )
};

export default Home;