import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

import {dataEmpty} from "../utils/methods"

const GistList = ({ data }) => {
    return (
    <>
        {data?.length ?  data?.map((item, index) => {
            return (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', borderRadius: 15, margin: 30, padding: 15, boxShadow:' 14px 17px 40px 4px rgb(112 144 176 / 8%)' }} key={index}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                        <img src={item?.owner?.avatar_url} alt="Girl in a jacket" width="50" height="50" style={{ borderRadius: '50%' }} />
                        <div style={{ margin: 10, fontSize:12, fontWeight:'bold' }}>{item?.owner?.id}</div>
                        <div style={{ margin: 10, fontSize:12, fontWeight:'bold'  }}>{item?.owner?.login}</div>
                    </div>
                    <div >
                        <div style={{ margin: 10, fontSize:12, fontWeight:'bold'  }}>
                            {item?.owner?.type}
                        </div>
                    </div>
                </div>
            )
        }) : dataEmpty("Data not Present")}
    </>
    )
}

export default GistList
