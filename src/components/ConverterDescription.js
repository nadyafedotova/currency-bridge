import React from 'react';
import Button from './Button';
import { connect } from 'react-redux';

const ConverterDescription = ({ visible }) => (
    <div className="converter-description" style={{ display:visible ? 'block' : 'none' }}>
        <div className="container-description">
            <div className="button-converter-description">
                <div className="title">
                    <h1>Конвертер валют</h1>
                    <p> Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і
                        більше відсотків. </p>
                </div>
                <Button
                    backgroundColor={'#2C36F2'}
                    textColor={'#F6F7FF'}
                />
            </div>
            <div className="credit-cart"></div>
        </div>
    </div>
)

const mapStateToProps = state => ({
    visible:state.visibility.descriptionVisible,
});
export default connect(mapStateToProps)(ConverterDescription);