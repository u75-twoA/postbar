let baseUrl = ''
baseUrl = 'http://127.0.0.1:3000'

export default function http(url, data = {}, method = 'GET') {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			data: data,
			method: method,
			header: {
				token: uni.getStorageSync('token') || ''
			},
			success: res => {
				resolve(res.data)
			}
		});
	});
}