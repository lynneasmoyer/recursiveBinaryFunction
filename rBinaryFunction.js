function rBinarySearch(arr, num, start, end){
    
    if(start === undefined){
        start = 0;
    }
    if(end === undefined){
        end = arr.length-1;
    }
    if(start > end){
      return false;
    }

    var middle_index= Math.floor((start+end)/2);

    var middle_value= arr[middle_index];
    console.log("middle value is", middle_value)

    if(num == middle_value){
      return true;
    }
    if(num < middle_value){
      return rBinarySearch(arr, num, start, middle_index-1)
      }
    else if(num == middle_value){
      return true;
      }
    else if(num > middle_value){
      return rBinarySearch(arr, num, middle_index+1, end)
    }
    
}




// rBinarySearch([1,3,5,6],4)
rBinarySearch([4,5,6,8,12],5)