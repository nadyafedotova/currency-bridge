import React from 'react';
import Button from './Button';

export const Rectangle = () => (
    <div className="rectangle">
        <div className="container-rectangle">
            <div className="button-converter">
                <div className="title">
                    <h1>Чіп Чендж</h1>
                    <p> Обмінник валют - навчальний </p>
                </div>
                <Button
                    backgroundColor={'#F6F7FF'}
                    textColor={'#707C87'}
                />
            </div>
            <div className="credit-cart"></div>
        </div>
    </div>
)