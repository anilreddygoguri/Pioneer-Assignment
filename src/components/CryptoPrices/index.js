import React, { Component } from 'react';
import './style.css';

class CryptoPrices extends Component {
  state = {
    prices: null,
    loading: true
  };

  componentDidMount() {
    this.fetchPrices();
  }

  fetchPrices = async () => {
    try {
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data)
      this.setState({ prices: data.bpi, loading: false });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false });
    }
  };

  render() {
    const { prices, loading } = this.state;
    return (
      <div className="crypto-container">
        {loading && <p>Loading...</p>}
        {!loading && prices && (
          <div className="crypto-cards">
            {Object.entries(prices).map(([currency, price]) => (
              <div key={currency} className="crypto-card">
                <h2 className="crypto-currency">{currency}</h2>
                <p className="crypto-price">{price.rate}</p>
                <p className="crypto-price">{price.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default CryptoPrices;