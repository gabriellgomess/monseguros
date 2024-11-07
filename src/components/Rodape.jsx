import { Box } from '@mui/material';
import Logo from '../assets/logo_monseguros_white.png';

const Rodape = () => {
    return (
        <footer className='container-rodape'>
            <Box>
                <Box sx={{width: {xs: '250px', sm: '250px', md: '318px', lg: '318px', xl: '318px'}}}>
                    <img width='100%' src={Logo} alt="Logo Monbank" />
                </Box>                
                <p className='text-white' style={{marginTop: '30px'}}>Copyright &copy; {new Date().getFullYear()}</p>
                <p className='text-white' style={{marginTop: '30px'}}>Mon Seguros</p>
                <p className='text-white' style={{marginTop: '30px'}}>CNPJ: 54.561.419/0001-41</p>
                <p className='text-white'>Rua Mostardeiro, no 322, salas 1501 e 1502 – CEP 90430-000</p>
                <p className='text-white'>Moinhos de Vento – Porto Alegre/RS</p>
            </Box>
            <Box>
                <p className='text-white'>Perguntas Frequentes</p>
                <p className='text-white'>Política de Privacidade</p>
                <p className='text-white'>Termos de Uso</p>
                <p className='text-white'>LGPD</p>
                <p className='text-white'>Contato</p>
            </Box>
            <Box>
                <p className='text-white'>Central de Ajuda</p>
                <p className='text-white'>Sobre nós</p>
                

            </Box>
        </footer>
    );
    }

export default Rodape;