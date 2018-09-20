import decode from 'jwt-decode'

export default class AuthService {
	constructor(domain) {
		this.domain = domain || 'http://localhost:3000'
	}

	register = (user) => {
		return this.fetch(`${this.domain}/users`, {
			method: "POST",
			body: JSON.stringify(user),
		})
		.then(res => {
			this.setToken(res.jti)
			return res
		})
	}
}
