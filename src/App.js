import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Rectangle } from './components/Rectangle';
import ConverterDescription from './components/ConverterDescription';
import Footer from './components/Footer';
import Converter from './components/Converter';
import { connect } from 'react-redux';

function App ({ visibility }) {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
            <Rectangle/>
            <Converter style={{ display:visibility.converterVisible ? 'block' : 'none' }}/>
            <ConverterDescription style={{ display:visibility.converterVisible ? 'none' : 'block' }}/>
            <BrowserRouter>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

const mapStateToProps = (state) => ({
    visibility:state.visibility,
});
export default connect(mapStateToProps)(App);
