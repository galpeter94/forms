import React, { FormEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';


type Errors = Record<string,string>
type Validalt = Record<string,string>

function App() {
  
  const [errors, setErrors] = useState<Errors>({});
  const [validalt, setValidalt] = useState<Validalt>({});


  // Letiltja, hogy újratöltse az oldalt, ha megnyomjuk a submit gombot.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    //létrehozunk egy obejktumot amiben benne vannak a form adatai
    const newErrors:Errors = {};
    const newValidalt:Validalt = {};


    const form = new FormData(e.currentTarget);
    const lastname = form.get('lastname');
    const position = form.get('position');    
    const firstname = form.get('firstname');
    const checkbox = form.get('feltetel');
    //const cucc = form.get('cucc');
    
if(!lastname){
  newErrors.lastname = 'A mező kitöltése kötelező!'
};

if(!position){
  newErrors.position = 'EHE DIKK'
};

if(!firstname || firstname.toString().trim() === ''){
  newErrors.firstname = 'A keresztnév kitöltése kötelező!'
};

if(!checkbox){
  newErrors.feltetel = 'Fogadd el a feltételeket!'
}

//console.log('ez a newerrors: ', newErrors);
//console.log(newErrors);
///ITT DOLGOZUNK

    
    setErrors(newErrors);
    //console.log(newErrors.type);
    //console.log(form);
    //validáljuk az adatokat, hogy tényleg az jelenik-e meg.
    //console.log(lastname)
if(checkbox && firstname &&lastname && position){
  //console.log('Ez a blokk működik');
  //const validaltUzenet = 'Adatok elküldése sikeres!'
  validalt.cucc='Adatok elküldése sikeres!'
 }

  setValidalt(validalt);

  }
  


  return (
    <form onSubmit={handleSubmit}>
      <label >Vezetéknév</label>
      <input type='text'name='lastname'/>
      <p>{
          errors.lastname //ha errors? akkor az kb egy if clause..
        }</p>

      <label >Keresztnév</label>
      <input type='text'name='firstname'/>
      <p>
        {errors.firstname}
      </p>


        <select name="position" >
        <option value=''> Kérlek válassz pozíciót</option>
          <option value="dev">Developer</option>
          <option value="des">Designer</option>
          <option value="denes">Dé:nash</option>
        </select>
        <p>{errors.position}</p>

        <label ><input type="checkbox" name='feltetel' className='cseki'/>
         ELFOGADOM A FELHASZNÁLÁSI FELTÉTELEKET</label>
        <p>{
          errors.feltetel}</p>
      
      
      <br></br><button type='button'>Vissza</button>


      {/* alapvetően submit az értéke */}
      <button type='submit' name='cucc'>Regisztráció</button> 
       <p className='mindenok'>{validalt.cucc}</p>    
    </form>
  );
}

export default App;
