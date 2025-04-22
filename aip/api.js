import http from './http.js'
import http1 from './http1.js'


//滚动overflow
export const sendPost = () => {
	return http('/sendpost')
}
export const apiSendpost = () => {
	return http1('/api/sendpost')
}

//瀑布流
export const waterfall = () => {
	return http('/waterfall')
}
//喜欢
export const collect = () => {
	return http('/collect')
}
export const adminLike = () => {
	return http1('/admin/like')
}


export const notice = () => {
	return http('/notice')
}

export const chat = () => {
	return http('/chat')
}
//
export const card = () => {
	return http('/card')
}
export const apiCard = () => {
	return http1('/api/card')
}
//
export const love = () => {
	return http('/love')
}
export const reply = () => {
	return http('/reply')
}

// export const test = (data) => {
// 	return http1('/test/first', data, 'POST')
// }
// export const test1 = (data = {}) => {
// 	return http1('/test/verify', data, 'POST')
// }





export function login(data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: "http://192.168.1.102:3000/api/auth/login",
			method: 'POST',
			data: data,
			header: {
				'token': uni.getStorageSync('token') || ''
			},
			success: res => {
				resolve(res.data)
			}
		})
	})
}