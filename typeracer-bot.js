javascript:(function(){
                b=document.getElementsByTagName('body')[0];
		if(typeof jQuery!='undefined'){
               	    return showMsg();
                }
                function getScript(url,success){
                    var script=document.createElement('script');
                    script.src=url;
                    var head=document.getElementsByTagName('head')[0],
                    done=false;script.onload=script.onreadystatechange=function(){
                        if(!done&&(!this.readyState||this.readyState=='loaded'||this.readyState=='complete')){
                            done=true;success();script.onload=script.onreadystatechange=null;head.removeChild(script);
                        }
                    };
                    head.appendChild(script);
                }
                getScript('http://code.jquery.com/jquery-latest.min.js',function(){
                    return showMsg();
                });
                function showMsg(){
                    winTypeRacer();                
                }
                
                function winTypeRacer(){
                    text = $('div.nonHideableWords').text(); 
                    chars = text.length;
                    arrText = text.split(' '); 
                    arrLength = arrText.length;
                    timeRemaining = (((chars/5)*60)/190)*1000;
                    delay = timeRemaining/arrLength;
                    for (var i = 0; i < arrLength; i++) {
                        sleep(delay);
                        $('.txtInput').val(arrText[i]).trigger({type : 'keypress', which : 32});
                    } 
                }
                
                function sleep(milliseconds) {
                  var start = new Date().getTime();
                  for (var i = 0; i < 1e7; i++) {
                    if ((new Date().getTime() - start) > milliseconds){
                      break;
                    }
                  }
                }
            })();