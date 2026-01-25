import { Outlet } from 'react-router-dom';
import Navbar from '@components/Navbar/Navbar.tsx';

export default function Musings() {
    return (<>
        <Navbar />
        <Outlet />
    </>);
}