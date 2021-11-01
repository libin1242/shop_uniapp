import {
	request
} from "../request/index.js"
// 首页轮播数据
export const getswpierdataApi = (data) => {
	return request({
		url: "/home/swiperdata",
		method: "GET",
		data
	})
}
// 首页导航数据
export const getcarddataApi = (data) => {
	return request({
		url: "/home/catitems",
		method: "GET",
		data
	})
}
// 首页楼层数据
export const getfloordataApi = (data) => {
	return request({
		url: "/home/floordata",
		method: "GET",
		data
	})
}
