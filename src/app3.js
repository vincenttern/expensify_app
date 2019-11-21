class RandomBugPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        "Fix navbar",
        "Fix footer",
        "Make mobile responsive",
        "Retrieve data and convert into json",
        "Change background image"
      ],
      currentName: ""
    };

    this.handleRandomBugs = this.handleRandomBugs.bind(this);
    this.handleAddName = this.handleAddName.bind(this);
  }

  handleRandomBugs(options) {
    this.setState(() => {
      return {
        pickedOptions: options
      };
    });
  }

  handleAddName(e) {
    e.preventDefault();
    const name = e.target.elements.option.value.trim();
    if (name) {
      this.setState(() => {
        currentName: name;
      });
    }
  }

  render() {
    return (
      <div>
        <Title />
        <InputName
          handleAddName={this.handleAddName}
          currentName={this.state.currentName}
        />
        <RandomOptions
          handleRandomBugs={this.handleRandomBugs}
          options={this.state.options}
        />
      </div>
    );
  }
}

class Title extends React.Component {
  render() {
    return (
      <div>
        <h1>Random Bug Picker</h1>
        <h4>Employees will choose 1 between 3 random bug issues.</h4>
      </div>
    );
  }
}

class InputName extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleAddName}>
        <input type="text" name="option" />
        <button>Submit</button>
      </form>
    );
  }
}

class RandomOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedOptions: [],
      displayOptions: false
    };
    this.handleRandomBugs = this.handleRandomBugs.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleResetOptions = this.handleResetOptions.bind(this);
  }

  handleRandomBugs() {
    let ranOptions = [];
    let ranNum = Math.floor(Math.random() * this.props.options.length);
    let ran1, ran2, ran3;

    ran1 = this.props.options[ranNum];
    ranOptions.push(ran1);

    let newArr = this.props.options.filter(option => {
      return option !== ran1;
    });

    let ranNum2 = Math.floor(Math.random() * newArr.length);
    ran2 = newArr[ranNum2];

    ranOptions.push(ran2);

    let newArr2 = this.props.options.filter(option => {
      return option !== ran1 && option !== ran2;
    });
    let ranNum3 = Math.floor(Math.random() * newArr2.length);
    ran3 = newArr2[ranNum3];

    ranOptions.push(ran3);

    this.setState(prevState => {
      return {
        pickedOptions: ranOptions,
        displayOptions: !prevState.displayOptions
      };
    });

    // this.props.handleRandomBugs(ranOptions);
  }

  handlePickOption(pickedOptions) {
    this.setState(() => {
      return {
        pickedOptions: [pickedOptions]
      };
    });
  }

  handleResetOptions() {
    this.setState(() => {
      return {
        pickedOptions: []
      };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRandomBugs}>Random</button>
        <button onClick={this.handleResetOptions}>Reset</button>
        {this.state.displayOptions &&
          this.state.pickedOptions.map(option => (
            <RandomOption
              option={option}
              key={option}
              pickedOptions={this.state.pickedOptions}
              displayOptions={this.state.displayOptions}
              handlePickOption={this.handlePickOption}
            />
          ))}
      </div>
    );
  }
}

class RandomOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBug: ""
    };
    this.handlePickOption = this.handlePickOption.bind(this);
  }
  handlePickOption(e) {
    const selectedBug = e.target.value;

    this.setState(
      prevState => {
        return {
          selectedBug,
          pickedOptions: [],
          displayOptions: !prevState.displayOptions
        };
      },
      () => this.props.handlePickOption(this.state.selectedBug)
    );
    // console.log(this.state.selectedBug);
  }
  render() {
    return (
      <div>
        {this.props.displayOptions && (
          <ul>
            <li>
              <button value={this.props.option} onClick={this.handlePickOption}>
                {this.props.option}
              </button>
            </li>
          </ul>
        )}

        <DisplaySelectedBug selectedBug={this.state.selectedBug} />
      </div>
    );
  }
}

class DisplaySelectedBug extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.selectedBug &&
            `You are assigned to ${this.props.selectedBug}`}
        </h1>
      </div>
    );
  }
}

ReactDOM.render(<RandomBugPicker />, document.getElementById("app"));
