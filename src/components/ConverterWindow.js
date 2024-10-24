import React, { useState, useEffect } from 'react';
import { Input, Select, Button } from 'antd';
import axios from 'axios';

const { Option } = Select;

const ConverterWindow = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get('https://open.er-api.com/v6/latest/USD')
      .then((response) => {
        const currencyData = response.data.rates;
        setCurrencies(Object.keys(currencyData));
        setToCurrency('EUR');
      })
      .catch((error) => console.error('Error fetching the data:', error));
  }, []);

  const convertCurrency = () => {
    setLoading(true);
    axios
      .get(`https://open.er-api.com/v6/latest/${fromCurrency}`)
      .then((response) => {
        const rate = response.data.rates[toCurrency];
        setConvertedAmount((amount * rate).toFixed(2));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error during conversion:', error);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Currency Converter</h1>
        
        <div className="mb-4">
          <Input
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
          />
        </div>
        
        <div className="mb-4">
          <Select
            value={fromCurrency}
            onChange={(value) => setFromCurrency(value)}
            className="w-full"
          >
            {currencies.map((currency) => (
              <Option key={currency} value={currency}>
                {currency}
              </Option>
            ))}
          </Select>
        </div>

        <div className="mb-4">
          <Select
            value={toCurrency}
            onChange={(value) => setToCurrency(value)}
            className="w-full"
          >
            {currencies.map((currency) => (
              <Option key={currency} value={currency}>
                {currency}
              </Option>
            ))}
          </Select>
        </div>

        <div className="text-center">
          <Button type="primary" loading={loading} onClick={convertCurrency}>
            Convert
          </Button>
        </div>

        {convertedAmount && (
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold">
              {amount} {fromCurrency} = {convertedAmount} {toCurrency}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConverterWindow;
