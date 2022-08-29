/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length-1;
    let result =0;
    while(left < right){
        let h = height[left]<height[right]? height[left] : height[right];
        let area = h*(right-left);
        if(area>result) result=area;
        if(height[left]<height[right])left++;
        else right--;
    }
    return result;
};