'use client'

const showList = [{
    name:'Sordera Selectiva',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    schedule:'Lunes - Viernes | 17:00 - 18:00',
    talent:['Gustavo Perez','Lucho Milazzo']
},{
    name:'Misterios',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    schedule:'Lunes - Viernes | 17:00 - 18:00',
    talent:['Gustavo Perez','Lucho Milazzo']
},{
    name:'Volumen',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    schedule:'Lunes - Viernes | 17:00 - 18:00',
    talent:['Gustavo Perez','Lucho Milazzo']
},{
    name:'Chicas Malas',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    schedule:'Lunes - Viernes | 17:00 - 18:00',
    talent:['Gustavo Perez','Lucho Milazzo']
},{
    name:'Verdades Universales',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    schedule:'Lunes - Viernes | 17:00 - 18:00',
    talent:['Gustavo Perez','Lucho Milazzo']
},{
    name:'La Otra Puerta',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    schedule:'Lunes - Viernes | 17:00 - 18:00',
    talent:['Gustavo Perez','Lucho Milazzo']
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
                                        <h3 className="text-[1.2rem]">{show.schedule}</h3>
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