'use client'

const showList = [{
    name:'Sordera Selectiva',
    description:`Curaduría musical para oídos inquietos.
Explora sonidos fuera de lo habitual: ruido, distorsión, errores, texturas y estructuras anómalas. Cada episodio gira en torno a un eje sonoro /del drone al glitch, del pop intervenido a la música espectral/ entrelazando artistas, contextos históricos y detalles de producción.`,
    schedule:'Lunes - Viernes | 17:00 - 18:00',
    talent:['Lucho Milazzo']
},{
    name:'Misterios',
    description:`Rarezas musicales latinoamericanas en clave de archivo paranormal.
Inspirado en programas como Archivos del Más Allá, Nuestro Insólito Universo y Escalofríos, este viaje sonoro rescata canciones, leyendas sonoras y pistas olvidadas del inconsciente colectivo latinoamericano. Narrado como un expediente secreto, es una cápsula de terror, historia y placer auditivo con mutaciones horripilantes de latin jazz.`,
    schedule:'Lunes - Viernes | 17:00 - 18:00',
    talent:['Gustavo Perez']
},{
    name:'Volumen',
    description:`Arquitectura que suena. Música que construye.
Un mapa sonoro que conecta movimientos arquitectónicos con los sonidos que los rodearon. Desde el brutalismo soviético hasta el futurismo tropical, Volumen teje historias entre espacios, épocas y frecuencias.`,
    schedule:'Lunes - Viernes | 17:00 - 18:00',
    talent:['Diana Hung']
},{
    name:'Chicas Malas',
    description:`Conversaciones con mujeres de moral distraída.
Compositoras, sex workers, madres radicales, artistas y otras rebeldes: aquí se habla sin tabúes y con el deseo por delante. Una oda a la libertad desde lo íntimo.`,
    schedule:'Lunes - Viernes | 17:00 - 18:00',
    talent:['Clared Navarro']
},{
    name:'Estrella Distante',
    description:`Ciencia sin bata, astronomía sin fórmulas.
Un programa que aterriza temas complejos del universo en lenguaje pop, sin perder el rigor ni la magia. De agujeros negros a teorías del tiempo, hablamos como si estuviéramos en una sobremesa estelar.`,
    schedule:'Lunes - Viernes | 17:00 - 18:00',
    talent:['Karlis Chirinos','Juana Rapoport']
},{
    name:'La Otra Puerta',
    description:`Umbral sonoro hacia el arte y sus enigmas.
Entrevistas, monólogos y piezas híbridas que indagan en el proceso creativo como acto místico. Cada episodio es una entrada a mundos interiores, obsesiones, formas de crear y sobrevivir.`,
    schedule:'Lunes - Viernes | 17:00 - 18:00',
    talent:['Alberto Flores Solano']
},{
    name:'Checkpoint',
    description:`Un espacio para pensar los lenguajes del anime, los rituales gamer y las dinámicas del fandom como parte de una identidad compartida. Cultura otaku, videojuegos y comunidades geek; una mirada crítica y emocional sobre los mundos que habitamos en la ficción y cómo estos nos reflejan, nos conectan y nos transforman.`,
    schedule:'Lunes - Viernes | 17:00 - 18:00',
    talent:['Julio Quintana']
}]

export default function Schedule (){

    return(
        <main className="flex justify-center items-center sm:h-[80svh] h-[70svh] z-[100] text-[#FFFFFF]">
            <section 
                className="relative p-[1rem] sm:w-[80svw] w-[90svw] sm:max-h-[80svh] max-h-[70svh] overflow-auto bg-glass"
            >
                <h1 className="sm:text-[1.8rem] text-[1.5rem] mb-[2rem] text-center">Programación</h1>
                <ul>
                    {showList.map((show,index)=>{
                        return (
                            <li key={`show_${index}`} className="mb-[1rem]" style={{borderBottom:'solid 1px #FFFFFF'}}>
                                <div className="flex sm:flex-row flex-col mb-[0.5rem]">
                                    <div className="show-name flex-[1_1_0] sm:mb-[0] mb-[1rem]">
                                        <h3 className="sm:text-[1.5rem] text-[1.25rem] mb-[0.6rem]">{show.name}</h3>
                                        <p className="sm:text-[0.8rem] text-[0.8rem]">{show.description}</p>
                                    </div>
                                    <div className="show-time flex-[1_1_0] flex flex-col items-center justify-center sm:mb-[0] mb-[1rem]">
                                        {/*<h3 className="text-[1.2rem]">{show.schedule}</h3>*/}
                                        <p className="text-[0.8rem]">{
                                            show.talent.map((t,i)=>{

                                                return show.talent.length == i+1 ? <span key={`talent_${i}`}>{t} </span> : <><span key={`talent_${i}`}>{t}</span><span> - </span></>
                                            })
                                        }</p>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </main>
    )
} 