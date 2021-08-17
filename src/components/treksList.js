import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { List, Typography, Input, Checkbox } from "antd"
import { CaretRightOutlined } from "@ant-design/icons"

const CheckboxGroup = Checkbox.Group
const filterOptions = ["Beginner", "Intermediate", "Difficult"]

const TreksList = ({ treks }) => {
  const [filteredTreks, setFilteredTreks] = useState(treks.nodes)
  const [filters, setFilters] = useState({
    search: "",
    difficulty: filterOptions,
    state: "",
    season: "",
    duration: "",
  })

  useEffect(() => {

    return setFilteredTreks(prevTreks => {
      return treks.nodes.filter(trek => {
        if (filters.difficulty) {
          return (filters.difficulty.includes(trek.difficulty_level))
        }
        return true
      }).filter(trek => {
        if (filters.search && filters.search.length > 2) {
          console.log(filters.search)
          return (
            trek.name.toLowerCase().includes(filters.search.toLowerCase()) ||
            trek.state_name.toLowerCase().includes(filters.search.toLowerCase()) ||
            trek.summit_point.toLowerCase().includes(filters.search.toLowerCase())
          )
        }
        return true
      })
    })

  }, [filters, treks.nodes])

  const onSearch = searchQuery => {
    return setFilters(filters => ({ ...filters, search: searchQuery  }))
  }

  const onInput = e => {
    e.persist()
    setTimeout(() => {
      if (e.target && e.target.value) {
        return setFilters(filters => ({ ...filters, search: e.target.value  }))
      } else {
        return setFilters(filters => ({ ...filters, search: ""  }))
      }
    }, 1500)
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
              Treks ({filteredTreks.length} / {treks.totalCount})
            </Typography.Title>
            {/* <Button type="primary">Filter</Button> */}
            <CheckboxGroup
              options={filterOptions}
              value={filters.difficulty}
              onChange={list =>
                setFilters(prevFilter => ({ ...prevFilter, difficulty: list }))
              }
            />
            <br />
            <br />
            <Input.Search
              placeholder="Search by Trek Name, State, Summit Point"
              onChange={onInput}
              onSearch={onSearch}
              enterButton
              allowClear
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
