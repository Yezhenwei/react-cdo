
//时间格式化 xxxx-xx-xx
export function dateFormat(date){
		let d = new Date(date);
		return  d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
	}