
// 全局loading的请求
let isRequest = [];

let id = 1;

let getId = () => id++;

class HttpService {
	get(opts){
		return new Promise((resolve,reject)=>{
			fetch(opts.url,{
				method:"GET",
				credentials: "same-origin"
			})
				.then((response)=>{
					resolve(response);
				})
				.catch((error) => {
					console.warn(error);
					reject(error);
				});
		});
	}

	post(opts,formData = true){
		return new Promise((resolve,reject)=>{
			fetch(opts.url,{
				method:'POST',
				credentials: "include",
				headers:Object.assign({
					'Content-Type':'application/json'
					// 'Content-Type':'application/x-www-form-urlencoded'
				},opts.headers),
				body:JSON.stringify(opts.body)
			})
				.then((response)=>{
					if (response.ok) {
						resolve(response.json());
					} else {
						// 状态异常 status != 200
						console.warn(opts.url, opts.body, response);
					}
				})
				.catch((error) => {
					console.warn(opts.url, opts.body, error);
					reject(error);
				});
		});
	}
}

export default new HttpService();