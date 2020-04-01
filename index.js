function defang(address){
  // let splitString = address.split('.');

  // let converted = ''

  // for(let i of splitString) {
  //   converted += `${i}[.]`

  // }


  let splitString = address.split('');
  let converted = '';

  for(let i of splitString) {
    if(i === '.') {
      converted += '[.]';
    } else {
      converted += i
    }
  }

  return converted

} 

defang("255.100.50.0")