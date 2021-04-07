import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangeContexts';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallangeBox.module.css';

export function ChallangeBox() {

    const { activeChallenge, resetChallenge, completeChallenge} = useContext(ChallangesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeCompleted() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challangeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challangeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
 
                    <footer>
                        <button type="button"
                        className={styles.challangeFailedButton}
                        onClick={handleChallengeFailed}
                        >
                        Falhei
                        </button>
                        <button type="button"
                        className={styles.challangeCompletedButton}
                        onClick={handleChallengeCompleted}
                        >
                        Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challangeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Suba de level completando desafios.
                </p>
            </div>
            )}
        </div>
    )
}