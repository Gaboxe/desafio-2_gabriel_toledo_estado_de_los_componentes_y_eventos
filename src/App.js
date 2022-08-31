import { useState } from "react";

import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [stateButton, setStatebutton] = useState(false);
  const [message, setMessage] = useState(false)

  const [alert, setAlert] = useState(false)

  const validateForm = (e) => {
    e.preventDefault();

    setAlert(true)
  }

  const logic = () => {

    // if (name === '') {

    //   setStatebutton(false);
    //   return
    // }

    if (password === '252525' && name !== '') {

      setStatebutton(true);
      setMessage(false);

      return
    }

    if ((password === '' && message === false) || (name === '' && message === false)) {
      setMessage(true);
      return
    } else if (password !== '' && name !== '') {
      setMessage(false)
      return
    }

    setStatebutton(false);

  }

  return (

    <>
      <div className="container">

        {alert ? <>
          <p>Informacion Enviada</p>
          <br/>
          <Button name={'Volver'} onClick={()=> window.location.reload()}/>
        </> :
          <form onSubmit={validateForm}>

            <Input label={'Nombre'} type={'text'} estado={name} cambiarEstado={setName} onKeyUp={logic} />
            <Input label={'Password'} type={'password'} estado={password} cambiarEstado={setPassword} onKeyUp={logic} />

            {message ? <h5>Complete ambos campos, <br />active el boton de enviar con <span>'252525'</span> en password </h5> : null}

            {stateButton ? <Button type={'submit'} name='Enviar' /> : null}
          </form>
        }
      </div>
    </>

  );

}

export default App;
