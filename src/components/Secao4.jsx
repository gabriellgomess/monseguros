import { Box } from '@mui/material';
import Symbol from '../assets/symbol_monbank_black.png';
import SymbolBg from '../assets/symbol_monbank_bg.png';
import Lapide from '../assets/icons/lapide.png';
import Caixao from '../assets/icons/caixao.png';
import Medico from '../assets/icons/medico.png';
import Casa from '../assets/icons/casa.png';
import Pet from '../assets/icons/pet.png';
import Pilula from '../assets/icons/pilula.png';
const Secao4 = () => {

    // cards com icone, titulo e descriçao
    const cards = [
        {
            icon: Lapide,
            title: 'Morte Acidental',
            description: 'Até R$ 40.000,00'
        },
        {
            icon: Caixao,
            title: 'Assistência funeral individual',
            description: 'Até R$ 5.000,00'
        },
        {
            icon: Medico,
            title: 'Telemedicina',
            description: 'Consulta médica on-line para o titular e dependentes.'
        },
        {
            icon: Casa,
            title: 'Assistência Residencial',
            description: 'Serviços de mão de obra, encanador, chaveiro, eletricista.'
        },
        {
            icon: Pet,
            title: 'Assistência PET',
            description: 'Consultas, exames, ambulatório, transporte, internação e funeral.'
        },
        {
            icon: Pilula,
            title: 'Rede de descontos em medicamentos',
            description: '*Rede Epharma.'
        }
       
    ];

    return (
        <Box 
            className='container-secao4' 
            sx={{
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '40px',
                // marginTop: { xs: '-100px', sm: '-400px', md: '-400px', lg: '-370px', xl: '-100px' },
                }}
        >
            <Box 
            sx={{
                width: { xs: '90%', sm: '80%', md: '80%', lg: '1104px', xl: '1104px' }, 
                textAlign: 'center',
                paddingTop: '40px',
                }}
            >
                <img style={{marginBottom: '10px', width: '50px'}} src={Symbol} alt='Simbolo Monbank' />                
                <h1 className='title'>Coberturas e Assistências Seguro de Acidentes Pessoais:</h1>
            </Box>
            <Box sx={{textAlign: 'center' }}>
                <p className='text'>O amparo certo, na hora certa!</p>
            </Box>
            <Box 
            sx={{
                display: 'flex', 
                // gap: '20px', 
                flexWrap: 'wrap', 
                justifyContent: 'center',
                backgroundImage: `url(${SymbolBg})`,
                backgroundSize: '60%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: { xs: '90%', sm: '80%', md: '80%', lg: '1304px', xl: '1304px' },
                height: { xs: 'fit-content', sm: 'fit-content', md: 'fit-content', lg: '1212px', xl: '1212px' },
                }}
            >
                {cards.map((card, index) => (
                    <Box
                        className='card-secao4'
                        key={index} 
                        sx={{
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            width: '394px',
                            height: { xs: '450px', sm: '494px', md: '494px', lg: '494px', xl: '494px' },
                            padding: '20px', 
                            gap: '20px',
                            backgroundColor: 'white',
                            border: 'none',
                            background: 'transparent',
                            justifyContent: 'space-between',
                            }}
                    >
                        <Box 
                            className='container-image' 
                            sx={{
                                width: {xs: '200px', sm: '200px', md: '220px', lg: '220px', xl: '220px'}, 
                                height: {xs: '200px', sm: '200px', md: '220px', lg: '220px', xl: '220px'}
                                }}
                            >
                            <img width='35%' src={card.icon} alt='Simbolo Monbank' />
                        </Box>
                        
                        <h2 className='title'>{card.title}</h2>
                        <p className='text'>{card.description}</p>
                    </Box>
                ))}
            </Box>
        </Box>
    );
    }

export default Secao4;