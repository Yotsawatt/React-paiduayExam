import React from 'react'
import Data from '../../exam-data.json'

function Function1() {
    
    console.log(Data)

    
    
    const getdata = (name,products) => {
        const product = products.map(item => {
            return item.weight
        })
    
        const sumweight = (product) => {
            let sum = 0
            for(let i = 0;i<product.length;i++){
                sum += product[i]
            }
            return sum
        }

        return (
            <div style={{display:'flex'}}>
                <h3 style={{marginRight:15,fontWeight:300}}>ProductName : {name}</h3>
                <h3 style={{marginRight:15,fontWeight:300}}>totalSubProductWeight : {sumweight(product)}</h3>
            </div>
        )
    }


    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <div style={{width:'80%',display:'flex',alignItems:'center',flexDirection:'column',textAlign:'center'}}>
                <h1>Function 1</h1>
                <p>{`หา product หลัก ที่มี is_editable_price = false หลังจากนั้นให้รวมน้ำหนักสินค้าย่อยทั้งหมด ตอบเอาเฉพาะชื่อ และน่ำหนักรวม เช่น [{ name: ‘Wow product’, totalSubProductWeight: 200 }] และแสดงผลในหน้า Function 1`}</p>
                {
                    Data.map(item => {
                        if(item.is_editable_price === false) {
                            return (
                                <div key={item.id}>{getdata(item.name,item.products)}</div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Function1
