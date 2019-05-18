import NavComponent from './NavLocation.js'
import NavData from '../../dbs/nav.js'

export default class NavBar{
    constructor(element){
        this.head=element
        this.root=this.head.querySelector('nav')
        
        this.compContainer=document.createElement('section')
        this.compContainer.classList.add('navContainer','hide')
        this.root.appendChild(this.compContainer)

        this.components=NavData.paths.map(data=>new NavComponent(data))
        this.components.forEach(comp=>this.compContainer.appendChild(comp.element))

        this.menuButton=document.createElement('section')
        this.menuButton.textContent='Menu'
        this.menuButton.classList.add('menuButton')
        this.root.prepend(this.menuButton)
        this.menuButton.addEventListener('click',(e)=>{
                this.toggleMenu()
        })
    }

    toggleMenu(){
        this.compContainer.classList.toggle('hide')
    }
}