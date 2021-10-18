let a=prompt("Enter the name of student: ")
console.log(a);
var html=`<h1>Enter the marks of ${a}</h1>`;
document.getElementById("heading").innerHTML=html;
        
                $('.form-group').on('input','.prc',function(){
                    var totalSum=0;
                    $('.form-group .prc').each(function(){
                        var inputVal=$(this).val();
                        if($.isNumeric(inputVal))
                        {
                            totalSum+=parseFloat(inputVal);
                        }
                    });
                
                 $('#result').text(totalSum);
                 $('.form-group1').on('input','.prc1',function(){
                    var totalSum1=0;
                    $('.form-group1 .prc1').each(function(){
                         var inputVal1=$(this).val();
                        if($.isNumeric(inputVal1))
                        {
                            totalSum1+=parseFloat(inputVal1);
                        }
                    });
                 $('#result1').text(totalSum1);
                let x=totalSum/totalSum1;
                x=x.toFixed(2);
                x=x*100+"%";
                $('#result2').text(x);
                });  
            });
            
            let sum=0;
            $('#result1').text(sum);
            $('#result2').text(sum);
            $('#result').text(sum);
            $('#res1').text(sum);
            $('#res2').text(sum);
            $('#res3').text(sum);
            $('#res4').text(sum);
            $('#res5').text(sum);
        
           
        $(document).ready(function(){
            $("button").click(function(){
              $("fieldset").toggle('slow');
            });
          });
    
          $('.form-group').on('input','.prc',function(){
            $('.form-group .prc').each(function(){
                var fir=$('#s1').val();
                // console.log(fir);
                $('.form-group1').on('input','.prc1',function(){
                    $('.form-group1 .prc1').each(function(){
                        var sec=$('#p1').val();
                        // console.log(sec);
                        var mul=fir/sec;
                        mul=mul.toFixed(2);
                        mul=mul*100+"%";
                         $('#res1').text(mul);
                    });
                });
            });
          });
          $('.form-group').on('input','.prc',function(){
            $('.form-group .prc').each(function(){
                var fir=$('#s2').val();
                // console.log(fir);
                $('.form-group1').on('input','.prc1',function(){
                    $('.form-group1 .prc1').each(function(){
                        var sec=$('#p2').val();
                        // console.log(sec);
                        var mul=fir/sec;
                        mul=mul.toFixed(2);
                        mul=mul*100+"%";
                         $('#res2').text(mul);
                    });
                });
            });
          });
          $('.form-group').on('input','.prc',function(){
            $('.form-group .prc').each(function(){
                var fir=$('#s3').val();
                // console.log(fir);
                $('.form-group1').on('input','.prc1',function(){
                    $('.form-group1 .prc1').each(function(){
                        var sec=$('#p3').val();
                        // console.log(sec);
                        var mul=fir/sec;
                        mul=mul.toFixed(2);
                        mul=mul*100+"%";
                         $('#res3').text(mul);
                    });
                });
            });
          });
          $('.form-group').on('input','.prc',function(){
            $('.form-group .prc').each(function(){
                var fir=$('#s4').val();
                // console.log(fir);
                $('.form-group1').on('input','.prc1',function(){
                    $('.form-group1 .prc1').each(function(){
                        var sec=$('#p4').val();
                        // console.log(sec);
                        var mul=fir/sec;
                        mul=mul.toFixed(2);
                        mul=mul*100+"%";
                         $('#res4').text(mul);
                    });
                });
            });
          });
          $('.form-group').on('input','.prc',function(){
            $('.form-group .prc').each(function(){
                var fir=$('#s5').val();
                // console.log(fir);
                $('.form-group1').on('input','.prc1',function(){
                    $('.form-group1 .prc1').each(function(){
                        var sec=$('#p5').val();
                        // console.log(sec);
                        var mul=fir/sec;
                        mul=mul.toFixed(2);
                        mul=mul*100+"%";
                         $('#res5').text(mul);
                    });
                });
            });
          });
         
                   
    