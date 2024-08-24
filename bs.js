const arr = [1,2,3,4,5,6,7,8];

const target = 8;

let mid, low= 0,high=arr.length -1;

function bs(){

    while(low<=high){
        mid = Math.round((low+high)/2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] > target){
            high = mid-1;
        }else{
            low = mid +1;
        }
    }
    return -1;
}

function checkTarget(){
    const sbs = bs();

    if(sbs === -1){
        console.log("Given target is not found!!")
    }else{
        console.log("Target found on index: ",sbs);
    }
}

checkTarget();
