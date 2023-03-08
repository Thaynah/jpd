import './MenuTop.css';
import ToggleTheme from '../toggle-theme/ToggleTheme';

export default function MenuTop() {
  return (
    <div className='bg-white flex justify-between items-center p-3 dark:bg-dark-200'>
      <div className='flex'>
        <a href="#">
          <span className="sr-only">JPD</span> 
          <img
            className="h-8 w-auto sm:h-10"
            src="/logo.png"
            alt=""
          />
        </a>
      </div>
      <div className='hidden sm:block'>  
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900 ml-8 mr-4">
            Início
          </a>
          <a href="#sobrenos" className="text-base font-medium text-gray-500 hover:text-gray-900 ml-8 mr-4">
            Sobre Nós
          </a>
          <a href="#ajude" className="text-base font-medium text-gray-500 hover:text-gray-900 ml-8 mr-4">
            Ajude a Causa
          </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScJyWtGsco3Ug3ryhb86lCuEGxk4lSHdm_d4pU7CF7EWaWc_w/viewform"
          target="_blank"
          className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Seja Voluntário (a)
        </a>
      </div>
      <div>
        <ToggleTheme/>
      </div>
    </div>
  );
}
