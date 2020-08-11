import React from 'react'

function Function3() {

    const arr1 = []; 
    const arr2 = [1]; 
    const arr3 = [1,2,3]; 
    const arr4 = [1,1]; 
    const arr5 = [1,2,3,4,5,6]; 
    const arr6 = [1,5,3,2,5,10]; 
    const arr7 = [100,5,3,2,99]; 
    const arr8 = [35,5,3,2,5,100]; 
    const arr9 = [1,5,101,2,5,10]; 
    const arr10 = [10,10,9]; 


    const  secondMax =  (arrayin) => { 
        const filterarray = arrayin.filter((item,index) => {
            return arrayin.indexOf(item) == index
        })
        
        if(filterarray.length === 0) {
            return null
        }
        if(filterarray.length === 1) {
            return filterarray
        }
        else {
            const max = Math.max.apply(null, filterarray); 
            filterarray.splice(filterarray.indexOf(max), 1); 
            return Math.max.apply(null, filterarray); 
        }
        
    };
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <div style={{width:'80%',display:'flex',alignItems:'center',flexDirection:'column',textAlign:'center'}}>
                <h1>Function 2</h1>
                <p>{`เขียน function ตรวจหา max อันดับที่ 2 ของ array`}</p>
                
                <p> {secondMax(arr1)}</p>
                <p> {secondMax(arr2)}</p>
                <p> {secondMax(arr3)}</p>
                <p> {secondMax(arr4)}</p>
                <p> {secondMax(arr5)}</p>
                <p> {secondMax(arr6)}</p>
                <p> {secondMax(arr7)}</p>
                <p> {secondMax(arr8)}</p>
                <p> {secondMax(arr9)}</p>
                <p> {secondMax(arr10)}</p>
                
            </div>
        </div>
    )
}

export default Function3
