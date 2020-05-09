//左右轮播
function leftright(){
	var timer;
	var index = 0
	function play(){
		var mywidth = -245*index;
		index++;
		if(index>$("#top4_ul>ul>li").length-4){
			index=0
		}else{
	 		$("#top4_ul>ul>li").css("transform","translateX("+mywidth+"px)")
		}						
	}
	timer = setInterval(function(){
			play()
	},3000)
	//移上去停止
	$("#top4_auto").hover(function(){
		clearInterval(timer)
	},function(){
		timer = setInterval(function(){
			play()
		},3000)
	});
    //左按钮			
	$("#top4_auto_left").click(function(){
			clearInterval(timer)
			index--;
			var mywidth = -245*index;
			if(index<0){
				index=$("#top4_ul>ul>li").length-5
				$("#top4_ul>ul>li").css("transform","translateX("+mywidth+"px)")
			}else if(index==0){
				index=$("#top4_ul>ul>li").length-4
				$("#top4_ul>ul>li").css("transform","translateX("+mywidth+"px)")
			}else{
				$("#top4_ul>ul>li").css("transform","translateX("+mywidth+"px)")
			}
			
	})
	//右按钮
	$("#top4_auto_right").click(function(){
		clearInterval(timer)
		var mywidth = -245*index;
		index++;
		if(index>$("#top4_ul>ul>li").length-4){
			index=0
		}else{
	 		$("#top4_ul>ul>li").css("transform","translateX("+mywidth+"px)")
		}	
	})
	
}
