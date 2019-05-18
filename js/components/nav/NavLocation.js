export default class NavLocation{
    constructor(comp){
        this.comp=comp
        this.destination=comp.destination
        this.text=comp.text

        this.element=document.createElement('section')
        this.anchor=document.createElement('a')
        this.anchor.textContent=this.text
        this.anchor.setAttribute('href',`/${this.destination.join('/')}.html`)
        this.element.appendChild(this.anchor)
    }
}