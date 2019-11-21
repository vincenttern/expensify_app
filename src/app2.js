class ProductsApp extends React.Component {
  render() {
    const title = "Shoes for Sale";
    const options = [
      "Nike Zooom 1",
      "Air Jordan 1 red",
      "Converse 2",
      "Nike Flyknit 3"
    ];
    return (
      <div>
        <Title title={title} />
        <ProductOptions options={options} />
      </div>
    );
  }
}

class Title extends React.Component {
  render() {
    return <div>{this.props.title}</div>;
  }
}

class ProductOptions extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map(item => (
          <ProductOption key={item} item={item} />
        ))}
      </div>
    );
  }
}

class ProductOption extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.item}</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<ProductsApp />, document.getElementById("app"));
