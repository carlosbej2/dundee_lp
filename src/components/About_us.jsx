import React from 'react'
import { lapiz} from '../assets'
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Typical from 'react-typical'
import Footer from './Footer';

const About_us = () => {

  const teamMembers = [ 
    { name: 'Fulanito Fulanito', email: 'fulanito@dundee.com', role: 'Diseñadora Gráfica', description: 'Responsable de la parte visual de la empresa, publicidad, redes sociales y contenido' },
    { name: 'Menganito Menganito', email: 'menganito@dundee.com', role: 'Gestión Financiero', description: 'Encargado de la planificación económica, toma de decisiones y estrategias financieras.' },
    { name: 'Zuntanito Zuntanito', email: 'zuntanito@dundee.com', role: 'Desarrollador de software', description: 'Profesional responsables del desarrollo de la aplicación, tanto front-end como back-end' },
    { name: 'Miguelito Miguelito', email: 'miguelito@dundee.com', role: 'Desarrollador de software', description: 'Profesional responsables del desarrollo de la aplicación, tanto front-end como back-end' },
    { name: 'Carlos Bayón', email: 'cbayon@dundee.com', role: 'CEO',  description: 'Responsable de la gestión organizativa y también de márketing y publicidad. Con un perfil técnico y habilidades interpersonales sólidas.' },
  ];
  
  return (
    <div>
        <Header/>
        <div className="font-poppins text-white bg-[#FFCA76] p-5 flex flex-col items-center">
            <div className="bg-[#F4A19A] p-10 flex flex-col text-center items-center">
            <div id="introduccion">
                <Typical
                    steps={['😎 Este es el equipazo que hay detrás de DUNDEE: Aplicación para la gestión familiar 😎', 1000]}
                    loop={Infinity}
                    wrapper="h1"
                    className="text-4xl font-bold"
                />
                <div className='py-6 px-0'></div>
                <div className="flex flex-wrap justify-center">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="w-1/4 p-4">
                      <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-medium text-gray-900">{member.name}</h2>
                        <p className="text-sm text-gray-600">{member.email}</p>
                        <p className="text-sm text-gray-600">{member.role}</p>
                        <div className='py-6 px-0'>
                        <img 
                            src={lapiz} 
                        />
                        </div>
                        <p className="text-center text-sm text-gray-600">{member.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
            <div id="tfg">
              <p className="text-[30px] text-poppins">
                Esta LANDING PAGE ha sido desarrollado por José Carlos Bayón Guerrero como parte del Trabajo de Fin de Grado de Ingeniería Informática, en la
                Escuela Politécnica Superior de Alcoy (EPSA) de Universidad Politécnica de Valencia (UPV).
              </p>
            </div>
            <Link to="/">
                  <button className="bg-blue-500 text-white px-5 py-3 mt-10 rounded-lg hover:bg-blue-600">¡Pide ahora tu demo!</button>
            </Link>
            </div>
            </div> 
            <Footer/>
    </div>
  )
}

export default About_us