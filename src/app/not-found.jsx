'use client'

import styles from './not-found.module.css';
import { useEffect } from 'react';

export default function NotFound() {
    return (
        <div className={styles["error-container"]}>
            <div className={styles["error-page"]}>
                <div className={styles.emoji}>🚨</div>
                <div className={styles.title}>Erro 404</div>
                <div className={styles.subtitle}>Ops! Algo deu errado😢</div>
                <p className={styles.desc}>
                    Nosso sistema detectou um problema.<br />
                    Por favor, tente novamente ou volte mais tarde.
                </p>
                <button className={styles.button} onClick={() => window.location.href = '/'}>
                    Tentar novamente
                </button>
            </div>
        </div>
    )
}