var i;
var j=1;
for(i=0;i<42;i++)
{let element =  document.getElementById("a"+i.toString());
element.style.backgroundColor="white";

}
var red=[];
var blue=[];

const winningArrays = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
  ];

//   function check()
//   {
//     red.sort();
//     blue.sort();
    
//     var k;
//     for(k=0;k<=red.length;k++)
//     {
//         if(red.length>=4)
//         {
//             if(red[k+1]-red[k]==red[k+2]-red[k+1]&&red[k+3]-red[k+2]==red[k+2]-red[k+1])
//             {
//                 document.getElementById("res").innerText="Player 1 wins";
//                 break;
//             }
//         }
        
//     }

//     for(k=0;k<=blue.length;k++)
//     {
//         if(blue.length>=4)
//         {
//             if(blue[k+1]-blue[k]==blue[k+2]-blue[k+1]&&blue[k+3]-blue[k+2]==blue[k+2]-blue[k+1])
//             {
//                 document.getElementById("res").innerText="Player 2 wins";
//                 break;
//             }
//         }
        
//     }
//   }

function check()
{
    var k;
    for(k=0;k<winningArrays.length;k++)
    {
        
        if(red.includes(winningArrays[k][0])&&red.includes(winningArrays[k][1])&&red.includes(winningArrays[k][2])&&red.includes(winningArrays[k][3]))
        {
            
            document.getElementById("res1").innerText="Player 1 wins";
            document.getElementById("res").style.display="block";
            // for(i=1;i<=42;i++)
            // {let element =  document.getElementById("a"+i.toString());
            // element.style.backgroundColor="white";

            // }
            break;
        }
        if(blue.includes(winningArrays[k][0])&&blue.includes(winningArrays[k][1])&&blue.includes(winningArrays[k][2])&&blue.includes(winningArrays[k][3]))
        {
            document.getElementById("res1").innerText="Player 2 wins";
            document.getElementById("res").style.display="block";
            // for(i=1;i<=42;i++)
            // {let element =  document.getElementById("a"+i.toString());
            // element.style.backgroundColor="white";

            // }
            break;
        }
    }
}

document.getElementById("a0").addEventListener("click",function(){
    if(document.getElementById("a0").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a0").style.backgroundColor="red";red.push(0);}
        else
        {document.getElementById("a0").style.backgroundColor="blue";blue.push(0);}

        j++;check();
    }
    
});

document.getElementById("a7").addEventListener("click",function(){
    if(document.getElementById("a0").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a0").style.backgroundColor="red";red.push(0);}
        else
        {document.getElementById("a0").style.backgroundColor="blue";blue.push(0);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a7").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a7").style.backgroundColor="red";red.push(7);}
            else
            {document.getElementById("a7").style.backgroundColor="blue";blue.push(7);}

            j++;check();
        }
    }
    
});

document.getElementById("a14").addEventListener("click",function(){
    if(document.getElementById("a0").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a0").style.backgroundColor="red";red.push(0);}
        else
        {document.getElementById("a0").style.backgroundColor="blue";blue.push(0);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a7").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a7").style.backgroundColor="red";red.push(7);}
            else
            {document.getElementById("a7").style.backgroundColor="blue";blue.push(7);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a14").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a14").style.backgroundColor="red";red.push(14);}
                else
                {document.getElementById("a14").style.backgroundColor="blue";blue.push(14);}

                j++;check();
            }
            
        }
    }
    
    
});

document.getElementById("a21").addEventListener("click",function(){
    if(document.getElementById("a0").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a0").style.backgroundColor="red";red.push(0);}
        else
        {document.getElementById("a0").style.backgroundColor="blue";blue.push(0);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a7").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a7").style.backgroundColor="red";red.push(7);}
            else
            {document.getElementById("a7").style.backgroundColor="blue";blue.push(7);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a14").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a14").style.backgroundColor="red";red.push(14);}
                else
                {document.getElementById("a14").style.backgroundColor="blue";blue.push(14);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a21").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a21").style.backgroundColor="red";red.push(21);}
                    else
                    {document.getElementById("a21").style.backgroundColor="blue";blue.push(21);}

                    j++;check();
                }
            }
            
        }
    }
    
    
});

document.getElementById("a28").addEventListener("click",function(){
    if(document.getElementById("a0").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a0").style.backgroundColor="red";red.push(0);}
        else
        {document.getElementById("a0").style.backgroundColor="blue";blue.push(0);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a7").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a7").style.backgroundColor="red";red.push(7);}
            else
            {document.getElementById("a7").style.backgroundColor="blue";blue.push(7);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a14").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a14").style.backgroundColor="red";red.push(14);}
                else
                {document.getElementById("a14").style.backgroundColor="blue";blue.push(14);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a21").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a21").style.backgroundColor="red";red.push(21);}
                    else
                    {document.getElementById("a21").style.backgroundColor="blue";blue.push(21);}

                    j++;check();
                }
                else
                {
                    if(document.getElementById("a28").style.backgroundColor=="white")
                    {
                        if(j%2!=0)
                        {document.getElementById("a28").style.backgroundColor="red";red.push(28);}
                        else
                        {document.getElementById("a28").style.backgroundColor="blue";blue.push(28);}

                        j++;check();
                    }
                }
            }
            
        }
    }
    
    
});

document.getElementById("a35").addEventListener("click",function(){
    if(document.getElementById("a0").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a0").style.backgroundColor="red";red.push(0);}
        else
        {document.getElementById("a0").style.backgroundColor="blue";blue.push(0);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a7").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a7").style.backgroundColor="red";red.push(7);}
            else
            {document.getElementById("a7").style.backgroundColor="blue";blue.push(7);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a14").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a14").style.backgroundColor="red";red.push(14);}
                else
                {document.getElementById("a14").style.backgroundColor="blue";blue.push(14);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a21").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a21").style.backgroundColor="red";red.push(21);}
                    else
                    {document.getElementById("a21").style.backgroundColor="blue";blue.push(21);}

                    j++;check();
                }
                else
                {
                    if(document.getElementById("a28").style.backgroundColor=="white")
                    {
                        if(j%2!=0)
                        {document.getElementById("a28").style.backgroundColor="red";red.push(28);}
                        else
                        {document.getElementById("a28").style.backgroundColor="blue";blue.push(28);}

                        j++;check();
                    }
                    else
                    {
                        if(document.getElementById("a35").style.backgroundColor=="white")
                        {
                            if(j%2!=0)
                            {document.getElementById("a35").style.backgroundColor="red";red.push(35);}
                            else
                            {document.getElementById("a35").style.backgroundColor="blue";blue.push(35);}

                            j++;check();
                        }
                    }
                }
            }
            
        }
    }
    
    
});


// ------------------------------------------------------------------------------------------------------------

document.getElementById("a1").addEventListener("click",function(){
    if(document.getElementById("a1").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a1").style.backgroundColor="red";red.push(1);}
        else
        {document.getElementById("a1").style.backgroundColor="blue";blue.push(1);}

        j++;check();
    }
    
});

document.getElementById("a8").addEventListener("click",function(){
    if(document.getElementById("a1").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a1").style.backgroundColor="red";red.push(1);}
        else
        {document.getElementById("a1").style.backgroundColor="blue";blue.push(1);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a8").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a8").style.backgroundColor="red";red.push(8);}
            else
            {document.getElementById("a8").style.backgroundColor="blue";blue.push(8);}

            j++;check();
        }
    }
    
});

document.getElementById("a15").addEventListener("click",function(){
    if(document.getElementById("a1").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a1").style.backgroundColor="red";red.push(1);}
        else
        {document.getElementById("a1").style.backgroundColor="blue";blue.push(1);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a8").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a8").style.backgroundColor="red";red.push(8);}
            else
            {document.getElementById("a8").style.backgroundColor="blue";blue.push(8);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a15").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a15").style.backgroundColor="red";red.push(15);}
                else
                {document.getElementById("a15").style.backgroundColor="blue";blue.push(15);}

                j++;check();
            }
            
        }
    }
    
    
});

document.getElementById("a22").addEventListener("click",function(){
    if(document.getElementById("a1").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a1").style.backgroundColor="red";red.push(1);}
        else
        {document.getElementById("a1").style.backgroundColor="blue";blue.push(1);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a8").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a8").style.backgroundColor="red";red.push(8);}
            else
            {document.getElementById("a8").style.backgroundColor="blue";blue.push(8);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a15").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a15").style.backgroundColor="red";red.push(15);}
                else
                {document.getElementById("a15").style.backgroundColor="blue";blue.push(15);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a22").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a22").style.backgroundColor="red";red.push(22);}
                    else
                    {document.getElementById("a22").style.backgroundColor="blue";blue.push(22);}

                    j++;check();
                }
            }
            
        }
    }
    
    
});

document.getElementById("a29").addEventListener("click",function(){
    if(document.getElementById("a1").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a1").style.backgroundColor="red";red.push(1);}
        else
        {document.getElementById("a1").style.backgroundColor="blue";blue.push(1);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a8").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a8").style.backgroundColor="red";red.push(8);}
            else
            {document.getElementById("a8").style.backgroundColor="blue";blue.push(8);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a15").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a15").style.backgroundColor="red";red.push(15);}
                else
                {document.getElementById("a15").style.backgroundColor="blue";blue.push(15);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a22").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a22").style.backgroundColor="red";red.push(22);}
                    else
                    {document.getElementById("a22").style.backgroundColor="blue";blue.push(22);}

                    j++;check();
                }
                else
                {
                    if(document.getElementById("a29").style.backgroundColor=="white")
                    {
                        if(j%2!=0)
                        {document.getElementById("a29").style.backgroundColor="red";red.push(29);}
                        else
                        {document.getElementById("a29").style.backgroundColor="blue";blue.push(29);}

                        j++;check();
                    }
                }
            }
            
        }
    }
    
    
});

document.getElementById("a36").addEventListener("click",function(){
    if(document.getElementById("a1").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a1").style.backgroundColor="red";red.push(1);}
        else
        {document.getElementById("a1").style.backgroundColor="blue";blue.push(1);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a8").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a8").style.backgroundColor="red";red.push(8);}
            else
            {document.getElementById("a8").style.backgroundColor="blue";blue.push(8);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a15").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a15").style.backgroundColor="red";red.push(15);}
                else
                {document.getElementById("a15").style.backgroundColor="blue";blue.push(15);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a22").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a22").style.backgroundColor="red";red.push(22);}
                    else
                    {document.getElementById("a22").style.backgroundColor="blue";blue.push(22);}

                    j++;check();
                }
                else
                {
                    if(document.getElementById("a29").style.backgroundColor=="white")
                    {
                        if(j%2!=0)
                        {document.getElementById("a29").style.backgroundColor="red";red.push(29);}
                        else
                        {document.getElementById("a29").style.backgroundColor="blue";blue.push(29);}

                        j++;check();
                    }
                    else
                    {
                        if(document.getElementById("a36").style.backgroundColor=="white")
                        {
                            if(j%2!=0)
                            {document.getElementById("a36").style.backgroundColor="red";red.push(36);}
                            else
                            {document.getElementById("a36").style.backgroundColor="blue";blue.push(36);}

                            j++;check();
                        }
                    }
                }
            }
            
        }
    }
    
    
});
    
// ---------------------------------------------------------------------------------------------------------

document.getElementById("a2").addEventListener("click",function(){
    if(document.getElementById("a2").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a2").style.backgroundColor="red";red.push(2);}
        else
        {document.getElementById("a2").style.backgroundColor="blue";blue.push(2);}

        j++;check();
    }
    
});

document.getElementById("a9").addEventListener("click",function(){
    if(document.getElementById("a2").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a2").style.backgroundColor="red";red.push(2);}
        else
        {document.getElementById("a2").style.backgroundColor="blue";blue.push(2);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a9").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a9").style.backgroundColor="red";red.push(9);}
            else
            {document.getElementById("a9").style.backgroundColor="blue";blue.push(9);}

            j++;check();
        }
    }
    
});

document.getElementById("a16").addEventListener("click",function(){
    if(document.getElementById("a2").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a2").style.backgroundColor="red";red.push(2);}
        else
        {document.getElementById("a2").style.backgroundColor="blue";blue.push(2);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a9").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a9").style.backgroundColor="red";red.push(9);}
            else
            {document.getElementById("a9").style.backgroundColor="blue";blue.push(9);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a16").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a16").style.backgroundColor="red";red.push(16);}
                else
                {document.getElementById("a16").style.backgroundColor="blue";blue.push(16);}

                j++;check();
            }
            
        }
    }
    
    
});

document.getElementById("a23").addEventListener("click",function(){
    if(document.getElementById("a2").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a2").style.backgroundColor="red";red.push(2);}
        else
        {document.getElementById("a2").style.backgroundColor="blue";blue.push(2);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a9").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a9").style.backgroundColor="red";red.push(9);}
            else
            {document.getElementById("a9").style.backgroundColor="blue";blue.push(9);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a16").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a16").style.backgroundColor="red";red.push(16);}
                else
                {document.getElementById("a16").style.backgroundColor="blue";blue.push(16);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a23").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a23").style.backgroundColor="red";red.push(23);}
                    else
                    {document.getElementById("a23").style.backgroundColor="blue";blue.push(23);}

                    j++;check();
                }
            }
            
        }
    }
    
    
});

document.getElementById("a30").addEventListener("click",function(){
    if(document.getElementById("a2").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a2").style.backgroundColor="red";red.push(2);}
        else
        {document.getElementById("a2").style.backgroundColor="blue";blue.push(2);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a9").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a9").style.backgroundColor="red";red.push(9);}
            else
            {document.getElementById("a9").style.backgroundColor="blue";blue.push(9);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a16").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a16").style.backgroundColor="red";red.push(16);}
                else
                {document.getElementById("a16").style.backgroundColor="blue";blue.push(16);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a23").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a23").style.backgroundColor="red";red.push(23);}
                    else
                    {document.getElementById("a23").style.backgroundColor="blue";blue.push(23);}

                    j++;check();
                }
                else
                {
                    if(document.getElementById("a30").style.backgroundColor=="white")
                    {
                        if(j%2!=0)
                        {document.getElementById("a30").style.backgroundColor="red";red.push(30);}
                        else
                        {document.getElementById("a30").style.backgroundColor="blue";blue.push(30);}

                        j++;check();
                    }
                }
            }
            
        }
    }
    
    
});

document.getElementById("a37").addEventListener("click",function(){
    if(document.getElementById("a2").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a2").style.backgroundColor="red";red.push(2);}
        else
        {document.getElementById("a2").style.backgroundColor="blue";blue.push(2);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a9").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a9").style.backgroundColor="red";red.push(9);}
            else
            {document.getElementById("a9").style.backgroundColor="blue";blue.push(9);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a16").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a16").style.backgroundColor="red";red.push(16);}
                else
                {document.getElementById("a16").style.backgroundColor="blue";blue.push(16);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a23").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a23").style.backgroundColor="red";red.push(23);}
                    else
                    {document.getElementById("a23").style.backgroundColor="blue";blue.push(23);}

                    j++;check();
                }
                else
                {
                    if(document.getElementById("a30").style.backgroundColor=="white")
                    {
                        if(j%2!=0)
                        {document.getElementById("a30").style.backgroundColor="red";red.push(30);}
                        else
                        {document.getElementById("a30").style.backgroundColor="blue";blue.push(30);}

                        j++;check();
                    }
                    else
                    {
                        if(document.getElementById("a37").style.backgroundColor=="white")
                        {
                            if(j%2!=0)
                            {document.getElementById("a37").style.backgroundColor="red";red.push(37);}
                            else
                            {document.getElementById("a37").style.backgroundColor="blue";blue.push(37);}

                            j++;check();
                        }
                    }
                }
            }
            
        }
    }
    
    
});


// ------------------------------------------------------------------------------------------------------------

document.getElementById("a3").addEventListener("click",function(){
    if(document.getElementById("a3").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a3").style.backgroundColor="red";red.push(3);}
        else
        {document.getElementById("a3").style.backgroundColor="blue";blue.push(3);}

        j++;check();
    }
    
});

document.getElementById("a10").addEventListener("click",function(){
    if(document.getElementById("a3").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a3").style.backgroundColor="red";red.push(3);}
        else
        {document.getElementById("a3").style.backgroundColor="blue";blue.push(3);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a10").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a10").style.backgroundColor="red";red.push(10);}
            else
            {document.getElementById("a10").style.backgroundColor="blue";blue.push(10);}

            j++;check();
        }
    }
    
});

document.getElementById("a17").addEventListener("click",function(){
    if(document.getElementById("a3").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a3").style.backgroundColor="red";red.push(3);}
        else
        {document.getElementById("a3").style.backgroundColor="blue";blue.push(3);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a10").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a10").style.backgroundColor="red";red.push(10);}
            else
            {document.getElementById("a10").style.backgroundColor="blue";blue.push(10);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a17").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a17").style.backgroundColor="red";red.push(17);}
                else
                {document.getElementById("a17").style.backgroundColor="blue";blue.push(17);}

                j++;check();
            }
            
        }
    }
    
    
});

document.getElementById("a24").addEventListener("click",function(){
    if(document.getElementById("a3").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a3").style.backgroundColor="red";red.push(3);}
        else
        {document.getElementById("a3").style.backgroundColor="blue";blue.push(3);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a10").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a10").style.backgroundColor="red";red.push(10);}
            else
            {document.getElementById("a10").style.backgroundColor="blue";blue.push(10);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a17").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a17").style.backgroundColor="red";red.push(17);}
                else
                {document.getElementById("a17").style.backgroundColor="blue";blue.push(17);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a24").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a24").style.backgroundColor="red";red.push(24);}
                    else
                    {document.getElementById("a24").style.backgroundColor="blue";blue.push(24);}

                    j++;check();
                }
            }
            
        }
    }
    
    
});

document.getElementById("a31").addEventListener("click",function(){
    if(document.getElementById("a3").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a3").style.backgroundColor="red";red.push(3);}
        else
        {document.getElementById("a3").style.backgroundColor="blue";blue.push(3);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a10").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a10").style.backgroundColor="red";red.push(10);}
            else
            {document.getElementById("a10").style.backgroundColor="blue";blue.push(10);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a17").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a17").style.backgroundColor="red";red.push(17);}
                else
                {document.getElementById("a17").style.backgroundColor="blue";blue.push(17);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a24").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a24").style.backgroundColor="red";red.push(24);}
                    else
                    {document.getElementById("a24").style.backgroundColor="blue";blue.push(24);}

                    j++;check();
                }
                else
                {
                    if(document.getElementById("a31").style.backgroundColor=="white")
                    {
                        if(j%2!=0)
                        {document.getElementById("a31").style.backgroundColor="red";red.push(31);}
                        else
                        {document.getElementById("a31").style.backgroundColor="blue";blue.push(31);}

                        j++;check();
                    }
                }
            }
            
        }
    }
    
    
});

document.getElementById("a38").addEventListener("click",function(){
    if(document.getElementById("a3").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a3").style.backgroundColor="red";red.push(3);}
        else
        {document.getElementById("a3").style.backgroundColor="blue";blue.push(3);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a10").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a10").style.backgroundColor="red";red.push(10);}
            else
            {document.getElementById("a10").style.backgroundColor="blue";blue.push(10);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a17").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a17").style.backgroundColor="red";red.push(17);}
                else
                {document.getElementById("a17").style.backgroundColor="blue";blue.push(17);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a24").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a24").style.backgroundColor="red";red.push(24);}
                    else
                    {document.getElementById("a24").style.backgroundColor="blue";blue.push(24);}

                    j++;check();
                }
                else
                {
                    if(document.getElementById("a31").style.backgroundColor=="white")
                    {
                        if(j%2!=0)
                        {document.getElementById("a31").style.backgroundColor="red";red.push(31);}
                        else
                        {document.getElementById("a31").style.backgroundColor="blue";blue.push(31);}

                        j++;check();
                    }
                    else
                    {
                        if(document.getElementById("a38").style.backgroundColor=="white")
                        {
                            if(j%2!=0)
                            {document.getElementById("a38").style.backgroundColor="red";red.push(38);}
                            else
                            {document.getElementById("a38").style.backgroundColor="blue";blue.push(38);}

                            j++;check();
                        }
                    }
                }
            }
            
        }
    }
    
    
});


// ------------------------------------------------------------------------------------------------------------

document.getElementById("a4").addEventListener("click",function(){
    if(document.getElementById("a4").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a4").style.backgroundColor="red";red.push(4);}
        else
        {document.getElementById("a4").style.backgroundColor="blue";blue.push(4);}

        j++;check();
    }
    
});

document.getElementById("a11").addEventListener("click",function(){
    if(document.getElementById("a4").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a4").style.backgroundColor="red";red.push(4);}
        else
        {document.getElementById("a4").style.backgroundColor="blue";blue.push(4);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a11").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a11").style.backgroundColor="red";red.push(11);}
            else
            {document.getElementById("a11").style.backgroundColor="blue";blue.push(11);}

            j++;check();
        }
    }
    
});

document.getElementById("a18").addEventListener("click",function(){
    if(document.getElementById("a4").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a4").style.backgroundColor="red";red.push(4);}
        else
        {document.getElementById("a4").style.backgroundColor="blue";blue.push(4);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a11").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a11").style.backgroundColor="red";red.push(11);}
            else
            {document.getElementById("a11").style.backgroundColor="blue";blue.push(11);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a18").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a18").style.backgroundColor="red";red.push(18);}
                else
                {document.getElementById("a18").style.backgroundColor="blue";blue.push(18);}

                j++;check();
            }
            
        }
    }
    
    
});

document.getElementById("a25").addEventListener("click",function(){
    if(document.getElementById("a4").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a4").style.backgroundColor="red";red.push(4);}
        else
        {document.getElementById("a4").style.backgroundColor="blue";blue.push(4);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a11").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a11").style.backgroundColor="red";red.push(11);}
            else
            {document.getElementById("a11").style.backgroundColor="blue";blue.push(11);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a18").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a18").style.backgroundColor="red";red.push(18);}
                else
                {document.getElementById("a18").style.backgroundColor="blue";blue.push(18);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a25").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a25").style.backgroundColor="red";red.push(25);}
                    else
                    {document.getElementById("a25").style.backgroundColor="blue";blue.push(25);}

                    j++;check();
                }
            }
            
        }
    }
    
    
});

document.getElementById("a32").addEventListener("click",function(){
    if(document.getElementById("a4").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a4").style.backgroundColor="red";red.push(4);}
        else
        {document.getElementById("a4").style.backgroundColor="blue";blue.push(4);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a11").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a11").style.backgroundColor="red";red.push(11);}
            else
            {document.getElementById("a11").style.backgroundColor="blue";blue.push(11);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a18").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a18").style.backgroundColor="red";red.push(18);}
                else
                {document.getElementById("a18").style.backgroundColor="blue";blue.push(18);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a25").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a25").style.backgroundColor="red";red.push(25);}
                    else
                    {document.getElementById("a25").style.backgroundColor="blue";blue.push(25);}

                    j++;check();
                }
                else
                {
                    if(document.getElementById("a32").style.backgroundColor=="white")
                    {
                        if(j%2!=0)
                        {document.getElementById("a32").style.backgroundColor="red";red.push(32);}
                        else
                        {document.getElementById("a32").style.backgroundColor="blue";blue.push(32);}

                        j++;check();
                    }
                }
            }
            
        }
    }
    
    
});

document.getElementById("a39").addEventListener("click",function(){
    if(document.getElementById("a4").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a4").style.backgroundColor="red";red.push(4);}
        else
        {document.getElementById("a4").style.backgroundColor="blue";blue.push(4);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a11").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a11").style.backgroundColor="red";red.push(11);}
            else
            {document.getElementById("a11").style.backgroundColor="blue";blue.push(11);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a18").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a18").style.backgroundColor="red";red.push(18);}
                else
                {document.getElementById("a18").style.backgroundColor="blue";blue.push(18);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a25").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a25").style.backgroundColor="red";red.push(25);}
                    else
                    {document.getElementById("a25").style.backgroundColor="blue";blue.push(25);}

                    j++;check();
                }
                else
                {
                    if(document.getElementById("a32").style.backgroundColor=="white")
                    {
                        if(j%2!=0)
                        {document.getElementById("a32").style.backgroundColor="red";red.push(32);}
                        else
                        {document.getElementById("a32").style.backgroundColor="blue";blue.push(32);}

                        j++;check();
                    }
                    else
                    {
                        if(document.getElementById("a39").style.backgroundColor=="white")
                        {
                            if(j%2!=0)
                            {document.getElementById("a39").style.backgroundColor="red";red.push(39);}
                            else
                            {document.getElementById("a39").style.backgroundColor="blue";blue.push(39);}

                            j++;check();
                        }
                    }
                }
            }
            
        }
    }
    
    
});


// ------------------------------------------------------------------------------------------------------------

document.getElementById("a5").addEventListener("click",function(){
    if(document.getElementById("a5").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a5").style.backgroundColor="red";red.push(5);}
        else
        {document.getElementById("a5").style.backgroundColor="blue";blue.push(5);}

        j++;check();
    }
    
});

document.getElementById("a12").addEventListener("click",function(){
    if(document.getElementById("a5").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a5").style.backgroundColor="red";red.push(5);}
        else
        {document.getElementById("a5").style.backgroundColor="blue";blue.push(5);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a12").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a12").style.backgroundColor="red";red.push(12);}
            else
            {document.getElementById("a12").style.backgroundColor="blue";blue.push(12);}

            j++;check();
        }
    }
    
});

document.getElementById("a19").addEventListener("click",function(){
    if(document.getElementById("a5").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a5").style.backgroundColor="red";red.push(5);}
        else
        {document.getElementById("a5").style.backgroundColor="blue";blue.push(5);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a12").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a12").style.backgroundColor="red";red.push(12);}
            else
            {document.getElementById("a12").style.backgroundColor="blue";blue.push(12);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a19").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a19").style.backgroundColor="red";red.push(19);}
                else
                {document.getElementById("a19").style.backgroundColor="blue";blue.push(19);}

                j++;check();
            }
            
        }
    }
    
    
});

document.getElementById("a26").addEventListener("click",function(){
    if(document.getElementById("a5").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a5").style.backgroundColor="red";red.push(5);}
        else
        {document.getElementById("a5").style.backgroundColor="blue";blue.push(5);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a12").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a12").style.backgroundColor="red";red.push(12);}
            else
            {document.getElementById("a12").style.backgroundColor="blue";blue.push(12);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a19").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a19").style.backgroundColor="red";red.push(19);}
                else
                {document.getElementById("a19").style.backgroundColor="blue";blue.push(19);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a26").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a26").style.backgroundColor="red";red.push(26);}
                    else
                    {document.getElementById("a26").style.backgroundColor="blue";blue.push(26);}

                    j++;check();
                }
            }
            
        }
    }
    
    
});

document.getElementById("a33").addEventListener("click",function(){
    if(document.getElementById("a5").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a5").style.backgroundColor="red";red.push(5);}
        else
        {document.getElementById("a5").style.backgroundColor="blue";blue.push(5);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a12").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a12").style.backgroundColor="red";red.push(12);}
            else
            {document.getElementById("a12").style.backgroundColor="blue";blue.push(12);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a19").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a19").style.backgroundColor="red";red.push(19);}
                else
                {document.getElementById("a19").style.backgroundColor="blue";blue.push(19);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a26").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a26").style.backgroundColor="red";red.push(26);}
                    else
                    {document.getElementById("a26").style.backgroundColor="blue";blue.push(26);}

                    j++;check();
                }
                else
                {
                    if(document.getElementById("a33").style.backgroundColor=="white")
                    {
                        if(j%2!=0)
                        {document.getElementById("a33").style.backgroundColor="red";red.push(33);}
                        else
                        {document.getElementById("a33").style.backgroundColor="blue";blue.push(33);}

                        j++;check();
                    }
                }
            }
            
        }
    }
    
    
});

document.getElementById("a40").addEventListener("click",function(){
    if(document.getElementById("a5").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a5").style.backgroundColor="red";red.push(5);}
        else
        {document.getElementById("a5").style.backgroundColor="blue";blue.push(5);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a12").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a12").style.backgroundColor="red";red.push(12);}
            else
            {document.getElementById("a12").style.backgroundColor="blue";blue.push(12);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a19").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a19").style.backgroundColor="red";red.push(19);}
                else
                {document.getElementById("a19").style.backgroundColor="blue";blue.push(19);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a26").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a26").style.backgroundColor="red";red.push(26);}
                    else
                    {document.getElementById("a26").style.backgroundColor="blue";blue.push(26);}

                    j++;check();
                }
                else
                {
                    if(document.getElementById("a33").style.backgroundColor=="white")
                    {
                        if(j%2!=0)
                        {document.getElementById("a33").style.backgroundColor="red";red.push(33);}
                        else
                        {document.getElementById("a33").style.backgroundColor="blue";blue.push(33);}

                        j++;check();
                    }
                    else
                    {
                        if(document.getElementById("a40").style.backgroundColor=="white")
                        {
                            if(j%2!=0)
                            {document.getElementById("a40").style.backgroundColor="red";red.push(40);}
                            else
                            {document.getElementById("a40").style.backgroundColor="blue";blue.push(40);}

                            j++;check();
                        }
                    }
                }
            }
            
        }
    }
    
    
});


// ------------------------------------------------------------------------------------------------------------


document.getElementById("a6").addEventListener("click",function(){
    if(document.getElementById("a6").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a6").style.backgroundColor="red";red.push(6);}
        else
        {document.getElementById("a6").style.backgroundColor="blue";blue.push(6);}

        j++;check();
    }
    
});

document.getElementById("a13").addEventListener("click",function(){
    if(document.getElementById("a6").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a6").style.backgroundColor="red";red.push(6);}
        else
        {document.getElementById("a6").style.backgroundColor="blue";blue.push(6);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a13").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a13").style.backgroundColor="red";red.push(13);}
            else
            {document.getElementById("a13").style.backgroundColor="blue";blue.push(13);}

            j++;check();
        }
    }
    
});

document.getElementById("a20").addEventListener("click",function(){
    if(document.getElementById("a6").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a6").style.backgroundColor="red";red.push(6);}
        else
        {document.getElementById("a6").style.backgroundColor="blue";blue.push(6);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a13").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a13").style.backgroundColor="red";red.push(13);}
            else
            {document.getElementById("a13").style.backgroundColor="blue";blue.push(13);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a20").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a20").style.backgroundColor="red";red.push(20);}
                else
                {document.getElementById("a20").style.backgroundColor="blue";blue.push(20);}

                j++;check();
            }
            
        }
    }
    
    
});

document.getElementById("a27").addEventListener("click",function(){
    if(document.getElementById("a6").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a6").style.backgroundColor="red";red.push(6);}
        else
        {document.getElementById("a6").style.backgroundColor="blue";blue.push(6);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a13").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a13").style.backgroundColor="red";red.push(13);}
            else
            {document.getElementById("a13").style.backgroundColor="blue";blue.push(13);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a20").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a20").style.backgroundColor="red";red.push(20);}
                else
                {document.getElementById("a20").style.backgroundColor="blue";blue.push(20);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a27").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a27").style.backgroundColor="red";red.push(27);}
                    else
                    {document.getElementById("a27").style.backgroundColor="blue";blue.push(27);}

                    j++;check();
                }
            }
            
        }
    }
    
    
});

document.getElementById("a34").addEventListener("click",function(){
    if(document.getElementById("a6").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a6").style.backgroundColor="red";red.push(6);}
        else
        {document.getElementById("a6").style.backgroundColor="blue";blue.push(6);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a13").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a13").style.backgroundColor="red";red.push(13);}
            else
            {document.getElementById("a13").style.backgroundColor="blue";blue.push(13);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a20").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a20").style.backgroundColor="red";red.push(20);}
                else
                {document.getElementById("a20").style.backgroundColor="blue";blue.push(20);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a27").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a27").style.backgroundColor="red";red.push(27);}
                    else
                    {document.getElementById("a27").style.backgroundColor="blue";blue.push(27);}

                    j++;check();
                }
                else
                {
                    if(document.getElementById("a34").style.backgroundColor=="white")
                    {
                        if(j%2!=0)
                        {document.getElementById("a34").style.backgroundColor="red";red.push(34);}
                        else
                        {document.getElementById("a34").style.backgroundColor="blue";blue.push(34);}

                        j++;check();
                    }
                }
            }
            
        }
    }
    
    
});

document.getElementById("a41").addEventListener("click",function(){
    if(document.getElementById("a6").style.backgroundColor=="white")
    {
        if(j%2!=0)
        {document.getElementById("a6").style.backgroundColor="red";red.push(6);}
        else
        {document.getElementById("a6").style.backgroundColor="blue";blue.push(6);}

        j++;check();
    }
    else
    {
        if(document.getElementById("a13").style.backgroundColor=="white")
        {
            if(j%2!=0)
            {document.getElementById("a13").style.backgroundColor="red";red.push(13);}
            else
            {document.getElementById("a13").style.backgroundColor="blue";blue.push(13);}

            j++;check();
        }
        else
        {
            if(document.getElementById("a20").style.backgroundColor=="white")
            {
                if(j%2!=0)
                {document.getElementById("a20").style.backgroundColor="red";red.push(20);}
                else
                {document.getElementById("a20").style.backgroundColor="blue";blue.push(20);}

                j++;check();
            }
            else
            {
                if(document.getElementById("a27").style.backgroundColor=="white")
                {
                    if(j%2!=0)
                    {document.getElementById("a27").style.backgroundColor="red";red.push(27);}
                    else
                    {document.getElementById("a27").style.backgroundColor="blue";blue.push(27);}

                    j++;check();
                }
                else
                {
                    if(document.getElementById("a34").style.backgroundColor=="white")
                    {
                        if(j%2!=0)
                        {document.getElementById("a34").style.backgroundColor="red";red.push(34);}
                        else
                        {document.getElementById("a34").style.backgroundColor="blue";blue.push(34);}

                        j++;check();
                    }
                    else
                    {
                        if(document.getElementById("a41").style.backgroundColor=="white")
                        {
                            if(j%2!=0)
                            {document.getElementById("a41").style.backgroundColor="red";red.push(41);}
                            else
                            {document.getElementById("a41").style.backgroundColor="blue";blue.push(41);}

                            j++;check();
                        }
                    }
                }
            }
            
        }
    }
    
    
});


// ------------------------------------------------------------------------------------------------------------
