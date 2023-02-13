import { Footer } from "./layouts/footer"
import { Header } from "./layouts/header"

export function NotFound(){
  return(
    <>
    <Header isBottomLineOn={true} />
    <h1 style={{
      fontSize: "40px",
      textAlign: "center",
      margin: "50px"
    }}>Sorry, the page you're looking for doesn't exist
    </h1>
    <Footer />
    </>
  )
}