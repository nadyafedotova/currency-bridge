import React, { useState, useEffect } from 'react';

export const ConversionHistory = ({ results }) => {
    const row = 10;
    const [conversionHistory, setConversionHistory] = useState([]);

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const newResults = [results[0], ...conversionHistory].slice(0, row);
        setConversionHistory(newResults);
        localStorage.setItem('conversionResults', JSON.stringify(newResults));
    }, [results]);

    useEffect(() => setConversionHistory(results), [results, conversionHistory]);
    const handleClearHistory = () => {
        localStorage.removeItem('conversionResults');
        setConversionHistory([]);
        results.splice(0, results.length);
    };
    let divs = conversionHistory.map((result, i) => {
        return (
            <div className="history-td" key={i}>
                <span className="td-date">{result.date}</span>
                <span className="td-currency"> {result.fromAmount} {result.fromCurrency}
                    <span className="td-arrows"></span>
                    {result.toAmount} {result.toCurrency}
                </span>
            </div>
        );
    });

    if (divs.length === 0) divs =
        <div className="history-empty"><h1>На даний момент у нас немає збереженої історії конвертації</h1></div>

    return (
        <div className="converter-history">
            <div className="container-history">
                <div className="history-side">
                    <div className="history-side-title">
                        <div className="history-title-left">
                            <p>Історія конвертації</p>
                        </div>
                        <div className="history-title-right">
                            <button className="clean-button" onClick={handleClearHistory}>Очистити історію</button>
                        </div>
                    </div>
                    <div className="history-table">{divs}</div>
                </div>
            </div>
        </div>
    );
};
