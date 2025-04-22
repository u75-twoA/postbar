let baseUrl = ''
baseUrl = 'http://127.0.0.1:4523/m1/6032339-5722127-default'

export default function http(url, data = {}, method = 'GET') {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			data: data,
			method: method,
			header: {
				'token': uni.getStorageSync('token') || ''
			},
			success: res => {
				resolve(res.data)
			}
		});
	});
}