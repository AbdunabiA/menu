import { useTranslation } from 'react-i18next';
import s from './location.module.scss'

const Location = () => {
    const {t} = useTranslation()
  return (
    <div className={s.location_wrapper}>
      <div className="container">
        <h2>{t("Lokatsiya")}</h2>
        <div className={s.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97258.02967523302!2d71.70805991402653!3d40.3797455574011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83431937abc5%3A0xcfa4d876b34e7bbc!2z0KTQtdGA0LPQsNC90LAsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1698556386616!5m2!1sru!2s"
            width="600"
            height="450"
            style={{border:'0'}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location