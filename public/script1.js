let v = document.getElementById("happy");
let v1  = document.getElementById("sad");
let v2 = document.getElementById("angry");
let r = document.getElementById("res");
let c=1;
let cl="";
v.addEventListener("click",()=>
{
    if(c==1)
    {
        v.style.backgroundColor="blue";
        cl="blue";
        c=0
    }
    else
    {
        v.style.backgroundColor="white";
        let cl="white";
        c=1;
    }
})
r.addEventListener("click",()=>
{
    if(cl=="blue")
    {
        v.style.backgroundColor="white";
    }
})
v1.addEventListener("click",()=>
{
    if(c==1)
    {
        v1.style.backgroundColor="blue";
        cl="blue";
        c=0
    }
    else
    {
        v1.style.backgroundColor="white";
        let cl="white";
        c=1;
    }
})
r.addEventListener("click",()=>
{
    if(cl=="blue")
    {
        v1.style.backgroundColor="white";
    }
})
v2.addEventListener("click",()=>
{
    if(c==1)
    {
        v2.style.backgroundColor="blue";
        cl="blue";
        c=0
    }
    else
    {
        v2.style.backgroundColor="white";
        let cl="white";
        c=1;
    }
})
r.addEventListener("click",()=>
{
    if(cl=="blue")
    {
        v2.style.backgroundColor="white";
    }
})
v3.addEventListener("click",()=>
{
    if(c==1)
    {
        v3.style.backgroundColor="blue";
        cl="blue";
        c=0
    }
    else
    {
        v3.style.backgroundColor="white";
        let cl="white";
        c=1;
    }
})
r.addEventListener("click",()=>
{
    if(cl=="blue")
    {
        v3.style.backgroundColor="white";
    }
})