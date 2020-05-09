//头部二维码隐藏
var top1_ul = document.getElementById("top1_li1")
top1_ul.addEventListener("mousemove",function(){
	document.getElementById("top1_li1_img").style.display = "block"
});
top1_ul.addEventListener("mouseout",function(){
	document.getElementById("top1_li1_img").style.display = "none"
});

//头部移上去变色
var top1_li_a = document.getElementById("top1_li_a")
top1_li_a.addEventListener("mousemove",function(){
	top1_li_a.style.color = "cornflowerblue"
})
top1_li_a.addEventListener("mouseout",function(){
	top1_li_a.style.color = "#E40077"
})

//头部城市vue渲染
new Vue({
	el:'#shan_left',
	data:{
		uls1:["郑州","安阳","商丘","许昌","平顶山","信阳","鹤壁","洛阳","开封","南阳","漯河","平顶山","三峡门","周口","濮阳"],
		uls:[
			{zhimu: "A-G",sheng:"北京 >安徽 >重庆 >福建 >广东 >广西 >甘肃 >贵州 >"},
			{zhimu: "H-J",sheng:"河北 >河南 >海南 >湖北 >湖南 >黑龙江 >吉林 >江苏 >江西 >"},
			{zhimu: "L-S",sheng:"辽宁 >内蒙古 >宁夏 >青海 >上海 >四川 >山东 >山西 >陕西 >"},
			{zhimu: "T-Z",sheng:"天津 >新疆 >西藏 >云南 >浙江 >"}
		],
	}
})

//省市js
function sheng(){
	var shan = document.getElementById("zhengzhou");
			shan.addEventListener("click",function(){
				document.getElementById("yincandiv").style.display = "block"
				var cityul = document.getElementById("yincandiv")	
				cityul.style.display = "block"
				var cityul1 = document.getElementById("shan_left_ul1")	
				cityul1.style.display = "block"
				var cityul = document.getElementById("shan_left_ul")
				cityul.style.display = "none"
				event.stopPropagation()
			})
			document.addEventListener("click",function(){
				document.getElementById("yincandiv").style.display = "none"
			})
			var shan2 = document.getElementById("quanbu")
			shan2.addEventListener("click",function(){
				var cityul = document.getElementById("shan_left_ul")
				var cityul2 = document.getElementById("shan_left_ul1")	
				cityul.style.display = "block"
				cityul2.style.display = "none"
				event.stopPropagation()
			})
}

//li隔行变色
var allli = document.getElementsByClassName("shan_right_xia_li")
for (var i=0;i<allli.length;i++) {
	if(i%2==0){
		allli[i].style.color = "#E40077"	
		allli[i].addEventListener("mousemove",function(){
			this.style.color = "cornflowerblue"
		})
		allli[i].addEventListener("mouseout",function(){			
				this.style.color = "#E40077"	
		})
	}else{
		allli[i].addEventListener("mousemove",function(){
			this.style.color = "cornflowerblue"
		})
		allli[i].addEventListener("mouseout",function(){			
				this.style.color = "#808080"	
		})
	}
}

//头部滑动固定
function yangshi(){
	$("#top2_3_auto>ul>li").each(function(index){
		$(this).click(function(){
			$("#top2_3_auto>ul>li").removeClass("div2_3_li")
			$(this).addClass("div2_3_li")
		})		
	})
}
function scroll(){
	//头部滑动固定滚动条
	if(document.body.scrollTop>560 || document.documentElement.scrollTop>560){
		document.getElementById("top2_3").style.display = "block"
		document.getElementById("top2_3").style.position = "fixed"
		document.getElementById("top2_3").style.zIndex = "888"
		document.getElementById("top2_3").style.marginTop="-165px"		
	}else{
		document.getElementById("top2_3").style.display = "none"
	}
	//1F-5F滚动条
	if(document.body.scrollTop>560 || document.documentElement.scrollTop>560){
		document.getElementById("content_left").style.display = "block"	
//		if(document.body.scrollTop>1250 || document.documentElement.scrollTop>1250){
////			document.getElementById("gudileftli2").style.backgroundColor="#0085D9"
////f2()
//		}
	}else{
		document.getElementById("content_left").style.display = "none"
	}
}

//右侧1F-5F
function gudileft(){
	//移上去
	$("#content_left>ul>li").each(function(index){
		$(this).hover(function(){
			$("#content_left>ul>li").children("a").removeClass("gudileftli_a")
			$(this).children("a").addClass("gudileftli_a")
			if(index==0){
				f1()
			}else if(index==1){
				f2()
			}else if(index==2){
				f3()
			}else if(index==3){
				f4()
			}else if(index==4){
				f5() 
			}
		})

	})
}

function f1(){
	document.getElementById("gudileftli").innerText = "享优惠"
	document.getElementById("gudileftli2").innerText = "2F"
	document.getElementById("gudileftli3").innerText = "3F"
	document.getElementById("gudileftli4").innerText = "4F"
	document.getElementById("gudileftli5").innerText = "5F"
}
function f2(){
	document.getElementById("gudileftli2").innerText = "业务推荐"
	document.getElementById("gudileftli").innerText = "1F"
	document.getElementById("gudileftli3").innerText = "3F"
	document.getElementById("gudileftli4").innerText = "4F"
	document.getElementById("gudileftli5").innerText = "5F"
}
function f3(){
	document.getElementById("gudileftli2").innerText = "2F"
	document.getElementById("gudileftli").innerText = "1F"
	document.getElementById("gudileftli3").innerText = "手机专区"
	document.getElementById("gudileftli4").innerText = "4F"
	document.getElementById("gudileftli5").innerText = "5F"
}
function f4(){
	document.getElementById("gudileftli2").innerText = "2F"
	document.getElementById("gudileftli").innerText = "1F"
	document.getElementById("gudileftli3").innerText = "3F"
	document.getElementById("gudileftli4").innerText = "智能硬件"
	document.getElementById("gudileftli5").innerText = "5F"
}
function f5(){
	document.getElementById("gudileftli2").innerText = "2F"
	document.getElementById("gudileftli").innerText = "1F"
	document.getElementById("gudileftli3").innerText = "3F"
	document.getElementById("gudileftli4").innerText = "4F"
	document.getElementById("gudileftli5").innerText = "咪咕娱乐"
}
