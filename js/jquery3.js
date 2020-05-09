//5F
function migu(){
	$("#bigcontent5_content_left>ul>li").hover(function(){
		$(this).addClass("migus").siblings("li").removeClass("migus")		
	})
	$("#bigcontent5_content_left>ul>li").each(function(index){
		$(this).hover(function(){
			$("#bigcontent5_content_left2>ul>li:eq("+index+")").show()
			if(index==0){
				$(".li1").show()
			}else{
				$(".li1").hide()
			}
			if(index==1){
				$(".li2").show()
			}else{
				$(".li2").hide()
			}
			if(index==2){
				$(".li3").show()
			}else{
				$(".li3").hide()
			}
			if(index==3){
				$(".li4").show()
			}else{
				$(".li4").hide()
			}
		},function(){
			$("#bigcontent5_content_left2>ul>li:eq("+index+")").show()
		})
	}) 
	
	$(function(){
		var index=0
		//左
		function spans(){
			index = 5
			var numbers = 0
			if(index==0){
				$(".li1_span").attr("disabled","disabled");
			}				
			$(".li_div2>ul>li").css("transform","translateY("+numbers+"px)")		
		}
		//右
		function spans2(){
			index = 5
			var numbers = -80*index
			if(index==0){
				$(".li1_span").attr("disabled","disabled");
			}
			$(".li_div2>ul>li").css("transform","translateY("+numbers+"px)")
		
		}
		//li1
		$(".li1_span").click(function(){
			spans()
			document.getElementById("first_span").innerText="1/2"
		})
		$(".li1_span2").click(function(){
			spans2()
			document.getElementById("first_span").innerText="2/2"
		})
		//li2
		$(".li2_span").click(function(){
			spans()
			document.getElementById("first_span2").innerText="1/2"
		})
		$(".li2_span2").click(function(){
			spans2()
			document.getElementById("first_span2").innerText="2/2"
		})
		//li3
		$(".li3_span").click(function(){
			spans()
			document.getElementById("first_span3").innerText="1/2"
		})
		$(".li3_span2").click(function(){
			spans2()
			document.getElementById("first_span3").innerText="2/2"
		})
		//li4
		$(".li4_span").click(function(){
			spans()
			document.getElementById("first_span4").innerText="1/2"
		})
		$(".li4_span2").click(function(){
			spans2()
			document.getElementById("first_span4").innerText="2/2"
		})
	})
	
	$(function(){
		var index = 0
		//左
		$(".content5_span").click(function(){
			index = 5
			var numbers = 0
			if(index==0){
				$(".content5_span").attr("disabled","disabled");
			}				
			document.getElementById("first5_span").innerText = "1/2"
			$(".bigcontent5_div2>ul>li").css("transform","translateX("+numbers+"px)")
		})
		//右
		$(".content5_span2").click(function(){
			index = 5
			var numbers = -710
			if(index==0){
				$(".content5_span").attr("disabled","disabled");
			}				
			document.getElementById("first5_span").innerText = "2/2"
			$(".bigcontent5_div2>ul>li").css("transform","translateX("+numbers+"px)")
		})
	})
}

//猜你喜欢
function like(){
	var index = 1
	$(".bigcontent6_top>p").click(function(){
		var mywidth = -1230*index;
		index++;
		if(index>3){
			index=1
			$(".ul_div>ul>li").css("transform","translateX(0px)")
		}else{
	 		$(".ul_div>ul>li").css("transform","translateX("+mywidth+"px)")
		}	
	})
}

//特色专区
function tese(){
	var index =0
	var timers
	function play(){	
		var myhigth = -40*index
		index++
		if(index>$(".big7_div2>ul>li").length){
			index=0
		}else{
			$(".big7_div2>ul>li").css("transform","translateY("+myhigth+"px)")
		}		
	}
	timers = setInterval(function(){
		play()
	},2000)
	//左
	$(".big7_span1").hover(function(){
		clearInterval(timers)
	},function(){
		timers = setInterval(function(){
			play()
		},2000)
	})
	$(".big7_span1").click(function(){
		clearInterval(timers)
		var myhigth = -40*index
		index--
		if(index<0){
			index=$(".big7_div2>ul>li").length-1
			$(".big7_div2>ul>li").css("transform","translateY("+myhigth+"px)")
		}else{
			$(".big7_div2>ul>li").css("transform","translateY("+myhigth+"px)")
		}
	})
	//右
	$(".big7_span2").hover(function(){
		clearInterval(timers)
	},function(){
		timers = setInterval(function(){
			play()
		},2000)
	})
	$(".big7_span2").click(function(){
		clearInterval(timers)
		var myhigth = -40*index
		index++
		if(index>$(".big7_div2>ul>li").length){
			index=0
		}else{
			$(".big7_div2>ul>li").css("transform","translateY("+myhigth+"px)")
		}
	})
	
}


//右侧固定
function gudiright(){
	for (var i=0;i<3;i++) {
		$(".right_lis"+i).hover(function(){
			$(this).addClass("adr").siblings("li").removeClass("adr")
			$(this).children("span").show()
			$(this).children("img").css("background-color","#0085D9")
		},function(){
			$(this).removeClass("adr")
			$(this).children("span").hide()
			$(this).children("img").css("background-color","#707070")
		})
	}
}
