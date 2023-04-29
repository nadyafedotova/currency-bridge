import React, { useCallback, useState } from 'react';
import CustomDatePicker from './CustomDatePicker';
import { useSelector } from 'react-redux';
import { ConversionHistory } from './ConverterHistory';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

const Converter = ({ visible }) => {
    const currencies = ['USD', 'EUR', 'GBP', 'UAH', 'CNY'];
    const [results, setResults] = useState([]);
    const [fromAmount, setFromAmount] = useState('');
    const [toAmount, setToAmount] = useState('');
    const [selectedFromCurrency, setSelectedFromCurrency] = useState('UAH');
    const [selectedToCurrency, setSelectedToCurrency] = useState('USD');
    const selectedDate = useSelector((state) => state.date.selectedDate);
    const API_KEY = 'O2F588YI0KZBMHKO';

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchExchangeRate = useCallback(debounce(async (amount, fromCurrency, toCurrency, date, flag) => {
        const formattedDate = date.toISOString().split('T')[0];
        const response = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${API_KEY}&date=${formattedDate}&amount=${amount}`);
        const data = await response.json();
        const result = (parseFloat(amount) * data['Realtime Currency Exchange Rate']['5. Exchange Rate']).toFixed(2);
        if (flag === 'from') {
            setFromAmount(result)
        } else {
            setToAmount(result)
        }
    }, 500), []);

    const handleFromAmountChange = (e) => {
        const value = e.target.value;
        setFromAmount(value);
        fetchExchangeRate(value, selectedFromCurrency, selectedToCurrency, selectedDate, 'to');
    };

    const handleToAmountChange = (e) => {
        const value = e.target.value;
        setToAmount(value);
        fetchExchangeRate(value, selectedToCurrency, selectedFromCurrency, selectedDate, 'from');
    };

    const handleFromCurrencyChange = useCallback((e) => {
        const { value } = e.target;
        setSelectedFromCurrency(value);
        fetchExchangeRate(fromAmount, value, selectedToCurrency, selectedDate, 'to');
    }, [fromAmount, selectedToCurrency, selectedDate, fetchExchangeRate]);

    const handleToCurrencyChange = useCallback((e) => {
        const { value } = e.target;
        setSelectedToCurrency(value);
        fetchExchangeRate(toAmount, value, selectedFromCurrency, selectedDate, 'from');
    }, [toAmount, selectedFromCurrency, selectedDate, fetchExchangeRate]);

    const handleSaveResult = (result) => {
        const newResults = [result, ...results];
        const trimmedResults = newResults.slice(0, 10);
        localStorage.setItem('conversionResults', JSON.stringify(trimmedResults));
        setResults(trimmedResults);
    };
    const handleSaveButtonClick = () => {
        const result = {
            fromCurrency:selectedFromCurrency,
            toCurrency:selectedToCurrency,
            fromAmount:fromAmount,
            toAmount:toAmount,
            date:selectedDate.toLocaleDateString('ru-RU', { year:'numeric', month:'2-digit', day:'2-digit' }),
        };

        handleSaveResult(result);
    };

    return (
        <div style={{ display:visible ? 'block' : 'none' }}>
            <div className="converter">
                <div className="container-converter">
                    <div>
                        <div className="title">
                            <p>Конвертер валют</p>
                        </div>
                    </div>

                    <div className="converter-side">
                        <div className="converter-title">
                            <div className="converter-title-left">
                                <p>В мене є:</p>
                            </div>
                            <div className="converter-title-right">
                                <p>Хочу придбати:</p>
                            </div>
                        </div>

                        <div className="converter-field">
                            <div className="field">
                                <input type="number" value={fromAmount} onChange={handleFromAmountChange}
                                       placeholder="1000"/>
                                <select value={selectedFromCurrency}
                                        onChange={handleFromCurrencyChange}>
                                    {[...currencies].map((currency) => (
                                        <option key={currency} value={currency}>
                                            {currency}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="icon-arrows"></div>
                            <div className="field">
                                <input type="number" value={toAmount} onChange={handleToAmountChange}
                                       placeholder="38.7"/>
                                <select value={selectedToCurrency}
                                        onChange={handleToCurrencyChange}>
                                    {[...currencies].map((currency) => (
                                        <option key={currency} value={currency}>
                                            {currency}
                                        </option>
                                    ))}
                                </select>

                            </div>
                        </div>
                        <div className="converter-calendar">
                            <div className="calendar">
                                <CustomDatePicker/>
                            </div>
                            <div>
                                <button className="save-button" onClick={handleSaveButtonClick}>Зберегти результат
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ConversionHistory results={results}/>
        </div>
    )
}

const mapStateToProps = state => ({
    visible:state.visibility.converterVisible,
});

export default connect(mapStateToProps)(Converter);

