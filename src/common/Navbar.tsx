import React from 'react';
import {
	Box,
	AppBar,
	Toolbar,
	Container,
	Grid,
	Button,
	Typography,
	Stack,
} from '@mui/material';

export const Navbar: React.FC<{}> = (): JSX.Element => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='fixed'>
				<Toolbar>
					<Container maxWidth='xl'>
						<Grid
							container
							direction='row'
							justifyContent='space-between'
							alignItems='center'
						>
							<Grid item>
								<Typography>Bryan Aguilar</Typography>
							</Grid>
							<Grid item>
								<Stack direction='row' spacing={2}>
									<Button variant='contained'>Login</Button>
									<Button variant='outlined'>Register</Button>
								</Stack>
							</Grid>
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
