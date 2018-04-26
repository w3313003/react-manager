class Api {
	constructor() {
		this.user = { id: 1, name: 'test' }
		this.friends = [this.user, this.user, this.user]
		this.photo = 'not a real photo'
	}
	getUser() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(1)
				return resolve(222)
			}, 200)
		})
	}
	getFriends(userId) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(userId)
				return resolve(333)
			}, 3000)
		})
	}
	getPhoto(userId) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(userId)
				return resolve(this.user)
			}, 200)
		})
	}

	throwError() {
		return new Promise((resolve, reject) => {
			setTimeout(() => reject(new Error('Intentional Error')), 200)
		})
	}
}

async function asyncs() {
	var a = new Api;
	const b = await a.getUser();
	const c = await a.getFriends(b);
	const d = await a.getPhoto(c);
}

asyncs()