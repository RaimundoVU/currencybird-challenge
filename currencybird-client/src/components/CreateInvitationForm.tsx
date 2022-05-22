import { Formik, Field, Form} from 'formik'
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {getUser} from '../services/api';


const CreateInvitationForm: React.FC = () => {
  const [link, setLink] = useState('');
  const [referal, setReferal] = useState('');

  return(
    <div className="w-11/12 max-w-[700px] justify-center items-center py-10 px-5 bg-white border-2 rounded-md flex flex-col">
      <Formik
        initialValues={{
          email: '',
          fullName: ''
        }}
        onSubmit={async (values) => {
          let { data } = await getUser(values.email)
          var getUrl = window.location;
          var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
          if ( data.user ) {
            var generateUrl = `${baseUrl}/invite/${data.user.referalString}`;
            values.fullName = data.user.fullName
            let referal = data.user.referalString!
            setReferal(referal)
            setLink(generateUrl)
          } else {
            setLink('error')
          } 
        }}
      >
        <Form>
          <div className="flex flex-col md:flex-row gap-5">
            <Field placeholder='Ingresar tu mail' name='email' className="py-2 pr-5 pl-2 bg-gray-100"/>
            <Field placeholder='Nombre completo' name='fullName' className="py-2 pr-5 pl-2 bg-gray-100"/>
          </div>
          <br/>
          <div className="justify-center items-center flex py-5">
            <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-1 px-7 bg-green-700 text-white font-bold " type='submit'>
              Compartir
            </button>
          </div>
        </Form>

      </Formik>
      <div className="mt-auto justify-center items-center">
        {link !== 'error' ? 
        <Link className="underline" to={`registration/${referal}`} >{link}</Link> : 

        <Link to="registration">Usuario no existe, registrarse</Link>
        }
      </div>
      <div className="mt-8 justify-center items-center">
        <Link className="text-white bg-green-700 border-2 rounded-md" to="/ranking">Ver Ranking</Link> 
        
      </div>
    </div>
  )

}

export default CreateInvitationForm;
