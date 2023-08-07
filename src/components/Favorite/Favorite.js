import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import { Navigate } from 'react-router-dom';

const Favorite = () => {

    const cards = useSelector(state => getFavoriteCards(state))

    if (cards.length === 0) return <Navigate to="/" />

    return (
        <section className={styles.favorite}>
            <div className={styles.header}>
                <PageTitle>favorite</PageTitle>
            </div>
            <div className={styles.column}>
                <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} title={card.title} cardId={card.id} isActive={card.isFavorite} />)}
                </ul>
            </div>
        </section>)

}

export default Favorite;