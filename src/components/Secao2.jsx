import { Box } from '@mui/material';
import Symbol from '../assets/symbol_monbank.png';
const Secao2 = () => {

    const cards = [
        {
            title: 'Ativação de nossos serviços',
            description: '',
            list: [
                'Telemedicina',
                'Assitência Pet',
                'Assitência Residencial',
                'Desconto em medicamentos com ampla rede de farmácias em todo território nacional.'
            ]
        },
        {
            title: 'Acionamento de sinistros',
            description: '',
            list: [
                'Morte Acidental',
                'Acidentes Pessoais'
            ]
        },
        {
            title: 'Reclamações ou esclarecimentos',
            description: '',
            list: [
                'Demandas não atendidas',
                'Dúvidas sobre o produto ou cobertura',
                'Não reconhecimento da contratação',
                'Cancelamentos ou reembolsos.'
            ]
        },
        {
            title: 'Análise de evidências de vendas',
            description: '',
            list: [
                'Auditoria de vendas fonadas, para validação e tratamento em casos de desacordo',
                'Análise documental de vendas físicas, com análise grafoscópia feita por técnicos profissionais',
                'Tratamento da venda de parceiros, garantindo o padrão exigido',
                'Treinamento e capacitação das equipes operacionais.'
            ]
        },
        {
            title: 'Atendimento de demandas do banco',
            description: '',
            list: [
                'Envio de reclamações',
                'Reclamações de clientes via canais do banco.'
            ]
        },
        {
            title: 'Atendimento de demandas de órgãos externos',
            description: 'Demandas de Procon, Reclame aqui, solicitações extrajudiciais.',
            list: []
        },
    ];

    return (
        <Box className='container-secao2' sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '70px 50px', gap: '40px'}}>
            <Box sx={{width: {xs: '350px', sm: '500px', md: '800px', lg: '1200px', xl: '1400px'}, textAlign: 'center'}}>
                <img style={{marginBottom: '10px', width: '50px'}} src={Symbol} alt='Simbolo Monbank' />                
                <h1 className='title'>Conheça nossos setores especializados em qualidade 
                e atendimento ao cliente:</h1>
            </Box>
            <Box sx={{width: {xs: '350px', sm: '500px', md: '800px', lg: '950px', xl: '950px'}, textAlign: 'center' }}>
                <p className='text'>Nosso setor de atendimento conta com <span style={{fontWeight: 'bold'}}>40 colaboradores, </span>atendendo nossos clientes de <span style={{fontWeight: 'bold'}}>segunda à sexta-feira, das 08:00 à 19:00.</span> Entre as demandas atendidas, estão:</p>
            </Box>
            <Box sx={{display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1650px' }}>
                {cards.map((card, index) => (
                    <Box key={index} className='card' sx={{width: {xs: '100%', sm: '90%%', md: '499px', lg: '499px', xl: '499px'}, minHeight: '400px', padding: '15px 0', height: {xs: 'fit-content', sm: '450px', md: '606px', lg: '606px', xl: '606px'}}}>
                        <Box sx={{width: {xs: '80%', sm: '80%', md: '394px', lg: '394px', xl: '394px'}, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px'}}>
                        <h2 className='title'>{card.title}</h2>
                        {card.description && <p>{card.description}</p>}
                        {card.list && (
                            <ul>
                                {card.list.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        )}
                        </Box>
                    </Box>
                ))}
                
            </Box>
        </Box>
    );
    }

export default Secao2;