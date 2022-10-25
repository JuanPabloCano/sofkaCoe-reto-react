import React, { useState, useEffect } from 'react';

export const UseFetch = (url) => {
	const [result, setResult] = useState({ loading: true, data: null });

	useEffect(() => {
		getDatos(url);
	}, [url]);

	async function getDatos(url) {
		try {
			setResult({ loading: true, data: null });
			const response = await fetch(url);
			const data = await response.json();
			setResult({ loading: false, data });
		} catch (err) {
			console.log(err.message);
		}
	}

	return result;
};