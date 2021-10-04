import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import CourseDetail from './Components/CourseDetail/CourseDetail';
import Courses from './Components/Courses/Courses';
import Error from './Components/Error/Error';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '95vh' }}>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/Home'>
            <Home></Home>
          </Route>
          <Route path='/Courses'>
            <Courses></Courses>
          </Route>
          <Route path='/About'>
            <About></About>
          </Route>
          <Route path='/ContactUs'>
            <ContactUs></ContactUs>
          </Route>
          <Route path='/Detail/:courseId'>
            <CourseDetail></CourseDetail>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
