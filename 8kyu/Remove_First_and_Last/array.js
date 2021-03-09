    //alert("Hello World !")
        function array(arr){
            //Good luck

            let arrEnd = [];
            let str = "";
            for(let i=0; i<arr.length; i++) {
                if (arr[i]!=" ") {
                    str+=arr[i];
                }
            }
            arrEnd = str.split(",");
            if (arrEnd.length<3) {
                return null;
            }
            else {
                arrEnd = arrEnd.slice(1,arrEnd.length-1);
                str = arrEnd.join(" ");
                return str;
            }
        }
        array('d3,55d ,ccd,gd6? ,3  4');    