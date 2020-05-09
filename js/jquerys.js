//轮播图片
new Vue({
	el:"#top3_content",
	data:{
		uls:[
			{imgUrl :"img/top3img/lunbo1.jpg"},
			{imgUrl :"img/top3img/lunbo2.jpg"},
			{imgUrl :"img/top3img/lunbo3.jpg"},
			{imgUrl :"img/top3img/lunbo4.jpg"},
			{imgUrl :"img/top3img/lunbo5.jpg"},
			{imgUrl :"img/top3img/lunbo6.jpg"},
			{imgUrl :"img/top3img/lunbo7.jpg"},
			{imgUrl :"img/top3img/lunbo8.jpg"},
			{imgUrl :"img/top3img/lunbo9.jpg"}
			
		]
		
	},
})

//轮播左列表
function lunboleft (){
	$("#top3_left>ul>li").hover(function(){
		$(this).children("a").addClass('lis');
		$(this).children("a").css("color","cornflowerblue")
		$(this).children("div").show();
		$(this).children("div").css('border',"1px solid cornflowerblue")
	},function(){
		$(this).children("a").removeClass('lis');
		$(this).children("a").css("color","black")
		$(this).children("div").hide();
	})
}

//轮播
function lunbo(){
	var num = 0;
	function show(){
		//找到第一个li列表，设置动画不透明，z-index=888,他同级 的li透明z-index=888-num
		$('#top3_content>ul>li').eq(num).animate({'opacity':1,"z-index":888}).siblings('li').animate({'opacity':0,'z-index':888-num});
		$("#top3_content>ol>li").eq(num).addClass('actives').siblings('li').removeClass('actives');
	}
	function play(){
		num++
		if(num>$("#top3_content ul li").length-1){//大于li的长度就从第一张开始
			num=0
		}
		show()
	}
	function bgcolor(){
		//改变背景颜色
		if(num==0){
			$('#top3').css("background-color","#F873B5")
		}else if(num==2){
			$('#top3').css("background-color","#0167E5")
		}else if(num==3){
			$('#top3').css("background-color","#6D8ADF")
		}else if(num==4){
			$('#top3').css("background-color","#EF5512")
		}else if(num==5){
			$('#top3').css("background-color","#E5F6FE")
		}else if(num==6){
			$('#top3').css("background-color","#75B67E")
		}else if(num==7){
			$('#top3').css("background-color","#673BB7")
		}else if(num==8){
			$('#top3').css("background-color","#030301")
		}else {
			$('#top3').css("background-color","#0D1345")
		}
	}
	var timer = setInterval(function(){
		play()
		bgcolor()
	},3000)
	//移上去停止，移走开始轮播
	$('#top3_content').mouseover(function(){ 
		$("#left").css("display","block")
		$("#right").css("display","block")
		clearInterval(timer); 
	}) 
	$('#top3_content').mouseout(function(){ 
		$("#left").css("display","none")
		$("#right").css("display","none")
		timer = setInterval(function(){
			play()
			bgcolor()
		},3000);
	}) 
	//经过小圆点
	$('#top3_content>ol>li').click(function(){
			//获取当前的li下标
			var index = $("#top3_content>ol>li").index(this)
			$("#top3_content>ul>li").eq(index).animate({'opacity':1,'z-index':15}).siblings('li').animate({'opacity':0,'z-index':15-index})
			$(this).addClass("actives").siblings("li").removeClass("actives")
			//改变背景颜色
			if(index==0){
				$('#top3').css("background-color","#F873B5")
			}else if(index==2){
				$('#top3').css("background-color","#0167E5")
			}else if(index==3){
				$('#top3').css("background-color","#6D8ADF")
			}else if(index==4){
				$('#top3').css("background-color","#EF5512")
			}else if(index==5){
				$('#top3').css("background-color","#E5F6FE")
			}else if(index==6){
				$('#top3').css("background-color","#75B67E")
			}else if(index==7){
				$('#top3').css("background-color","#673BB7")
			}else if(index==8){
				$('#top3').css("background-color","#030301")
			}else {
				$('#top3').css("background-color","#0D1345")
			}
	})
	//左右按钮
	$('#left').click(function(){
		num--; 
		if(num<0){ 
		num = $('#top3_content ul li').length-1; 
		} 
		show(); 
		bgcolor()
	})
	$('#right').click(function(){
		num++; 
		if(num>=$('#top3_content ul li').length){ 
		num=0 
		} 
		show(); 
		bgcolor()
	})
}

//花费流量切换
function que(){
	$("#top3_right_bottom>span").each(function(index){
		$(this).click(function(){
			//清除所有li的字体颜色
			$(this).siblings("span").removeClass("span1")
			//给当前点击的li设置颜色
			$(this).addClass("span1")
			//隐藏所有内容
			$("#top3_right_bottom>div").hide()
			//设置对应板块显示第几个div
			$("#top3_right_bottom>div:eq("+index+")").show()
		})
	})
	
	//花费钱数和流量G数
	$("#div1>ul>li").each(function(index){
		$(this).click(function(){
			$("#div1>ul>li").removeClass("div1_li")
			$(this).addClass("div1_li")
		})		
	})
	$("#div2>ul>li").each(function(index){
			$(this).click(function(){
				$("#div2>ul>li").removeClass("div1_li")
				$(this).addClass("div1_li")
			})		
	})
}
