//轮播左侧vue渲染
new Vue({
	el:'#top3_left',
	data:{
		ulss:[
			{name:"主套餐",xiangxi:"全球通系列套餐",move:"更多"},
			{name:"流量业务",xiangxi:"流量月包 | 流量日套餐",move:"更多"},
			{name:"家庭业务",xiangxi:"宽带预约",move:"更多"},
			{name:"国际/港澳台",xiangxi:"开通漫游功能 | 一带一路多国流量 | 欧洲多国流量包",move:"更多"},
			{name:"基础服务",xiangxi:"和多号|和留言",move:"更多"},
			{name:"生活&娱乐",xiangxi:"咪咕圈圈  | 咪咕音乐 | 咪咕阅读",move:"更多"},
			{name:"优惠活动",xiangxi:"7天流量尽情享",move:"更多"}
		],
		ulss2:[
			{name:"热点关注",xiangxi:"华为畅享7iPhone XRP30",move:"更多"},
			{name:"经典品牌",xiangxi:"海尔 | 荣耀 | 联想 | 美图 | 酷派 | 锤子 | CMCC | 金立 | 诺基亚 | 中兴 | 天语 | 飞利浦 | 三星 | OPPO | VIVO | 魅族 | 华为 | 苹果 | 小米",move:"更多"},
			{name:"价位段",xiangxi:"3000以上 | 2000-2999 | 1000-1999 | 700-999 | 300-69 | 90-299",move:"更多"},
			{name:"屏幕尺寸",xiangxi:"5.6英寸以上 | 5.0-5.6英寸 | 4.1-4.9英寸 | 3.0-4.0英寸 | 3.0英寸以下",move:"更多"},
			{name:"热门机型",xiangxi:"华为P30 | 华为Nova4e | 荣耀V20 | iPhoneXR",move:"更多"},
			{name:"精品推荐",xiangxi:"套餐余量查询 | 交费记录查询",move:"更多"}
		]
	}
})

//轮播右侧vue渲染
new Vue({
	el:"#top3_right",
	data:{
		topuls:[
			{imgs:'img/top3img/right1.gif',name:"花费查询"},
			{imgs:'img/top3img/right2.gif',name:"流量查询"},
			{imgs:'img/top3img/right3.png',name:"国际/港澳台"},
			{imgs:'img/top3img/right4.gif',name:"积分兑换"},
			{imgs:'img/top3img/right5.gif',name:"优惠专区"},
			{imgs:'img/top3img/right6.png',name:"宽带服务"}
		]
	}
})

//优惠专区vue渲染图片
new Vue({
	el:"#top4",
	data:{
		lisimg : [
			{imgs:"img/top4img/5G.PNG"},
			{imgs:"img/top4img/kuandai.PNG"},
			{imgs:"img/top4img/liulian.PNG"},
			{imgs:"img/top4img/toutiao.PNG"},
			{imgs:"img/top4img/xiangyin.PNG"},
			{imgs:"img/top4img/5G.PNG"},
			{imgs:"img/top4img/kuandai.PNG"},
			{imgs:"img/top4img/liulian.PNG"},
			{imgs:"img/top4img/toutiao.PNG"},
			{imgs:"img/top4img/xiangyin.PNG"},
			{imgs:"img/top4img/5G.PNG"},
			{imgs:"img/top4img/kuandai.PNG"},
			{imgs:"img/top4img/liulian.PNG"},
			{imgs:"img/top4img/toutiao.PNG"},
			{imgs:"img/top4img/xiangyin.PNG"}
		]
	}
})

//4F图片渲染
new Vue({
	el:"#bigcontent3",
	data:{
		uls:[
			{imgs:"img/contentimg/iPhone.jpg"},
			{imgs:"img/contentimg/xiaomi.jpg"},
			{imgs:"img/contentimg/huawei.jpg"},
			{imgs:"img/contentimg/shanxing.jpg"},
			{imgs:"img/contentimg/vivo.jpg"},
			{imgs:"img/contentimg/oppo.jpg"},
			{imgs:"img/contentimg/tian.jpg"},
			{imgs:"img/contentimg/luojiyua.jpg"},
			{imgs:"img/contentimg/feilipu.jpg"},
			{imgs:"img/contentimg/yidong.jpg"}
		]
	}
})

//5F图片渲染
new Vue({
	el:"#bigcontent5_content_left2",
	data:{
		uls:[
			{imgs:"img/5Fimg/mao.jpg",name:"猫",zhuozhe:"阿暖"},
			{imgs:"img/5Fimg/if.jpg",name:"如果你要毁灭世界",zhuozhe:"李运琪"},
			{imgs:"img/5Fimg/summing.jpg",name:"忽而今夏",zhuozhe:"汪苏泷"},
			{imgs:"img/5Fimg/time.jpg",name:"时间飞行",zhuozhe:"白宇，朱一龙"},
			{imgs:"img/5Fimg/xingfu.jpg",name:"幸福的主角",zhuozhe:"高安+李佳丹"},
			{imgs:"img/5Fimg/xugou.jpg",name:"虚构",zhuozhe:"赵雪莉"},
			{imgs:"img/5Fimg/zairu.jpg",name:"载入史册",zhuozhe:"梁龙"},
			{imgs:"img/5Fimg/zhuang.jpg",name:"绒对妆",zhuozhe:"荣祖儿"},
			{imgs:"img/5Fimg/wrold.jpg",name:"相约的世界",zhuozhe:"张靓颖+蔡国庆+张..."},
			{imgs:"img/5Fimg/xixi.jpg",name:"熙熙攘攘",zhuozhe:"金志文"}
		],
		uls2:[
			{imgs:"img/5Fimg/duoge.jpg",name:"我的汉克狗",zhuozhe:"149.90MB"},
			{imgs:"img/5Fimg/box.jpg",name:"街头篮球",zhuozhe:"622.20MB"},
			{imgs:"img/5Fimg/wangzhe.jpg",name:"王者荣耀",zhuozhe:"1.38GB"},
			{imgs:"img/5Fimg/ma.jpg",name:"率师之宾",zhuozhe:"380.80MB"},
			{imgs:"img/5Fimg/long.jpg",name:"龙之谷",zhuozhe:"1.30GB"},
			{imgs:"img/5Fimg/xong.jpg",name:"熊出没",zhuozhe:"66.65MB"},
			{imgs:"img/5Fimg/huo.jpg",name:"火影忍者",zhuozhe:"89.70MB"},
			{imgs:"img/5Fimg/xian.jpg",name:"跳舞的线",zhuozhe:"49.98MB"},
			{imgs:"img/5Fimg/ba.jpg",name:"兽王争霸",zhuozhe:"198.90MB"},
			{imgs:"img/5Fimg/yu.jpg",name:"捕鱼达人",zhuozhe:"400.90MB"}
		],
		uls3:[
			{imgs:"img/5Fimg/xong.jpg",name:"熊出没",zhuozhe:"66.65MB"},
			{imgs:"img/5Fimg/huo.jpg",name:"火影忍者",zhuozhe:"89.70MB"},
			{imgs:"img/5Fimg/time.jpg",name:"时间飞行",zhuozhe:"白宇，朱一龙"},
			{imgs:"img/5Fimg/xingfu.jpg",name:"幸福的主角",zhuozhe:"高安+李佳丹"},
			{imgs:"img/5Fimg/if.jpg",name:"猫",zhuozhe:"阿暖"},
			{imgs:"img/5Fimg/xong.jpg",name:"熊出没",zhuozhe:"66.65MB"},
			{imgs:"img/5Fimg/ba.jpg",name:"兽王争霸",zhuozhe:"198.90MB"},
			{imgs:"img/5Fimg/yu.jpg",name:"捕鱼达人",zhuozhe:"400.90MB"},
			{imgs:"img/5Fimg/zairu.jpg",name:"载入史册",zhuozhe:"梁龙"},
			{imgs:"img/5Fimg/zhuang.jpg",name:"绒对妆",zhuozhe:"荣祖儿"}
		],
		uls4:[
			{imgs:"img/5Fimg/time.jpg",name:"时间飞行",zhuozhe:"白宇，朱一龙"},
			{imgs:"img/5Fimg/xingfu.jpg",name:"幸福的主角",zhuozhe:"高安+李佳丹"},
			{imgs:"img/5Fimg/xugou.jpg",name:"虚构",zhuozhe:"赵雪莉"},
			{imgs:"img/5Fimg/zairu.jpg",name:"载入史册",zhuozhe:"梁龙"},
			{imgs:"img/5Fimg/zhuang.jpg",name:"绒对妆",zhuozhe:"荣祖儿"},
			{imgs:"img/5Fimg/wrold.jpg",name:"相约的世界",zhuozhe:"张靓颖+蔡国庆+张..."},
			{imgs:"img/5Fimg/xixi.jpg",name:"熙熙攘攘",zhuozhe:"金志文"},
			{imgs:"img/5Fimg/if.jpg",name:"猫",zhuozhe:"阿暖"},
			{imgs:"img/5Fimg/xong.jpg",name:"熊出没",zhuozhe:"66.65MB"},
			{imgs:"img/5Fimg/ba.jpg",name:"兽王争霸",zhuozhe:"198.90MB"},
			{imgs:"img/5Fimg/yu.jpg",name:"捕鱼达人",zhuozhe:"400.90MB"}
		]
	}
})
new Vue({
	el:"#content5_right1",
	data:{
		uls:[
			{imgs:"img/5Fimg/geshou.jpg",name:"再也没有"},
			{imgs:"img/5Fimg/huang.jpg",name:"淡黄色调的忧伤"},
			{imgs:"img/5Fimg/Begger.jpg",name:"Beggar"},
			{imgs:"img/5Fimg/e.jpg",name:"天鹅之歌"},
			{imgs:"img/5Fimg/dao.jpg",name:"盗火"},
			{imgs:"img/5Fimg/chujian.jpg",name:"初见初恋"},
			{imgs:"img/5Fimg/tianxue.jpg",name:"听雪"},
			{imgs:"img/5Fimg/xiang.jpg",name:"我好想盘你"},
			{imgs:"img/5Fimg/puti.jpg",name:"菩提"},
			{imgs:"img/5Fimg/xiangyue.jpg",name:"相约世界"}
		]
	}
})

//猜你喜欢图片vue渲染
new Vue({
	el:"#bigcontent6",
	data:{
		uls:[
			{top1:"来电提醒",top2:"2.00元",img:"img/likeimg/tu1.jpg",bottom:"轻松上网，一键搞定！种类多，选择多，越高越优惠。没有流量了？..."},
			{top1:"咪咕阅读定向流量包",top2:"5.00元",img:"img/likeimg/tu4.jpg",bottom:"咪咕阅读定向流量包，适用于咪咕阅读APP"},
			{top1:"通勤流量包",top2:"9.99元",img:"img/likeimg/tu3.jpg",bottom:"轻松上网，一键搞定！种类多，选择多，越高越优惠。没有流量了？..."},
			{top1:"港澳台三日畅游包",top2:"88.00元",img:"img/likeimg/tu2.jpg",bottom:"港澳台三地通用，畅享流量+赠送通话时长"},
			{top1:"港澳台三地流量包",top2:"68.00元",img:"img/likeimg/tu5.jpg",bottom:"一地订购，三地通用，3/5/7天畅享流量"},
			{top1:"日本大包多天流量包",top2:"68.00元",img:"img/likeimg/tu6.jpg",bottom:"3/5/7天畅享流量"},
			{top1:"韩国大包多天流量包",top2:"68.00元",img:"img/likeimg/tu7.jpg",bottom:"3/5/7天畅享流量"},
			{top1:"腾讯视频包",top2:"10.00元",img:"img/likeimg/tu8.jpg",bottom:"9元15BG,18元30GB,24元49GB"},
			{top1:"月末流量包",top2:"9.00元",img:"img/likeimg/tu9.jpg",bottom:"10元2GB国内流量"},
			{top1:"网易态度包",top2:"18.00元",img:"img/likeimg/tu10.jpg",bottom:"一地订购，三地通用，3/5/7天畅享流量"},
			{top1:"【熠天海纳】魅族16s 12...",top2:"3198.00元",img:"img/likeimg/tu11.jpg",bottom:"新品现货，顺丰速发"},
			{top1:"iPhone11 Pro Max（A2...",top2:"9499.00元",img:"img/likeimg/tu13.jpg",bottom:"中国移动端，安全可靠，等你选购，邂逅好货，发现理想生活，抢..."},
			{top1:"荣耀10青春版 128GB 公...",top2:"1269.00元",img:"img/likeimg/tu12.jpg",bottom:"中国移动端，安全可靠，等你选购，邂逅好货，发现理想生活，抢..."},
			{top1:"OPPO Find X2 Pro兰博...",top2:"12999.00元",img:"img/likeimg/tu14.jpg",bottom:"中国移动端，安全可靠，等你选购，邂逅好货，发现理想生活，抢..."},
			{top1:"华为P30 Pro 全网通4G...",top2:"3999.00元",img:"img/likeimg/tu15.jpg",bottom:"中国移动端，安全可靠，等你选购，邂逅好货，发现理想生活，抢..."}
			
		]
	}
})

//特色专区
new Vue({
	el:"#bigcontent7",
	data:{
		uls:[
			{img:"img/teseimg/tu1.jpg",spans1:"国际/港澳台业务专区",spans2:"随时随地，沟通不下线"},
			{img:"img/teseimg/tu2.jpg",spans1:"资费专区",spans2:"自由选择，随心组合"},
			{img:"img/teseimg/tu3.jpg",spans1:"VoLTE专区",spans2:"高品质音，视频通话服务"},
			{img:"img/teseimg/tu4.jpg",spans1:"宽带专区",spans2:"畅快网络，极速光纤全家共享"}
		]
	}
})

//第一个底部li渲染
new Vue({
	el:"#bottom",
	data:{
		uls:[
			{lis:"自助终端"},
			{lis:"MM"},
			{lis:"网上缴费"},
			{lis:"流量月包"},
			{lis:"购物指南"},
			{lis:"10086热线"},
			{lis:"和飞信"},
			{lis:"花费查询"},
			{lis:"4G套餐"},
			{lis:"付费方式"},
			{lis:"实体营业厅"},
			{lis:"和包"},
			{lis:"流量查询"},
			{lis:"移动光宽带"},
			{lis:"物流配送"},
			{lis:"短信营业厅"},
			{lis:"咪咕阅读"},
			{lis:"积分查询"},
			{lis:"选号入网"},
			{lis:"售后服务"},
			{lis:"网上营业厅"},
			{lis:"139邮箱"},
			{lis:"套餐余量"},
			{lis:"一卡多号"},
			{lis:"个人中心"},
			{lis:"客户端/掌上营业厅"},
			{lis:"能力开放商店"},
			{lis:"电子发票"},
			{lis:"4G高清语音"},
			{lis:"网站服务协议"}
		]
	}
})
