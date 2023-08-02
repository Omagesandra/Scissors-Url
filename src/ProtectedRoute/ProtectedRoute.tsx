import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/UserContext';
import { useEffect, useState } from 'react';

const ProtectedRoute: React.FC = () =>  {
    const {user, setUser} = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        const authUser = localStorage.getItem('user');
        if (authUser) {
            const parsedUser = JSON.parse(authUser);
            setUser(parsedUser);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    if (isLoading){
        return (
            <div>
                <div>
                    loading
                </div>
            </div>
        );
    }
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;