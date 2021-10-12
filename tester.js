 const words=["My name is kushwanth vaddi and I am a engineering fresher. ",
                     "Hope you are having fun on working with this project like which you can make on your own.",
                     "If you want the source code you could right click and click on inspect you get sources.",
                     "I have done this project using Html, Css, Javascript.",
                    ];
        const msg = document.getElementById('msg');
        const typedtext = document.getElementById('maintext');
        const btn = document.getElementById('btn');
        let startTime, endTime;
        btn.addEventListener('click',function(){
            if(this.innerText == 'Start'){
                typedtext.disabled= false;
                playgame();
            }else if(this.innerText=='Done')
            {
                typedtext.disabled=true;
                btn.disabled= true;
                endgame();

            }
        })
        function playgame(){
            let randomnumber=Math.floor(Math.random()*words.length);
            msg.innerText= words[randomnumber];
            let date=new Date();
            startTime=date.getTime();
            btn.innerText="Done";
        }
        function endgame()
        {
            let date= new Date();
            endTime= date.getTime();
            let totaltime=((endTime-startTime)/1000);
            let totalstr=typedtext.value;
            let words=wordcount(totalstr); 
            let speed = Math.round((words/totaltime)*60);
            let intermsg= "You typed toatal at "+speed+ " words per minute";
            let finalmsg= comparewords(msg.innerText,totalstr);
            msg.innerText= intermsg+finalmsg;
        }
        function comparewords(str1, str2)
       {
           let words1=str1.split(" ");
           let words2= str2.split(" ");
           let count=0;
           words1.forEach(function (item, index){
               if(item == words2[index])
               {
                   count++;
               }
           })
           let errorwords=(words1.length - count);
           return (count+" correct out of "+words1.length+" wordds and the total number of errors are "+errorwords+".");
       }
        function wordcount(str)
        {
            let response = str.split(" ").length;
            return response;
        }
       
    