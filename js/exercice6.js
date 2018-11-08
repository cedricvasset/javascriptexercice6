function rest(){//création de la fonction nommée rest
  //variables
  var firstnumber = document.getElementById('firstNumber').value;
  var secondnumber = document.getElementById('secondNumber').value;
  // % (modulo) permet d afficher le reste de la division. expl:12/5 reste 2.
  //si on utilise la division / on obtient le resultat 2.4.
  if(isNaN(firstnumber)==false && isNaN(secondnumber)==false){
    alert(firstnumber % secondnumber);
  }else{
    alert('merci de saisir un champs valide');
  }
}
