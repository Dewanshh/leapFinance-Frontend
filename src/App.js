
import Footer from './componenets/Footer';
import Header from './componenets/Header';

import RoutePage from './componenets/RoutePage';
import './index.css';
function App() {
  return (
    <div className='h-screen'>
      <button type='button'className='bg-brand-blue w-full text-center py-3 px-4 md:px-0 text-xl text-white md:text-2lg cursor-pointer'><p>We are taking applications for Fall '24. <span className='underline underline-offset-2 font-semibold'>Apply today!</span></p></button>
    <Header />
    
    <RoutePage />
    <Footer/>
    </div>
  );
}

export default App;
