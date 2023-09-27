import{cards} from'./cards.js'
import{Icones} from'./icones.js'
import{Footer} from'./footer.js'

window.onload=()=>{
    const animaCards= new cards()
    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards))

    const icones= new Icones();
    icones.animaIcones();

    const footer= new Footer();
    footer.efeitoOnda();
}