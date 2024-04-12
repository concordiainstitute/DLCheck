function data(){
    var age=document.getElementById('inp').value;
    if(age>=18 && age<=60){

        document.getElementById('result').innerText="Yes You Can Drive The Vehicle";
        document.getElementById('result').classList.add('green');
        document.getElementById('result').classList.remove('red');
    }
    else{

        document.getElementById('result').innerText="No You Are Not Eligible For Driving";
        document.getElementById('result').classList.add('red');
        document.getElementById('result').classList.remove('green');

    }
    

}