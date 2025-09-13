import React, { useState } from "react";
import Button from './Button.jsx'

// Prefix to carrier name
const prefixes = {
  "0817": "Globe",
  "0905": "Globe",
  "0906": "Globe",
  "0915": "Globe",
  "0916": "Globe",
  "0917": "Globe",
  "0926": "Globe",
  "0927": "Globe",
  "0935": "Globe",
  "0936": "Globe",
  "0937": "ABS-CBN Mobile",
  "0945": "Globe",
  "0955": "Globe",
  "0956": "Globe",
  "0965": "Globe",
  "0966": "Globe",
  "0967": "Globe",
  "0975": "Globe",
  "0976": "Globe",
  "0977": "Globe",
  "0995": "Globe",
  "0996": "Cherry",
  "0997": "Globe",
  "0813": "Smart",
  "0907": "Smart",
  "0908": "Smart",
  "0909": "Smart",
  "0910": "Smart",
  "0912": "Smart",
  "0913": "Smart",
  "0914": "Smart",
  "0918": "Smart",
  "0919": "Smart",
  "0920": "Smart",
  "0921": "Smart",
  "0928": "Smart",
  "0929": "Smart",
  "0930": "Smart",
  "0938": "Smart",
  "0939": "Smart",
  "0940": "Smart",
  "0946": "Smart",
  "0947": "Smart",
  "0948": "Smart",
  "0949": "Smart",
  "0950": "Smart",
  "0951": "Smart",
  "0961": "Smart",
  "0963": "Smart",
  "0968": "Smart",
  "0969": "Smart",
  "0970": "Smart",
  "0981": "Smart",
  "0989": "Smart",
  "0998": "Smart",
  "0999": "Smart",
  "0895": "Dito",
  "0896": "Dito",
  "0897": "Dito",
  "0898": "Dito",
  "0991": "Dito",
  "0992": "Dito",
  "0993": "Dito",
  "0994": "Dito",
  "0922": "Sun",
  "0923": "Sun",
  "0924": "Sun",
  "0925": "Sun",
  "0931": "Sun",
  "0932": "Sun",
  "0933": "Sun",
  "0934": "Sun",
  "0941": "Sun",
  "0942": "Sun",
  "0943": "Sun",
  "0944": "Sun",
};

// Carrier name → image path (put these logos inside /public/logos/)
const carrierLogos = {
  Globe: "/logos/globe.png",
  Smart: "/logos/smart.png",
  Dito: "/logos/dito.png",
  Sun: "/logos/sun.png",
  Cherry: "/logos/cherry.png",
  "ABS-CBN Mobile": "/logos/abs.png",
};

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [carrier, setCarrier] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    setPhoneNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phoneNumber.length !== 11) {
      setError("Please enter a valid 11-digit phone number.");
      setCarrier("");
      return;
    }

    setError("");
    let found = false;

    for (const prefix in prefixes) {
      if (phoneNumber.startsWith(prefix)) {
        setCarrier(prefixes[prefix]);
        found = true;
        break;
      }
    }

    if (!found) {
      setCarrier("unknown");
    }
  };

  return (
    <div className="w-auto h-screen flex flex-col items-center justify-center">
      <h1>Who’s My Carrier?</h1>

      {carrier && !error && (
        <div className="mt-10">
          {carrierLogos[carrier] ? (
            <img
              src={carrierLogos[carrier]}
              alt={carrier}
              className="w-32 h-20 object-contain"
            />
          ) : (
            <p className="text-gray-600">Carrier not found</p>
          )}
        </div>
      )}

      {error && <p className="mt-2 ml-5 text-red-500 text-sm">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 mt-5">
        <div className="relative flex items-center bg-[#222222] rounded-md">
          <input
            placeholder="e.g. 09xxxxxxxxx"
            type="tel"
            value={phoneNumber}
            onChange={handleChange}
            className="w-[200px] h-[50px] border-2 border-[#222222] rounded-md px-5 
                      text-[#222222] bg-[#e8e8e8] text-[15px] font-bold font-sans 
                      transition-transform duration-100 ease-[cubic-bezier(0.33,1,0.68,1)]
                      focus:outline-none focus:-translate-y-[3px] placeholder:text-[#646464]
                      placeholder:font-bold placeholder:text-[15px] placeholder:font-sans"
          />

          {phoneNumber && (
            <button
              type="button"
              onClick={() => {
                setPhoneNumber("");
                setCarrier("");
                setError("");
              }}
              className="absolute right-3 text-gray-400 hover:text-red-500 transition"
            >
              ✕
            </button>
          )}
        </div>

        {/* <button
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="22"
            height="22"
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            <path
              d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
              fill="currentColor"
            />
          </svg>
        </button> */}
        <Button/>
      </form>


    </div>
  );
}

export default App;
