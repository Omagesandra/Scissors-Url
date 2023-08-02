import React from "react";
import copy from  'clipboard-copy';

interface MyLinkProps {
    customUrl: string;
    shortUrl: string;
    longUrl: string;
}

const MyLinks: React.FC<MyLinkProps> = ({customUrl, shortUrl, longUrl}) => {
    const handleCopy = (textToCopy: string) => {
        copy(textToCopy);
    };


    return (
        <>
        <div>
            <div>
                Custom Link:{' '} 
                <a 
                href={`https://scissor-api-lyit.onrender.com/shortme/${customUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                >
                    https://scissor-api-lyit.onrender.com/shortme/customUrl
                </a>
            </div>
            <div>
                Short Link:{' '}
                <a
                 href={`https://scissor-api-lyit.onrender.com/shortme/${shortUrl}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 >
                     https://scissor-api-lyit.onrender.com/shortme/shortUrl
                 </a>
            </div>
            <div>
                <a href={longUrl} target="_blank" rel="noopener noreferrer">
                    {longUrl}
                </a>
            </div>
            <div>
                <button onClick={() => handleCopy(`https://scissor-api-lyit.onrender.com/shortme/${shortUrl}`)}>Copy</button>
            </div>
        </div>
        </>
    )
}
export default MyLinks;