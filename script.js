function display(event) {
    let arr = [['Acer', '4GB', '64GB', 'ChromeOS', 'B0D33NC672', 'Integrated', '134.99', 'https://www.amazon.com/acer-Gateway-Chromebook-CBO311-1H-C1MX-802-11ac/dp/B0D33NC672/147-9538335-1828615?th=1'], ['Acer', '8GB', '128GB', 'ChromeOS', 'B0CX28KX1N', 'Integrated', '299.99', 'https://www.amazon.com/acer-Chromebook-Plus-Laptop-Google/dp/B0CX28KX1N/144-2728663-8063855?th=1'], ['Acer', '8GB', '128GB', 'Windows 11 Home', 'B0BS4BP8FB', 'Integrated', '329.99', 'https://www.amazon.com/A315-24P-R7VH-Display-Quad-Core-Processor-Graphics/dp/B0BS4BP8FB/144-2728663-8063855?th=1'], ['Acer', '8GB', '512GB', 'Windows 11 Home', 'B0CP8D4SM2', 'Dedicated', '679.99', 'https://www.amazon.com/i5-13420H-Processor-GeForce-Display-ANV15-51-51H9/dp/B0CP8D4SM2/147-9538335-1828615?th=1'], ['Apple', '16GB', '256GB', 'MacOS', 'B0DZDBDCFH', 'Integrated', '1149.00', 'https://www.amazon.com/Apple-2025-MacBook-15-inch-Laptop/dp/B0DZDBDCFH/144-2728663-8063855?psc=1'], ['Asus', '16GB', '1TB', 'Windows 11 Home', 'B0CRDCXRK2', 'Dedicated', '1290.04', 'https://www.amazon.com/ASUS-Display-NVIDIA%C2%AE-i7-13650HX-G614JV-AS74/dp/B0CRDCXRK2/144-2728663-8063855?psc=1']];
    let p = "";
    let found = false;
    event.preventDefault();
    for (let e = 0; e < arr.length; e++) {
        if (document.getElementById("company").value == arr[e][0] || document.getElementById("company").value == "") {
            if (document.getElementById("ram").value == arr[e][1] || document.getElementById("ram").value == "") {
                if (document.getElementById("storage").value == arr[e][2] || document.getElementById("storage").value == "") {
                    if (document.getElementById("os").value == arr[e][3] || document.getElementById("os").value == "") {
                        if (document.getElementById("graphics").value == arr[e][5] || document.getElementById("graphics").value == "") {
                            p = p + "<li><a href= + arr[e][7] + >" + arr[e][0] + " Laptop, " + arr[e][1] + " RAM, " + arr[e][2] + " Storage, " + arr[e][5] + " Graphics, " + arr[e][3] + ", Amazon ASIN " + arr[e][4] + ", price: " + arr[e][6] + "</a></li>";
                            found = true;
                        }
                    }
                }
            }
        }
    }
    if (found == false) {
        p = "No results found!";
    }
    document.getElementById("test").innerHTML = p;
}