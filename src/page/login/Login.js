import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import logo from '../../assets/logo.svg'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router';
import { LogoContainer } from './style';
import { useUnprotectedPage } from './../../hooks/useUnprotectedPage';
import { useForm } from './../../hooks/useForm';
import { login } from './../../services/userServices';
import { goToFeed, goToSignUp } from './../../router/Coordinator';

export const Login = () => {

    useUnprotectedPage()

    const navigate = useNavigate()

    const { form, onChange } = useForm({
        email: '',
        password: ''
    })

    const handleLogin = (event) => {
        event.preventDefault();
        login(form, navigate)
        goToFeed(navigate)
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        goToSignUp(navigate)
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <LogoContainer>
                    <img alt='logo' src={logo} />
                    <h1>LiraEddit</h1>
                    <p>O projeto de rede social de Guilherme Lira</p>
                </LogoContainer>

                <Typography component="h1" variant="h5">
                    <br></br>Entrar
                </Typography>

                <Box component="form" onSubmit={handleLogin}>

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={form.email}
                        onChange={onChange}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={form.password}
                        onChange={onChange}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{
                            borderRadius: 35,
                            background: 'linear-gradient(90deg, #ff6489 0%, #f9b24e 100%)',
                        }}
                    >
                        Entrar
                    </Button>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 2 }}
                        onClick={handleSignUp}
                        style={{
                            borderRadius: 35,
                            background: 'linear-gradient(90deg, #ff6489 0%, #f9b24e 100%)',
                        }}
                    >
                        Sem conta? Cadastre-se aqui!
                    </Button>

                </Box>
            </Box>
        </Container>
    );
}