import Page404 from '@views/404';
import PageAbout from '@views/about';
import PageContact from '@views/contact';
import PageHome from '@views/home';
import PageRegister from '@views/register';
import PageSigUp from '@views/sigup';
import { Route, Routes } from 'react-router-dom';


const RouterPage = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<PageHome></PageHome>}></Route>
                <Route path="/contact" element={<PageContact></PageContact>}></Route>
                <Route path="/about" element={<PageAbout></PageAbout>}></Route>
                <Route path="/signup" element={<PageSigUp></PageSigUp>}></Route>
                <Route path="/register" element={<PageRegister></PageRegister>}></Route>
                <Route path="*" element={<Page404></Page404>}></Route>

            </Routes>
        </div>
    );
};

export default RouterPage;