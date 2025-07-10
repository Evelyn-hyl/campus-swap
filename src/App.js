import  SearchResults  from './pages/SearchResults/SearchResults';
import './App.css';
import ProductPage from './pages/ProductPage/ProductPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

export default function App() {
  return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<SearchResults />} />
                    <Route path='/product/:id' element={<ProductPage />} />
                </Routes>
            </Router>
        </>
    );
}