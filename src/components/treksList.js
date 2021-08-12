import React, { useState } from "react"
import { navigate } from "gatsby"
import { Button, List, Typography, Input } from "antd"
import { CaretRightOutlined } from "@ant-design/icons"

const TreksList = ({ treks }) => {
  const [filteredTreks, setFilteredTreks] = useState(treks.nodes)

  const onSearch = searchQuery => {
    if (searchQuery && searchQuery.length > 2) {
      return setFilteredTreks(prevTreks =>
        prevTreks.filter(trek => {
          return (
            trek.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            trek.state_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            trek.summit_point.toLowerCase().includes(searchQuery.toLowerCase())
          )
        })
      )
    }
    return setFilteredTreks(treks.nodes)
  }

  const onInput = (e) => {
      if (!e.target.value) {
        return setFilteredTreks(treks.nodes)
      }

      onSearch(e.target.value)
  }

  return (
    <div>
      <List
        bordered
        dataSource={filteredTreks}
        rowKey="id"
        header={
          <div>
            <Typography.Title level={4}>
              Treks ({treks.totalCount})
            </Typography.Title>
            <Button type="primary">Filter</Button>
            <br />
            <br />
            <Input.Search
              placeholder="Search by Trek Name, State"
              onInput={onInput}
              onSearch={onSearch}
              enterButton
            />
          </div>
        }
        renderItem={trek => (
          <List.Item
            style={{ cursor: "pointer" }}
            onClick={() =>
              navigate(`treks/${trek.slug}`, { state: { slug: trek.slug } })
            }
            key={trek.id}
          >
            <List.Item.Meta
              title={<Typography.Text>{trek.name}</Typography.Text>}
            />
            <CaretRightOutlined />
          </List.Item>
        )}
      />
    </div>
  )
}

export default TreksList
