let arr = [22,887,998,2135,55,3];
let ans = arr.reduce((ans,el)=>{
    if(ans<el){
        return el;
    }else{
        return ans;
    }
});

console.log(ans);