import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../scenes/footer";
import { signInWithGooglePopup } from "../firebase/firebase";
import goggle from "../assets/goggle.png";
import apple from "../assets/apple.png";
import half from "../assets/half.png";
import { useAuth } from "../contexts/UserContext";

interface FormFields {
  username: string;
  password: string;
}
const defaultFormFields: FormFields = {
  username: '',
  password: '',
}

const Login = () => {
  const {user, setUser} = useAuth();
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingApple, setLoadingApple] = useState(false);
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const navigateTo = useNavigate();
  const { username, password } = formFields;

  const  navigateToDash = () => {
    setTimeout(() => {
      navigateTo('/dashboard');
    }, 2500);
  };
  const signInWithApple = async () => {
    setLoadingApple(true);
    try {
      await signInWithGooglePopup();
      navigateToDash();
      setLoadingApple(false);
    } catch (error: any) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect Password.')
          break;
        case 'auth/user-not-found':
          alert ('User not found, check your email');
          break;
        case 'auth/email-already-in-use':
          alert ('Email already in use');
          break;
        default:
          alert (`An error has occurred, $(error)`);
          setLoadingApple(false);
      }
      console.log(error);
      setLoadingApple(false);
    }
  };

  const signInWithGoogle = async () => {
    setLoadingGoogle(true);
    try {
      await signInWithGooglePopup();
      navigateToDash();
      setLoadingGoogle(false);
    } catch (error: any) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect Password.')
          break;
        case 'auth/user-not-found':
          alert ('User not found, check your email');
          break;
        case 'auth/email-already-in-use':
          alert ('Email already in use');
          break;
        default:
          alert (`An error has occurred, $(error)`);
          setLoadingGoogle(false);
      }
      console.log(error);
      setLoadingGoogle(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const urlSearchParams = new URLSearchParams({
      grant_type: '',
      ...formFields,
      scope: '',
      client_id: '',
      client_secret: '',
    });

    try {
      const response = await fetch(
        'https://scissor-api-lyit-onrender.com/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: urlSearchParams.toString(),
        }
      );

      if (!response.ok) {
        setLoading(false);
        console.log('Failed', response);
        if (response.status === 403) {
          alert('Incorrect Username and Password');
        }
        return;
      }

      const data = await response.json();
      const token = data.access_token;
      const user = {
        username: formFields.username,
        password: formFields.password,
        token: token,
      };
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      alert("Login Successful!!");
      resetFormFields();
      navigateToDash();
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.error('Error:', error.message);
    }
  };
     useEffect(() => {
      if (user) navigateToDash();
     }, []);
  return (
    <div>
    <div className="login">
    <p className="log-title">Log in with:</p>
        <div className="media">
          <button className="media-btn" onClick={signInWithGoogle} disabled={loadingGoogle}>
            {loadingGoogle ? (loading):(
              <>
              <img alt="goggle" src={goggle} /> Google
              </>
            )}
          </button>
          <button className="media-btn" onClick={signInWithApple} disabled={loadingApple}>
           {loadingApple ? (loading):(
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
      <form onSubmit={handleLogin}>
        <input
          className="log-input"
          type="text"
          name="username"
          placeholder="Email address"
          value={username}
          onChange={handleChange}
          required
        />
        <input
          className="log-input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <p className="forgot">Forgot Password?</p>
        <button className="log-btn" type="submit" disabled={loading}>{loading ? 'Loading...' : 'Log in'}</button>
        <p className="account">
          Don't have an account?{" "}
          <Link to="/signup" className="signup">
            Sign Up
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
     <Footer />
     </div>
  );
};

export default Login;
