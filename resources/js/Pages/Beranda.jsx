import Navbar from '@/Layouts/Navbar';
import { Head } from '@inertiajs/react';


export default function Dashboard({ auth }) {
    return (
        <>
        <Head title="Beranda" />
        <Navbar
            auth={auth.auth}>
        </Navbar>
        </>
    );
}
