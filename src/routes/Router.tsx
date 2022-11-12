import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { RouterLayout } from '@/common';
import { HomePage } from '@/pages/home';
import { LoginPage } from '@/pages/login';
import { CharacterPage } from '@/pages/character';

export const AppRouter: React.FC<{}> = (): JSX.Element => {
	return (
		<Routes>
			<Route path='/' element={<RouterLayout />}>
				<Route path='/' element={<HomePage />} />
				<Route path='/character/:id' element={<CharacterPage />} />
			</Route>
			<Route path='/login' element={<LoginPage />} />
		</Routes>
	);
};
