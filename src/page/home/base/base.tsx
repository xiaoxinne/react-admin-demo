import React,{Component} from 'react'
import {Table} from 'antd'
import { ColumnProps } from 'antd/es/table';

import './base.less'

interface User {
    key: number;
    name: string;
    age: number;
    addres: string;
}
    
class Base extends Component<{}, {}> {
    readonly columns:ColumnProps<User>[] = [
        {
            title: 'Name',
            dataIndex: 'name',
            align: 'center'
        },
        {
            title: 'Age',
            dataIndex: 'age',
            align: 'center',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Addres',
            dataIndex: 'addres',
            align: 'center'
        }
    ]

    render () {
        const data:User[] = [];
        for (let i = 0; i < 46; i++) {
            data.push({
                key: i,
                name: `Edward King ${i}`,
                age: i,
                addres: `London, Park Lane no. ${i}`,
            });
        }
        return (
            <div className="base-list">
                <Table
                    bordered
                    tableLayout="fixed"
                    columns={this.columns} 
                    dataSource={data} />
            </div>
        )
    }
}
export default Base