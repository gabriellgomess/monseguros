import { Box } from '@mui/material';
import FotoSecao3 from '../assets/foto_secao3.png';
import FotoSecao3Mobile from '../assets/foto_secao3.jpeg';

const Secao3 = () => {
    return (
        <Box 
            sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row'}, 
            justifyContent: 'space-between',
            height: 'fit-content',
            }}
        >
            
                <Box className='container-text-secao3' sx={{width: {xs: '350px', sm: '400px', md: '592px', lg: '660px', xl: '750px'}, padding: '20px'}}>
                    <Box>
                        <h1 className='title'>Compromisso com a <span className='text-yellow'>satisfação</span> do cliente:</h1>
                    </Box>
                    <Box>
                        <p className='text'>Nossos setores trabalham como uma engrenagem, garantindo que os processos de venda, pós-vendas, utilização e acionamento estejam dentro do padrão de qualidade exigido e necessário para o sucesso do negócio e para atender o que é prometido aos clientes.</p>
                    </Box>
                    <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        gap: '40px'
                    }}>
                    <Box
                        className="buttom-yellow"
                        sx={{
                            width: { xs: '180px', sm: '180px', md: '180px', lg: '277px', xl: '277px' },
                            height: { xs: '56px', sm: '56px', md: '56px', lg: '56px', xl: '56px' }                               
                        }}
                    >
                        <p>Fale Conosco</p>
                    </Box>
                    <Box
                    className="buttom-white"
                    sx={{
                        width: { xs: '180px', sm: '180px', md: '180px', lg: '277px', xl: '277px' },
                        height: { xs: '56px', sm: '56px', md: '56px', lg: '56px', xl: '56px' }                                   
                    }}
                    >
                    <p>Saiba Mais</p>
                    </Box>
                </Box>
            </Box>          
            
            <Box sx={{
                backgroundImage: `url(${FotoSecao3})`,
                width: '40vw',
                height: '40vw',
                backgroundSize: 'cover',
                display: { xs: 'none', sm: 'none', md: 'block', lg: 'block'}
            
                }}
            ></Box>
            <Box sx={{
                backgroundImage: `url(${FotoSecao3Mobile})`,
                width: '100%',
                height: '60vw',
                backgroundSize: 'cover',
                display: { xs: 'block', sm: 'block', md: 'none', lg: 'none'}            
                }}
            ></Box>
            

            
        </Box>
    );
    }

export default Secao3;