import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './style.css'
class SimpleLineChart extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const json = await response.json();
      console.log(json.data)
      this.setState({ data: json.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  render() {
    return (
      <div className="bg-container">
        <ResponsiveContainer>
          <LineChart
            data={this.state.data}
            margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
          >
            <CartesianGrid stroke="none" />
            <XAxis dataKey="Year" label={{ value: 'Year', position: 'bottom' }} />
            <YAxis label={{ value: 'Population', angle: -90, position: 'insideLeft', dy: 20 }} />
            {this.state.data.map((entry, index) => (
              <Line key={index} type="monotone" dataKey="Population" name={entry.Nation} stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
            ))}
             <Tooltip />
          </LineChart>
        </ResponsiveContainer>
        <Legend  />
      </div>
    );
  }
}

export default SimpleLineChart;
