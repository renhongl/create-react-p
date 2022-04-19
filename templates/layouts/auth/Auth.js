
import { Outlet } from 'react-router-dom';
import './Auth.css';

export default function Auth() {
    return (
        <section className="auth">
            <section className="left">
                left
            </section>
            <section className="right">
                <Outlet />
            </section>
        </section>
    )
}