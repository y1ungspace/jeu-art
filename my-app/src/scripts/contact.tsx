import { Footer } from "./layouts/footer";
import { Header } from "./layouts/header";

export function ContactPage() {
  return(
    <>
    <Header isBottomLineOn={true} />
    <section className="contact-page_wrapper">
      <h1 className="h1 black">Contact Us</h1>
      <h3 className="contact-page_text">Say Hello send us your thoughts about our products or share your ideas with our Team!</h3>
      <form className="contact-page_form"> 
        <input className="input-validation" type="text" placeholder="First name" />
        <input className="input-validation" type="text" placeholder="Last name" />
        <input className="input-validation" type="email" placeholder="Email" />
        <input className="input-validation" type="text" placeholder="Subject" />
        <textarea className="textarea-validation" rows={3} placeholder="Message" />
        <button className="contact-page_send-button black-button" type="button">SEND</button>
      </form>
    </section>
    <Footer />
    </>
    
  )
}