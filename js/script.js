document
    .getElementById("calcBtn")
    .addEventListener("click", function () {



        let old =
            Number(document.getElementById("old").value);


        let n1 =
            Number(document.getElementById("nu1").value);


        let n2 =
            Number(document.getElementById("nu2").value);


        let n3 =
            Number(document.getElementById("nu3").value);


        let n4 =
            Number(document.getElementById("nu4").value);




        let result =

            (old * 0.30) +

            (n1 * 0.175) +

            (n2 * 0.175) +

            (n3 * 0.175) +

            (n4 * 0.175);




        document.getElementById("oldResult").innerHTML =
            old + " × 30%";


        document.getElementById("r1").innerHTML =
            n1 + " × 17.5%";


        document.getElementById("r2").innerHTML =
            n2 + " × 17.5%";


        document.getElementById("r3").innerHTML =
            n3 + " × 17.5%";


        document.getElementById("r4").innerHTML =
            n4 + " × 17.5%";



        document.getElementById("finalResult").innerHTML =
            result.toFixed(2);




        document.getElementById("overlay").style.display = "block";


        document.getElementById("resultBox").style.display = "block";



    });





function closeResult() {


    document.getElementById("overlay").style.display = "none";


    document.getElementById("resultBox").style.display = "none";


}