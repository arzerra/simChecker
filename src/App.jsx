  import React, { useState } from "react";
  import SearchButton from './SearchButton.jsx'
  import ClearButton from './ClearButton.jsx'

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

  const carrierLogos = {
    Globe: "/logos/globe.png",
    Smart: "/logos/smart1.png",
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
      <>
      <div className="w-full h-screen bg-[url('/bg.png')] bg-cover bg-center h-screen flex flex-col items-center justify-center">
      
        <div className="max-w-[1200px] w-full flex items-center justify-center mt-10">
          <div className="border-10 border-[#A1C2BD] w-[500px] h-[600px] rounded-2xl shadow-xl bg-gradient-to-b from-[#F0F0F0] to-[#E7F2EF] m-5 sm:m-0">
          <div className="flex items-center justify-center mt-10">
            <h1 className="text-4xl bg-[#19183B] bg-clip-text text-transparent">Who's My Carrier?</h1>
          </div>

          <div className="flex items-center justify-center">
            <div className="mt-5 w-60 h-60 flex items-center justify-center">
              <img
                src={carrier && !error && carrierLogos[carrier] ? carrierLogos[carrier] : "/placeholder.png"}
                alt={carrier || "Placeholder"}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.png";
                }}
              />
            </div>
          </div>
            
              {error && <p className="mt-2 text-red-500 text-sm flex items-center justify-center">{error}</p>}
            <div className="flex items-center justify-center">
              <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-5">
                  <div className="relative flex items-center bg-[#222222] rounded-md">
                  <input
                    placeholder="e.g. 09xxxxxxxxx"
                    type="tel"
                    value={phoneNumber}
                    onChange={handleChange}
                    className="w-[250px] h-[50px] border-2 border-[#212121] rounded-lg px-4
                  text-[#212121] bg-[#e8e8e8] text-[16px] font-bold font-sans
                  transition-transform duration-100 ease-[cubic-bezier(0.33,1,0.68,1)]
                  focus:outline-none focus:-translate-y-[2px] placeholder:text-[#646464]
                  placeholder:font-bold placeholder:text-[16px] placeholder:font-sans"

                  />
                  </div>
              </form>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex items-center justify-center flex-row gap-3 mt-10">
                <SearchButton />
                  <ClearButton 
                    setPhoneNumber={setPhoneNumber} 
                    setCarrier={setCarrier} 
                    setError={setError} 
                  />
              </div>
            </form>

          </div>
        </div>
      </div>
      </>
    );
  }

  export default App;
