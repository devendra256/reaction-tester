            var start = new Date().getTime();
            function move(){
                
                //function for generating random colors
                function getRandomColor(){                    
                    var letters = '123456789ABCDEF';
                    var color = '#';
                    for(var i = 0; i < 6; i++){
                        color = color + letters[Math.floor(Math.random() * 16)];
                    }
                    return color;
                }
                var l;
                var t;
                var wh;
                l = Math.random() * 300;
                t = Math.random() * 300;
                wh = ((Math.random() * 400) + 100);
                document.getElementById("shape").style.left = l;
                document.getElementById("shape").style.top = t;
                document.getElementById("shape").style.height = wh;
                document.getElementById("shape").style.width = wh;
                document.getElementById("shape").style.display = "block";
                document.getElementById("shape").style.backgroundColor = getRandomColor();
                start = new Date().getTime();
            }
            move();
            document.getElementById("shape").onclick = function(){
                document.getElementById("shape").style.display = "none";
                var end = new Date().getTime();
                var timeTaken = (end - start)/1000;
                alert(timeTaken + " seconds");
                move();
            }