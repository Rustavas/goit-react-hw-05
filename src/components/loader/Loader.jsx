import { ThreeDots } from 'react-loader-spinner';
import css from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={css.Loader}>
      <ThreeDots
        visible={true}
        height="50"
        width="50"
        color="#2F4F4F"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}

export default Loader