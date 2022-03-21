function myFunction() {
   const x = document.getElementById("click");
   const navigation = document.getElementById("navigation");
    if (x.checked === false) {
      navigation.style.left="8rem";
    } else {
      navigation.style.left= "-32rem";
    }
    
  }