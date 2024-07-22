let sonlar=+prompt("Birinchi son kiriting")
let sonlar2=+prompt("Ikinchi son kiriting")


function min(a,b){
    if(a<b){
        alert(a+" soni" + b +" sonidan kichik")
    }else if(a==b){
        alert(a +"soni" + b + "soni bilan teng")
    } else{
        alert(b+" soni" + a +" sonidan kichik")

    }
}
min(sonlar, sonlar2)