function reset() {
    document.getElementById('demo').innerHTML = '';
    var name1 = document.getElementById('name1').value = '';
    var name2 = document.getElementById('name2').value = '';
  }
  
  function flame() {
  
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
  
    if ((name1.length === 0) || (name2.length === 0)) {
      alert("Enter a valid name");
    }
  
    if (!/^[a-zA-Z]*$/g.test(name1)) {
      alert("Invalid characters");
      document.myForm.name.focus();
      return false;
    }
  
    var first = name1;
    var sec = name2;
  
    for (i = 0; i < name1.length; i++) {
      sec = sec.replace(name1[i], '');
  
    }
  
    for (i = 0; i < name2.length; i++) {
      first = first.replace(name2[i], "");
    }
    var final = first + sec;
    var final_length = final.length;
    var letters = parseInt(final_length) % 6;
  
    if (letters == "1") {
      document.getElementById('demo').innerHTML = 'Friends';
  
    }
    else if (letters == "2") {
      document.getElementById('demo').innerHTML = 'Love';
  
    }
    else if (letters == "3") {
      document.getElementById('demo').innerHTML = 'Affection';
  
    }
    else if (letters == "4") {
      document.getElementById('demo').innerHTML = 'Marriage';
  
    }
    else if (letters == "5") {
      document.getElementById('demo').innerHTML = 'Enemy';
  
    }
    else if (letters == "0") {
      document.getElementById('demo').innerHTML = 'Bro/Sis';
  
    }
  
  }