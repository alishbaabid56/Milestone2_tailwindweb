
import MainPage from "./main/page"
import About from "./about/page"
import Menu from "./menu/page"
import ChefSection from "./chef/page"
import Book from "./book/page"
import ContactForm from "./contact/page"



export default function home(){
    return(
        <div className="bg-black">
           
            <MainPage/>
            <About/>
            <Menu/>
            <ChefSection/>
            <Book/>
            <ContactForm/>
        </div>
    )
}