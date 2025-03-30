import './App.css'
import useCurrencyInfo from './Hooks/useCurrencyInfo';
import InputBox from './MyComponents/InputBox';
import { useState } from 'react';

function App() {
  const[fromAmount, setFromAmount] = useState(0);
  const[toAmount, setToAmount] = useState(0);
  const[fromCurrency, setFromCurrency] = useState("USD");
  const[toCurrency, setToCurrency] = useState("INR");
  const options = useCurrencyInfo(fromCurrency) || {};
  const CurrencyOptions = Object.keys(options);

  const convertCurrency = function (e){
    e.preventDefault();
    setToAmount(Number(options[toCurrency]) * Number(fromAmount));
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertCurrency(e);
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={Number(fromAmount)}
                amountChange={setFromAmount}
                currencyType={fromCurrency}
                currencyTypeChange={setFromCurrency}
                options={CurrencyOptions}
                disabled={false}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={(e) => {
                  setFromAmount(toAmount);
                  setToAmount(fromAmount);
                  setFromCurrency(toCurrency);
                  setToCurrency(fromCurrency);
                  e.target.blur();
                }}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={Number(toAmount)}
                amountChange={setToAmount}
                currencyType={toCurrency}
                currencyTypeChange={setToCurrency}
                options={CurrencyOptions}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={(e) => convertCurrency(e)}>
              Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
