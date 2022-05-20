import CreateInvitationForm from "./components/CreateInvitationForm";
import RegistrationForm from "./components/RegistrationForm";
function App() {
  return (
    <div className='flex w-full h-screen'>
      <div className="w-full flex items-center justify-center">
        <CreateInvitationForm />
      </div>
    </div>
  );
}

export default App;
