import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggelCardFavorite } from '../../redux/store';


const Card = props => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(toggelCardFavorite(props.cardId));
    }

    return (
        <li className={styles.card}>{props.title}
            <form onSubmit={handleSubmit}>
                <button className={clsx(styles.star, props.isActive && styles.favorite__star)}><span className='fa fa-star-o' /></button>
            </form>
        </li>
    );
};

export default Card;