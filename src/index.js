import _ from 'lodash';


function component() {
    const element = document.createElement('div');
  
    // Lodash, imported by this script
    element.innerHTML = _.join(['Hey', 'webpack'], ' ');
  
    return element;
}

document.body.appendChild(component());