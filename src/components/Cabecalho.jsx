import { Box } from '@mui/material';
import Logo from '../assets/logo_monseguros.png'

const Cabecalho = () => {
    return (
        <>        
            <Box 
                sx={{
                    background: '#FAFAFA', 
                    height: '123px',
                    display: 'flex',
                    justifyContent: { xs: 'center', sm: 'center', md: 'center', lg: 'space-between' }

                    }}
            >
                <Box sx={{
                        position: { xs: 'relative', sm: 'relative', md: 'relative', lg: 'absolute' }, 
                        top: '47px', 
                        left: { xs: '0', sm: '0', md: '0', lg: '220px' },
                        width: '318px'
                }}>
                    <img width='100%' src={Logo} alt="Logotipo Monseguros"  />
                </Box>
                

                <Box
                    className="buttom-black"
                    sx={{
                        width: '277px',
                        height: '56px',
                        position: 'absolute',
                        top: '33px',
                        right: '220px',
                        display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },                
                    }}
                >
                    <p>Fale Conosco</p>
                </Box>
            </Box>            
        </>
        
    );
    }

export default Cabecalho;

