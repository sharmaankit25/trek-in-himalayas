import React from 'react'
import Link from 'gatsby-link'
import {navigate} from 'gatsby'
import { Button, List, Typography, Input, Space } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons';


const TreksList = ({ treks }) => {

    const onSearch = (e) => {
        console.log(e)
    }

    return (
    <div>
       <List
        bordered
        dataSource={treks.nodes}
        rowKey="id"
        header={<div>
                <Typography.Title level={4}>Treks ({ treks.totalCount })</Typography.Title>
                <Button type="primary">Filter</Button>
                <br/><br/>
                <Input.Search placeholder="input search text" onSearch={onSearch} enterButton />

            </div>}
        renderItem={trek => (
            <List.Item onClick={() => navigate(`treks/${trek.slug}`)} key={trek.id}>
                <List.Item.Meta
                    title={<Typography.Text>{ trek.name }</Typography.Text>}
                />
                <CaretRightOutlined />
            </List.Item>
        )}
        />

    </div>
)
    }

export default TreksList

