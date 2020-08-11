import React from 'react'
import moment from 'moment';

function Function2() {

    const originaldate = '2020-08-10T14:54:52+07:00'
    const date = new Date(originaldate)
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <div style={{width:'80%',display:'flex',alignItems:'center',flexDirection:'column',textAlign:'center'}}>
                <h1>Function 2</h1>
                <p>{`ให้แปลงรูปแบบวันที่ จาก 2020-08-10T14:54:52+07:00 เป็น format ดังต่อไปนี้`}</p>
                
                <h1>use Moment.Js</h1>

                {/* 10/08/2020 14:54 */}
                <p>{ moment(date).format('DD/MM/YYYY HH:mm') }</p>
                {/* 10 สิงหาคม 2563 // รูปแบบปฏิทินไทย */}
                <p>{date.toLocaleDateString('th-TH', {
                    year:'numeric',
                    month:'long',
                    day:'numeric'
                })}</p>
                {/* 31 // จำนวนวันในเดือนนี้ */}
                <p>{ moment(date).daysInMonth() }</p>
                {/* 3 // ไตรมาตรของเดือนนี้ */}
                <p>{ moment(date).format('Q') }</p>
                {/* 1597046092 // Unix timestamp */}
                <p>{ moment(date).format('X') }</p>
            </div>
        </div>
    )
}

export default Function2
