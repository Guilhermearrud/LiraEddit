import logo from '../../assets/logo.svg'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from './../../hooks/useForm';
import { signup } from '../../services/userServices';
import { useNavigate } from 'react-router';

export const SingUp = () => {

    const navigate = useNavigate()

    const { form, onChange } = useForm({
        username: '',
        email: '',
        password: ''
    })

    const handleSignUp = (event) => {
        event.preventDefault();
        signup(form, navigate)
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
                <div sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <img alt='logo' src={logo} />
                </div>

                <Typography component="h1" variant="h5">
                    Inscreva-se!
                </Typography>

                <Box component="form" onSubmit={handleSignUp} sx={{ mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="username"
                                required
                                fullWidth
                                id="username"
                                label="Nome de Usuário"
                                autoFocus
                                value={form.username}
                                onChange={onChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="E-mail"
                                name="email"
                                autoComplete="email"
                                value={form.email}
                                onChange={onChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                value={form.password}
                                onChange={onChange}
                            />
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 2 }}
                    >
                        Ja tem conta? Faça login aqui!
                    </Button>

                </Box>
            </Box>
        </Container>
    );
}