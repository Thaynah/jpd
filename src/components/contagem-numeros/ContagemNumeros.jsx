import CountUp from 'react-countup';
import './ContagemNumeros.css';

export default function ContagemNumeros() {
    return (
        <div className="bg-custom py-10 columns-2 bolder px-5 text-xl text-sky-800 sm:px-80 text-5xl">
            <div className='container'>
                <h1 className='py-2'>
                    <span className="text-3xl font-bold pr-2"><CountUp duration={2} end={8} /></span>
                    Anos de atuação
                </h1>
                <h1 className='py-2'>
                    <span className="text-3xl font-bold pr-2"><CountUp duration={2} end={5} /></span>
                    Mil pessoas impactadas
                </h1>
            </div>
            <div className='container'>
                <h1 className='py-2'>
                    <span className="text-3xl font-bold pr-2"><CountUp duration={2} end={190} /></span>
                    Voluntários
                </h1>
                <h1 className='py-2'>
                    <span className="text-3xl font-bold pr-2"><CountUp duration={2} end={95} /></span>
                    Instituições beneficiadas
                </h1>
            </div>
        </div>
    );
}