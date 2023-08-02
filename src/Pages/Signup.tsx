import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  signInWithGooglePopup
} from "../firebase/firebase";
import Footer from "../scenes/footer";
import goggle from "../assets/goggle.png";
import apple from "../assets/apple.png";
import half from "../assets/half.png";


interface FormFields {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultFormFields: FormFields = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const Signup = () => {
  const [loading, setLoading ] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingApple, setLoadingApple] = useState(false);
  const navigateTo = useNavigate();
  
  const redirectToLogin = () => {
    setTimeout(()=> {
      navigateTo('/login');
    }, 2500);
  };

  const signInWithGoogle = async () => {
    setLoadingGoogle(true);
    await signInWithGooglePopup();
    alert('redirecting you to the login page');
    redirectToLogin();
    setLoadingGoogle(false);
  };

  const signInWithApple = async () => {
    setLoadingApple(true);
    await signInWithGooglePopup();
    alert('redirecting you to the login page');
    redirectToLogin();
    setLoadingApple(false);
  };
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { username, email, password, confirmPassword } = formFields;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      alert('password does not match');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        'https://scissor-api-lyit-onrender.com/auth/signup',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            username,
            email,
            password: password,
            confirm_password: password,
          }),
        }
      );
      if (response.ok) {
        alert('redirecting you to the login page');
        redirectToLogin();
      }else {
        alert('Request failed with status' + response.status);
        setLoading(false);
        throw new Error ('Request failed with status' + response.status);
      }

      resetFormFields();
      setLoading(false);
    } catch (err) {
      console.error('Error signing up', err);
      setLoading(false);
    }
  };
  return (
    <div>
    <div className="login">
      <form onSubmit={handleSubmit}>
        <p className="log-title">Sign up with:</p>
        <div className="media">
          <button className="media-btn" onClick={signInWithGoogle} disabled={loadingGoogle}>
            {loadingGoogle ? (
              loading
            ) : (
              <>
              <img alt="goggle" src={goggle} /> Google
            </>
            )}
          </button>
          <button className="media-btn" onClick={signInWithApple} disabled={loadingApple}>
            {loadingApple ? (
              loading
            ) : (
              <>
              <img alt="apple" src={apple} /> Apple
              </>
            )}
          </button>
        </div>
        <div className="straight">
          <img alt="line" src={half} />
          <span className="or">Or</span>
          <img alt="line" src={half} />
        </div>
        <input
          className="log-input"
          type="text"
          value={username}
          onChange={handleChange}
          name="username"
          placeholder="Username"
          id="username"
        />
        <input
          className="log-input"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="log-input"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          minLength={8}
        />
        <input
          className="log-input"
          type="password"
          name="password"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Retype Password"
          minLength={8}
        />
        <p className="require">password</p>
        <button className="log-btn" type="submit" disabled={loading}>
          {loading ? loading : 'Sign up'}
        </button>
        <p className="account">
          Already have an account?{" "}
          <Link to="/login" className="signup">
            Log in
          </Link>
        </p>
        <div className="condition">
          <p>By signing in with an account, you agree to</p>
          <p>
            {" "}
            Scissors{" "}
            <span className="service">
              Terms of service, Privacy Policy
            </span>{" "}
            and <span className="service">Acceptable Use Policy.</span>
          </p>
        </div>
      </form>
      </div>
      <div className="l-footer">
      <Footer />
      </div>
    </div>
  );
};

export default Signup;
