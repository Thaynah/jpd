import './SobreNos.css'

export default function SobreNos() {
    
    return (
        <div id='sobrenos' className='text-sky-800'>
            <div className='columns-2'>
                <div className='w-100 p-8 h-100 text-center'>
                    <h1 className='text-3xl mb-3'>Quem Somos</h1>
                    <p className='mb-3'>A Associação Civil Jovens Pela Diferença é um projeto social laico fundado em 17 de abril de 2015 em Fortaleza, no Ceará. Idealizado por uma jovem adolescente que reuniu informalmente um grupo de 20 amigos para fazer ações sociais com crianças, gradativamente ganhou força como movimento solidário.</p>
                    <p>Com cerca de 12 ações sociais por mês, a ONG realiza atividades de recreação com crianças em situação de vulnerabilidade e ações com idosos, pessoas em situação de rua, animais e ações socioambientais. Além disso, acreditamos na juventude como a força capaz de fazer a diferença, e por isso investimos em nossos mais de 200 voluntários rumo à difusão de um voluntariado sério, responsável e transformador.</p>                           
                </div>
                <div className="w-100 p-8 h-100 mt-5">  
                    <img className="object-cover" src="/geral.png" alt="Foto dos Integrantes" />                                
                </div>
            </div>           
        </div>
    );
}




