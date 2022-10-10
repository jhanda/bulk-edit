export const addObject = object => {
	return fetch(`http://localhost:8080/o/c/j4x7objects/`, {
		body: JSON.stringify({
			description: object.description,
			name: object.name,
		}),
		headers: {
			Authorization: 'Basic ' + btoa('jeffrey.handa@liferay.com:asdf'),
			'Content-Type': 'application/json',
		},
		method: 'POST',
	});
};

export const deleteObject = id => {
	return fetch(`http://localhost:8080/o/c/j4x7objects/${id}`, {
		headers: {
			Authorization: 'Basic ' + btoa('jeffrey.handa@liferay.com:asdf'),
			'Content-Type': 'application/json',
		},
		method: 'DELETE',
	});
};

export const getCatalogs = () => {
	return fetch(`http://localhost:8080/o/headless-commerce-admin-catalog/v1.0/catalogs`, {
		headers: {
			Authorization: 'Basic ' + btoa('jeffrey.handa@liferay.com:asdf'),
			'Content-Type': 'application/json',
		},
		method: 'GET',
	});
};

export const getProducts = (searchTerm) => {
	return fetch(`http://localhost:8080/o/headless-commerce-admin-catalog/v1.0/products?nestedFields=categories&search=${searchTerm}/`, {
		headers: {
			Authorization: 'Basic ' + btoa('jeffrey.handa@liferay.com:asdf'),
			'Content-Type': 'application/json',
		},
		method: 'GET',
	});
};

export const patchObject = object => {
	return fetch(`http://localhost:8080/o/c/j4x7objects/${object.id}`, {
		body: JSON.stringify({
			description: object.description,
			name: object.name,
		}),
		headers: {
			Authorization: 'Basic ' + btoa('jeffrey.handa@liferay.com:asdf'),
			'Content-Type': 'application/json',
		},
		method: 'PATCH',
	});
};

export const getTags = (siteId) => {
	return fetch(`http://localhost:8080/o/headless-admin-taxonomy/v1.0/sites/${siteId}/keywords/`, {
		headers: {
			Authorization: 'Basic ' + btoa('jeffrey.handa@liferay.com:asdf'),
			'Content-Type': 'application/json',
		},
		method: 'GET',
	});
};



