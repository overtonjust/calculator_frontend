// Dependencies
import Calculator from "./components/Calculator";
import './Home.scss';

const Home = () => {
    return (
        <main className="home">
           <Calculator/>
           <section>calc info</section> 
        </main>
    );
};

export default Home;