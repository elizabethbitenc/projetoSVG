class Footer{
    constructor(){
        this.filterTurbulence= document.getElementById("filter-turbulence")
    }
    efeitoOnda(){
        TweenMax.to(this.filterTurbulence, 20, {
            attr:{
                baseFrequency:0.03,
            },
            repeat: -1, 
            yoyo: true
        })
    }
}

export{Footer}