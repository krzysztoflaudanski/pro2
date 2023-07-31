import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
    return (
        <section className={styles.favourite}>
            <div className={styles.header}>
                <PageTitle>favorite</PageTitle>
            </div>
            <div>
                Lorem ipsum
            </div>
        </section>)
}

export default Favorite;