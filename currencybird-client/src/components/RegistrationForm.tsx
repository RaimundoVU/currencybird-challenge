import { Formik, Field, Form} from 'formik'
import React, {useState} from 'react';

const RegistrationForm: React.FC = () => {
  const [link, setLink] = useState('');
  return(
    <div className="flex w-full h-screen">
      <div className="flex w-full items-center justify-center">
        <div className="w-11/12 max-w-[700px] justify-center items-center py-10 px-5 bg-white border-2 rounded-md flex flex-col">
          <Formik
            initialValues={{
              email: '',
              fullName: '',
              direction: '',
              genre: ''
            }}
            onSubmit={(values) => {
              console.log(values)
            }}
          >
            <Form className="flex flex-col gap-4">
              <Field placeholder='Ingresar tu mail' name='email' className="pr-2 pl-5 bg-gray-100"/>
              <Field placeholder='Nombre completo' name='fullName' className="pr-2 pl-5 bg-gray-100"/>
              <Field placeholder='Direccion' name='direction' className="pr-2 pl-5 bg-gray-100"/>
              <Field placeholder="Sexo" as="select" name="genre" className="pr-2 pl-5 bg-gray-100">
                 <option value="default">Sexo</option>
                 <option value="male">Masculino</option>
                 <option value="female">Femenino</option>
                 <option value="nooption">Otro...</option>
               </Field>
              <br/>
              <div className="justify-center items-center flex py-5">
                <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-1 px-7 bg-green-700 text-white font-bold " type='submit'>
                  Registrarse
                </button>
              </div>
            </Form>
          </Formik>

          <div className="mt-auto justify-center items-center">
            {link !== '' ? <a href={link}>{link}</a> : null}
          </div>
        </div>
      </div>
    </div>
  )

}

export default RegistrationForm;
