import httpService from './http';

let baseUrl = 'http://localhost:5001';

class Api {
	constructor() {
		this.urls = {
			login: '/app/login',
		};
		this.dealUrls(baseUrl);
	}

	dealUrls(baseUrl) {
		for( let key in this.urls) {
			this.urls[key] = baseUrl + this.urls[key];
		}
	}

	// 登录
	login(opts) {
		return httpService.post({ url: this.urls.login, ...opts });
	}
}


export default new Api();