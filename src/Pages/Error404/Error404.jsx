  // import css files
import './Error404.css'

  // import images
import ErrImage from "./../../Assets/Images/LayoutImages/ErrorLayout.webp"
import MainButton from '../../Components/UI/MainButton/MainButton'

  // import react router hooks
import { useNavigate } from 'react-router'
export default function Error404() {
    // import navigate to navigate users
  const navigate = useNavigate();
  return (
    <main role='main' className='errorPageContainer center gap20'>
      <img width={400} height={400} src={ErrImage} alt="error" />
      <h1 className="titleErrorPage">OOOPSEE!!</h1>
      <h2 className="describeError">We are sorry!! this page is not avalible for you.</h2>
      <MainButton onClick={() => {navigate("/")}} >Back To Home Page</MainButton>
    </main>
  )
}
