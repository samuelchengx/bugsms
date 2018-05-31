import { Card, Col } from 'antd'
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts'
import Com2Server from './../utils'
/**
 * 折线图
 * 属性应该有
 * 名称
 * url
 * 坐标
 */
export default class LineChartPanel extends Com2Server {

  constructor(props) {
    super(props)
    this.state = {}
  }

  renderChild() {
    return (
      <Col span={24} key={this.props.index}>
        <Card title={this.props.title}>
          <Chart forceFit height={500}data={this.state.data} scale={this.state.cols}>
            <Axis name="genre" />
            <Axis name="sold" />
            <Legend position="top" dy={-20} />
            <Tooltip />
            <Geom type="interval" position="genre*sold" color="genre" />
          </Chart>
        </Card>
      </Col>
    )

  }
}
