import React from "react";
import wand from "../../assets/wand.png";
import { useContext, useState } from "react";
import LoginModal from "../loginModal";
import { UserContext } from "../../contexts/UserContext";
import copy from "clipboard-copy";
import { Button } from "flowbite-react";

const defaultFormFields = {
  long_url: "",
  custom_url: "",
};
 interface User {
  token?: string;
 user?: object;
 }

const MyUrl = () => {
  const { user } = useContext(UserContext);
   const [modalOpen, setModalOpen] = useState(false);
  const [copyMe, setCopyMe] = useState(false);
  const [textToCopy, setTextToCopy] = useState('');
  const [shortUrl, setShortUrl] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { long_url, custom_url } = formFields;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

   const handleOpenModal = () => {
     if (!user) setModalOpen(true);
   };

   const handleCloseModal = () => {
   setModalOpen(false);
  };

  const handleCopy = () => {
    copy(textToCopy);
    setTimeout(()=>{
      setCopyMe(false);
    }, 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://scissor-api-lyit.onrender.com/shortme/short_url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({ long_url, custom_url }),
      });
      if (response.ok) {
        const data = await response.json();
        setLoading(false);
        setCopyMe(true);
        setShortUrl(data.short_url);
        setCustomUrl(data.custom_url);
        setTextToCopy(`scissor-api-lyit.onrender.com/${data.short_url}`);
      } else if (response.status === 403) {
        setLoading(false);
        return;
      } else {
        setLoading(false);
        return;
      }
      resetFormFields();
      setLoading(false);
    } catch (err) {
      console.error("An error has occurred");
      setLoading(false);
    }
  };
  return (
    <div className="myurl">
      <div className="trim-container">
        <LoginModal isOpen={modalOpen} onClose={handleCloseModal} />
        <form onSubmit={handleSubmit}>
          <input
            
            value={long_url}
            name="long_url"
            required
            className="paste"
            onChange={handleChange}
            placeholder="Paste URL here..."
          />
          <div className="select">
            <select className="drop" required>
              <option disabled>Choose Domain</option>
              <option
                value="scissor"
                defaultValue={`scissor-api-lyit.onrender.com`}
              >
                scissor-api-lyit.onrender.com
              </option>
            </select>
            <input
              
              name="custom_url"
              onChange={handleChange}
              value={custom_url}
              required
              className="alias"
              placeholder="Type Alias here..."
            />
          </div>
          {copyMe && (
            <>
            <div>
              Your trimmed link is:{' '}
              <a 
              href={`https://scissor-api-lyit.onrender.com/${shortUrl}`}
              target="_blank"
              rel="noopener noreferrer">
                https://scissor-api-lyit.onrender.com/{shortUrl}
              </a>
            </div>
            <div>
              Your customized link is:{' '}
              <a 
              href={`https://scissor-api-lyit.onrender.com/${customUrl}`}
              target="_blank"
              rel="noopener noreferrer">
                https://scissor-api-lyit.onrender.com/{customUrl}
              </a>
            </div>
            </>
          )}
          {!copyMe ? (
            <Button 
            disabled={loading}
            onClick={user ? undefined : handleOpenModal}
            type={user ? `submit` : `button`} 
            className="trim-btn">
              <div>
                {loading ? (
                  loading
                ) : (
                  <>
                    <span>
            Trim URL <img alt="wand" src={wand} />
          </span>
                  </>
                )}
              </div>
            </Button>
          ) : (
            <button onClick={handleCopy} type={`button`}>
              <div>
                <span>Copy Url</span>
              </div>
            </button>
          )}
          <p className="p-trim">
            By clicking TrimURL, I agree to the{" "}
            <span className="terms">Terms of Service, Privacy Policy</span> and
            Use of Cookies.
          </p>
        </form>
      </div>
    </div>
  );
};
export default MyUrl;
