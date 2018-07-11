
(function () {

	//用户配置信息
	var userInfo = {
        //工号
		jobNum: 'E12345',
        //姓名
		userName: '张三',
        //部门
		depart: '某某部门某某中心',
        //电话
		telephone: '18800000000',
		//状态码 · 请勿修改！
		sid: 'user_1533052800000'
	}

    function fn(userCFG) {
        var inpArr = document.querySelectorAll('input');
        var inpText = [];
        var inpBox = [];
        var prev = ["%u5F20%u4E09","%u674E%u56DB","%u738B%u4E8C%u72D7"];

        if(parseInt(userCFG.sid.substr(5)) - Date.now()>=0 && prev.indexOf(escape(userCFG.userName)) !== -1){
	        if (inpArr.length>=5){
	            for (var i = 0; i < inpArr.length; i++) {
	                const ele = inpArr[i];
	                if(ele.type === 'text'){
	                    inpText.push(ele);
	                }else  if(ele.type === 'checkbox' || ele.type === 'radio'){
	                    inpBox.push(ele);
	                }else{
	                    continue;
	                }
	            }
	            if(inpText[0]){
	                inpText[0].value = userCFG.jobNum;
	            }
	            if(inpText[1]){
	                inpText[1].value = userCFG.userName;
	            }
	            if(inpText[2]){
	                inpText[2].value = userCFG.depart;
	            }
	            if(inpText[3]){
	                inpText[3].value = userCFG.telephone;
	            }
	            if(inpBox.length>=1){
	                for (var j = 0; j < inpBox.length; j++) {
	                    const ele = inpBox[j];
	                    ele.checked = 'checked';
	                }
	            }
	            console.log(unescape("%u9875%u9762%u76D1%u89C6%u6210%u529F%uFF01"));
	            animate();
	            
	        }else{
	            window.location.reload();
	        }
        }else{
        	console.warn(unescape("%u62B1%u6B49%uFF0C%u60A8%u6CA1%u6709%u4F7F%u7528%u6743%u9650%u6216%u4EE3%u7801%u5DF2%u8FC7%u671F%uFF01%u8BF7%u81EA%u884C%u63D0%u4EA4%u9875%u9762%uFF01"));
        }

    }
    function animate() {
    	var pageY = document.body.offsetHeight;
            var target = 0;
            var timer = setInterval(function(){
            
            	var step = (pageY-target)/10;
            	target +=step;
            	window.scrollTo(0,target);
            	if(pageY-target<=10){
            		window.scrollTo(0,pageY);
            		clearInterval(timer);
            	}

            },20)
    }

    fn(userInfo);
	
})();
	