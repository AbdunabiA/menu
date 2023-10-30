import loader from 'assets/icons/cooking_loader.gif'
import s from './loader.module.scss'

const Loader = () => {
  return (
    <div className={s.loader}>
        <div>
            <img src={loader} alt="" />
        </div>
    </div>
  )
}

export default Loader