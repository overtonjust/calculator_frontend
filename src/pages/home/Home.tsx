// Dependencies
import './Home.scss';

// Features
import Calculator from "./features/Calculator";
import CalcHistory from './features/CalcHistory';

// Context
import { CalcProvider } from './context/CalcContext';

const Home = () => {

    return (
        <main className="home">
            <CalcProvider>
                <Calculator/>
                <CalcHistory/>
            </CalcProvider>
        </main>
    );
};

export default Home;