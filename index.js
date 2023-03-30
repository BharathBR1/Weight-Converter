const input = document.getElementById('input')
document.getElementById('output').style.visibility = 'hidden';
input.addEventListener('input',(e)=>{
    let lbs = e.target.value;
document.getElementById('output').style.visibility = 'visible';

    // console.log(lbs)
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046 ;
    document.getElementById('kiloOutput').innerHTML = lbs/2.2046 ;
    document.getElementById('ounceOutput').innerHTML = lbs*16;
})