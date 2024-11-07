import { Box } from '@mui/material';
import Banner from '../assets/banner.png/'
const Home = () => {
    return (
            <Box className='container-home' sx={{display: 'flex', justifyContent: {xs: 'center', sm: 'center', md: 'center', lg: 'space-between'}, alignItems: 'center'}}>
                <Box 
                    sx={{
                        width: {xs: '90%', sm: '500px', md: '600px', lg: '592px'}, 
                        height: 'auto', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '20px',
                        marginLeft: {xs: '0', sm: '0', md: '0', lg: '228px'},
                        padding: '40px 0'
                    }}
                >
                    <Box>
                        <h1 className='title'>Segurança 
                        e benefícios para sua tranquilidade.</h1>
                    </Box>
                    <Box>
                        <p className='text'>Com cobertura completa e clube de vantagens, o MonSeguros oferece tudo 
                        o que você precisa: desde assistência em emergências até descontos e serviços exclusivos para o seu bem-estar.</p>
                    </Box>
                    <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '20px'
                    }}>
                    <Box
                        className="buttom-yellow"
                        sx={{
                            width: '277px',
                            height: '56px'                               
                        }}
                    >
                        <p>Fale Conosco</p>
                    </Box>
                    <Box
                    className="buttom-white"
                    sx={{
                        width: '277px',
                        height: '56px'                                   
                    }}
                >
                    <p>Saiba Mais</p>
                </Box>
                        
                </Box>

                </Box>
                <Box sx={{
                    backgroundImage: `url(${Banner})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '60vw',
                    height: '40vw',
                    display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
                }}>

                </Box>
               
            </Box>
    );
    }

export default Home;