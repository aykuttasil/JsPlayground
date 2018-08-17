const Sum = (ilkdeger, ...degerler) => {
    console.log("----------------");
    console.log("Sum working");
    console.log(ilkdeger);
    console.log(degerler[1]);
    let toplam = 0;
    for (var i = 0; i < degerler.length; i++) {
        toplam += degerler[i];
    }
    console.log("Toplam:" + toplam);
    console.log("----------------");
}

export default Sum;

Sum(1000, 2, 4, 4, 5, 6, 7);