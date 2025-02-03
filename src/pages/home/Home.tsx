// Dependencies
import './Home.scss';

// Features
import Calculator from "./features/Calculator";
import CalcHistory from './features/CalcHistory';


const Home = () => {
    return (
        <main className="home">
           <Calculator/>
           <CalcHistory/>
        </main>
    );
};

export default Home;