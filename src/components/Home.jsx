import React from 'react'
import { did, seguro, intuitivo,} from '../assets'
import Header from './Header';
import Footer from './Footer';

import Typical from 'react-typical'

const Home = () => {

    return (
        <div>
            <Header/>
        <div className="font-poppins text-white bg-[#FFCA76] p-5 flex flex-col items-center">
            <div className="bg-[#F4A19A] p-10 flex flex-col text-center items-center">
            <div id="introduccion">
                <Typical
                    steps={['🤗 La solución para una introducción segura y didáctica a las nuevas tecnologías. 🤗', 1000]}
                    loop={Infinity}
                    wrapper="h1"
                    className="text-4xl font-bold"
                />
                <p className="font-poppins text-lg mt-5 justify-end items-center flex-1">
                        DUNDEE es una aplicación móvil diseñada para gestionar de 
                        forma efectiva y segura las primeras interacciones de los más jóvenes con las nuevas tecnologías.
                        Con su sistema de tareas, puntos y recompensas, DUNDEE fomenta la realización de tareas del hogar 
                        por parte de los niños, ayudando a consolidar buenos hábitos de convivencia y orden en el entorno familiar,
                        al mismo tiempo que les permite una introducción correcta a los medios tecnológicos. Descarga DUNDEE y descubre una 
                        forma divertida y educativa de interactuar con la tecnología.</p>
            </div>
            <div className='py-6 px-0'></div>
            <div className="flex justify-center">
                <div className="w-1/3 p-10 rounded bg-white">
                <h3 className="text-base text-black font-medium text-[24px]">¡Fomento de hábitos de convivencia!</h3><br/>
                    <h3 className='text-[64px]'>👨‍👩‍👧‍👦</h3>
                    <p className="text-gray-700 text-justify">
                        DUNDEE fomenta la realización de tareas del hogar por parte de los más pequeños, consolidando así buenos 
                        hábitos de convivencia y órden dentro del hogar.</p>
                </div>
                <div className="w-1/3 p-10 ml-10 rounded bg-white">
                <h3 className="text-base text-black text-[24px] font-medium">¡Motivación a través de recompensas!</h3><br/>
                    <h3 className='text-[64px]'>🎁</h3>
                    <p className="text-gray-700 text-justify">
                        El sistema de tareas, puntos y recompensas de DUNDEE motiva a los más jóvenes a realizar las tareas del hogar, ya que ven 
                        recompensados sus esfuerzos.</p>
                </div>
                <div className="w-1/3 p-10 ml-10 rounded bg-white">
                <h3 className="text-base text-black text-[24px] font-medium">¡Muchas funcionalidades!</h3><br/>
                    <h3 className='text-[64px]'>📱</h3>
                    <p className="text-gray-700 text-justify">
                     Diversas funcionalidades útiles para facilitar la organización de la familia, como la lista de la compra compartida, calendario compartido o
                        el chat de la familia para comunicarse entre los diferentes miembros. </p>
                </div>
            </div>
            <div className="font-poppins flex">
                <div className="w-1/2 p-10 text-white">
                        <h2 className="text-lg text-[28px] mb-5">Ventajas de DUNDEE</h2>
                        <div className="mb-5">
                        <div id="didactico_icon">
                            <img 
                                src={did} 
                                alt='Dundee Logo'
                                className='w-[430px] h-[80px] cursor-pointer '
                            />
                        </div>
                            <p className='text-justify'>
                                DUNDEE es una aplicación diseñada para gestionar, de forma didáctica y segura, las primeras interacciones 
                                entre los más jóvenes del hogar y las nuevas tecnologías. Gracias a un sistema de tareas, puntos y recompensas, 
                                se fomenta la realización de las tareas del hogar por parte de los más pequeños, ayudándoles a consolidar buenos hábitos de convivencia y 
                                órden dentro del entorno familiar.
                            </p>
                        </div>
                        <div className="mb-5">
                        <div id="intuitivo_icon">
                            <img 
                                src={intuitivo} 
                                alt='Intuitivo Logo'
                                className='w-[430px] h-[110px] cursor-pointer '
                            />
                        </div>
                            <p className='text-justify'>
                            DUNDEE es muy fácil de usar, especialmente porque está diseñada para niños de edad media. Los botones y las funciones 
                            están claramente marcados y son fáciles de entender, lo que significa que los niños pueden usar la aplicación sin la ayuda de sus padres. Además, todas 
                            las tareas y recompensas están presentadas de una manera visual y atractiva, lo que hace que sea más divertido para los niños usar la aplicación y seguir sus tareas y progreso.
                            </p>
                        </div>
                        <div className="mb-5">
                            <div id="seguro_icon">
                                <img 
                                    src={seguro} 
                                    alt='Dundee Logo'
                                    className='w-[430px] h-[100px] cursor-pointer '
                                />
                            </div>
                            <p>
                                DUNDEE ofrece un entorno seguro para los más jóvenes, garantizando una correcta introducción a los medios tecnológicos. De esta forma, 
                                se evita el acceso a contenidos inapropiados y se promueve un uso responsable y adecuado de las nuevas tecnologías.
                            </p>
                        </div>
                    </div>
                <div className="w-1/2 p-10 text-black text-left">
                    <h2 className="text-lg text-white text-bold text-[23px] text-center mb-5">¿Te gustaría solicitar una demo de DUNDEE?</h2>
                    <form className="bg-white py-6 px-6 rounded-lg">
                    <h2 className="text-lg font-medium mb-5 text-center">¡Estaremos encantados de ofrecerte más información de DUNDEE!</h2>
                    <div className="flex flex-col mb-5">
                        <label className="font-medium" for="name">Nombre</label>
                        <input className="border p-2 rounded-lg" type="text" id="name" name="name" required />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="font-medium" for="email">Correo electrónico</label>
                        <input className="border p-2 rounded-lg" type="email" id="email" name="email" required />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="font-medium" for="phone">Teléfono</label>
                        <input className="border p-2 rounded-lg" type="tel" id="phone" name="phone" required />
                    </div>
                    <div className="my-6">
                    <p className="items-center text-center">¿Formas parte de alguna entidad educativa?</p>
                    <div className="text-center">
                        <input type="radio" id="yes" value="yes" className="mr-2"/>
                            <label className="text-center" htmlFor="yes">Sí</label>
                        <input type="radio" id="no" value="no" className="ml-6 mr-2"/>
                            <label className="text-center"htmlFor="no">No</label>
                    </div>
                    <div className='py-3 px-0'></div>
                    <div className="flex flex-col mb-5">
                        <label className="font-medium text-center" for="message">En caso afirmativo de la respuesta anterior, ¿de cuál?</label>
                        <textarea className="border p-2 rounded-lg" id="message" name="message" required></textarea>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="font-medium text-center" for="message">¿Qué más te gustaría saber sobre DUNDEE?</label>
                        <textarea className="border p-2 rounded-lg" id="message" name="message" required></textarea>
                    </div>
                    </div>
                    <button className="w-full bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
            </div>
            </div> 
            <Footer/>
            </div>
      );
    };

export default Home