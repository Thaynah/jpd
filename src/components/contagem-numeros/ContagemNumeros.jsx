import CountUp from 'react-countup';
import './ContagemNumeros.css';

export default function ContagemNumeros() {
    return (
        <div className="bg-custom py-10 columns-2 bolder px-5 text-xl text-sky-800 sm:px-80 text-5xl">
            <div className='container'>
                <h2 className='py-5'>
                    <span className="text-3xl font-bold pr-2"><CountUp duration={2} end={8} /></span>
                    Anos de atuação
                </h2>
                <h2 className='py-5'>
                    <span className="text-3xl font-bold pr-2"><CountUp duration={2} end={5} /></span>
                    Mil pessoas impactadas
                </h2>
            </div>
            <div className='container'>
                <h2 className='py-5'>
                    <span className="text-3xl font-bold pr-2"><CountUp duration={2} end={190} /></span>
                    Voluntários
                </h2>
                <h2 className='py-5'>
                    <span className="text-3xl font-bold pr-2"><CountUp duration={2} end={95} /></span>
                    Instituições beneficiadas
                </h2>
            </div>
        </div>
    );
}