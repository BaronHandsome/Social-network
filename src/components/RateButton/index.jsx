import React from 'react';
import styles from './RateButton.module.css';
import { useState } from 'react';
import fingerUp from '../../assets/fingerUp.svg';
import fingerDown from '../../assets/fingerDown.svg';

export function RateButton() {
    const [rateUp, setRateUp] = useState(0);
    const [rateDown, setRateDown] = useState(0);


    return (
        <div className={styles.container}>
            <div onClick={() => setRateUp(rateUp + 1)}>
                <img className={styles.rateSymbol} src={fingerUp}></img>
            </div>
            <span className={styles.rateNumber}>{rateUp}</span>
            <div className={styles.rateSymbol} onClick={() => setRateDown(rateDown + 1)}>
                <img className={styles.rateSymbol} src={fingerDown}></img>
            </div>
            <span className={styles.rateNumber}>{rateDown}</span>
        </div>
    )
}