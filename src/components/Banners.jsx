import Carousel from 'react-bootstrap/Carousel'
import '../assets/css/main.css'
function Banners() {
    return (
        <Carousel variant="bg-white" className='conteudo-margin'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wordpress-cms-gc-prod-assets.quero.space/uploads/2016/06/Ciencias_da_Computacao-3.jpg"
                        alt="Slide incrível"
                    />
                    <Carousel.Caption>
                        <h5 id="titulo1" className='text-white'>Mudança de API</h5>
                        <p className='text-white'>Teremos atualizações no nosso banco de dados</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.filecatalyst.com/wp-content/uploads/2022/03/fc-filecatalyst-at-nab-blog-image-1500x300-02-1.jpg"
                        alt="Outro slide incrível"
                    />
                    <Carousel.Caption>
                        <h5 id="titulo1" className='text-white'>Quais são as novas funcionalidades?</h5>
                        <p className='text-white'>Confira os principais recursos disponíveis no app</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.tecnatom.com.br/wp-content/uploads/2021/08/testes-provas_banners-paginas-solucoes-1500x300.jpg"
                        alt="Último slide"
                    />
                    <Carousel.Caption>
                        <h5 id="titulo1" className='text-white'>Contato para parcerias?</h5>
                        <p className='text-white'>
                            Nossa equipe de oportunidades, atendeu novos clientes interessados em abrir parceria!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Banners