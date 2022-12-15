
import './App.css';
import { BrowserRouter,  Route , Routes} from 'react-router-dom';
import { MainPage } from './pages/MainPage.jsx';
import { NewsPage } from './pages/NewsPage';

function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/list' element={<MainPage/>} />
                <Route path="/list/:id" element={ <NewsPage/>} />
                <Route path="*" element={<MainPage/>} />
            </Routes>
        </BrowserRouter>
      );
}

export default App;
