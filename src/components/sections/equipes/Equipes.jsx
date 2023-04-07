import './Equipes.css';

export default function Equipes() {
    return (
        <div className='w-100 p-8 h-100 text-center'>
         <h1 className='text-3xl mb-2'>Equipes</h1>
            <div className="columns-4">
                <div>
                    <img src="/setores/SB.png" className='imagem-setores mb-4' alt="Salão de Beleza" />
                    <p className="mt-4 text-left">Salão de Beleza - O Salão de Beleza visa resgatar a autoestima de mulheres, sejam elas criancas, adultas ou idosas, através de atividades como manicure, penteados e maquiagem. Com atuação ativa em todas as ações, a equipe distribui sorrisos por meio de lindas transformações!</p>
                </div>

                <div>
                    <img src="/setores/BL.png" className='imagem-setores mb-4' alt="Brincadeiras Livres" />
                    <p className="mt-4 text-left">Brincadeiras Livres - A equipe Brincadeiras Livres é pra quem tem energia pra gastar! Por meio do esporte e atividades que envolvem movimento, o BL diverte as crianças de 7 a 13 anos com atividades como circuitos, cabos de guerra, futebol e inúmeras brincadeiras divertidas.</p>
                </div>

                <div>
                    <img src="/setores/PR.png" className='imagem-setores mb-4' alt="Pintura" />
                    <p className="mt-4 text-left">Com muita arte, a equipe de Pintura leva cor e criatividade para a vida da criançada! Reproduzindo personagens de filmes, desenhos animados, times de futebol e muito mais, nossos pintores são sempre requisitados pelos pequenos.</p>
                </div>

                <div>
                    <img src="/setores/BQ.png" className='imagem-setores mb-4' alt="Brinquedoteca" />
                    <p className="mt-4 text-left">Para desenvolver o intelecto dos pequenos com muita diversão, contamos com os voluntários da equipe Brinquedoteca. Com atividades lúdicas e interativas como quebra-cabeças, Uno, desenhos para colorir e muitas outras, a equipe atua principalmente com crianças de 2 a 6 anos.</p>
                </div>                

            </div>
        </div>
    );
}