import CountUp from 'react-countup';
import './ContagemNumeros.css';

export default function ContagemNumeros() {
    return (
        <div className="bg-custom px-80 py-10 w-100 columns-2 bolder text-xl text-sky-800">
            <div className='container'>
                <h1 className='py-2'> <span className='counter'><CountUp end={8} /></span> Anos de atuação</h1>
                <h1 className='py-2'> <span className='counter'><CountUp end={5} /></span> mil pessoas impactadas</h1>
            </div>
            <div className='container'>
                <h1 className='py-2'> <span className='counter'><CountUp end={190} /></span> Voluntários</h1>
                <h1 className='py-2'> <span className='counter'><CountUp end={95} /></span> Instituições beneficiadas</h1>
            </div>
        </div>
    );
}