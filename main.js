function tahmin(){
    // kullanicidan veri aldik
    const sayi = document.getElementById("sayi").value;
    
    const sayi_control = sayi / 2

    if (Boolean(sayi_control) == true) {
        if(sayi < 0){
            alert("sayi 0'dan buyuk olmali")
        }else if(sayi > 10){
            alert("sayi 10'dan kucuk olmali")
        }else{
            const randomSayi = Math.floor(Math.random() * 11)
            if(sayi == randomSayi){
                alert("Tebrikler. Tahmin dogru :)")
            }else{
                alert("Hata! Dogru Cevap : " + randomSayi)
            }

        }
        
    }else{
        alert("bu bir sayi degil")
    }

}