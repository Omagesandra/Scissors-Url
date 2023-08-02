import React from "react";
import { Link } from "react-router-dom";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }
    
    return (
        <div>
            <p>Login required to shorten URLs.</p>
            <Link to="/login">
                <button>Login</button>
            </Link>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default LoginModal;