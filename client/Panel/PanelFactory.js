import React from 'react'
import { Layout, Card, Row, Col} from 'antd'
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts'
import Com2Server from './../utils'

const { Content } = Layout

const data = [
  { genre: 'Sports', sold: 275, income: 2300 },
  { genre: 'Strategy', sold: 115, income: 667 },
  { genre: 'Action', sold: 120, income: 982 },
  { genre: 'Shooter', sold: 350, income: 5271 },
  { genre: 'Other', sold: 150, income: 3710 },
]

// 定义度量
const cols = {
  sold: { alias: '销售量' },
  genre: { alias: '游戏种类'},
  income: {alisas: '收入'},
}

export default class PanelFactory extends Com2Server {

  constructor(props) {
    super(props)
    this.panels = [1, 2, 3, 4, 5, 6]
  }
  static createPanel(props) {
    return (
      <Content>
        <Row>
          {
          props.map(
            (item, index) => (
              <Col span={24} key={index}>
                <Card title={'测试图表'}>
                  <Chart forceFit height={500}data={data} scale={cols}>
                    <Axis name="genre" />
                    <Axis name="sold" />
                    <Axis name="income" />
                    <Legend position="top" dy={-20} />
                    <Tooltip />
                    <Geom type="interval" position="genre*sold" color="genre" />
                  </Chart>
                </Card>
              </Col>

              ),
          )
        }
        </Row>
      </Content>
    )
  }
}

