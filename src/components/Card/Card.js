import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggelCardFavorite, removeCard } from '../../redux/cardsReducer';


const Card = props => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(toggelCardFavorite(props.cardId));
    }

    const handleSubmitTrash = e => {
        e.preventDefault()
        dispatch(removeCard(props.cardId))
    }

    return (
        <li className={styles.card}>{props.title}
            <div>
                <form onSubmit={handleSubmit}>
                    <button className={clsx(styles.star, props.isActive && styles.favorite__star)}><span className='fa fa-star-o' /></button>
                </form>
                <form onSubmit={handleSubmitTrash}>

                    <button className={styles.trash}><span className='fa fa-trash' /></button>
                </form>
            </div>
        </li>
    );
};

export default Card;