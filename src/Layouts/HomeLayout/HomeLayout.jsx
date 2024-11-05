  // import components
import Header from "../../Components/Header/Header";

  // import react router components
import {Outlet} from "react-router-dom"

export default function HomeLayout() {
  return (<>
      <Header/>
      <Outlet/>
    </>)
}
