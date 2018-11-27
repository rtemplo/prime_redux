import React from "react";
// import mutation from "../../queries/createDemoFormPublic";

import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";

/*
NOTE: 
JSON data will be auto generated in the future.
If the data fields are pre-popuated with information the valid and touched fields must both be set to true

For acceptable properties for validation see: /src/shared/validation
*/

class TestForm extends React.Component {
  state = {
    inputValue: "",
    inputValid: false,
    inputTouched: false,
    textareaValue: "",
    textareaValid: false,
    textareaTouched: false,
    radioSelValue: "",
    radioSelValid: false,
    radioSelTouched: false,
    checkboxSelValues: [],
    checkboxSelValid: false,
    checkboxSelTouched: false,
    dropdownSelValue: [],
    dropdownSelValid: false,
    dropdownSelTouched: false
  };

  inputChanged = e => {
    let val = e.target.value;
    this.setState(
      { inputValue: val, inputValid: true, inputTouched: true },
      () => {
        console.log(this.state.inputValue);
      }
    );
  };

  textareaChanged = e => {
    let val = e.target.value;
    this.setState(
      { textareaValue: val, textareaValid: true, textareaTouched: true },
      () => {
        console.log(this.state.textareaValue);
      }
    );
  };

  radioSelect = e => {
    let val = e.target.value;
    this.setState(
      { radioSelValue: val, radioSelValid: true, radioSelTouched: true },
      () => {
        console.log(this.state.radioSelValue);
      }
    );
  };

  checkboxSelect = e => {
    let selectedItems = [...this.state.checkboxSelValues];

    if (e.checked) selectedItems.push(e.value);
    else selectedItems.splice(selectedItems.indexOf(e.value), 1);

    this.setState({ checkboxSelValues: selectedItems }, () => {
      console.log(this.state.checkboxSelValues);
    });
  };

  dropdownSelect = e => {
    this.setState({ dropdownSelValue: e.target.value }, () => {
      console.log(this.state.dropdownSelValue);
    });
  };

  render() {
    let style = {
      padding: "0px 15px 0px 15px"
    };

    return (
      <div style={style}>
        <div className="p-grid">
          <div className="p-col-12 p-md-6 p-lg-4">
            <div className="box">
              <Card rf_layout="gd1">
                <div className="p-card-body">
                  <div className="p-card-subtitle">Text Input</div>
                  <div className="p-grid">
                    <div className="p-col-12">
                      <span className="p-float-label">
                        <InputText
                          id="in"
                          value={this.state.inputValue}
                          onChange={this.inputChanged}
                        />
                        <label htmlFor="in">Username</label>
                      </span>
                    </div>
                    <div className="p-col-12">
                      <span>
                        <div className="p-card-subtitle">Text Area</div>
                        <InputTextarea
                          id="ta"
                          rows={5}
                          cols={30}
                          value={this.state.textareaValue}
                          onChange={this.textareaChanged}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="p-col-12 p-md-6 p-lg-4">
            <div className="box">
              <Card rf_layout="gd2">
                <div className="p-card-body">
                  <div className="p-grid">
                    <div className="p-card-subtitle">Radio Selection</div>
                    <div className="p-col-12">
                      <RadioButton
                        inputId="rb1"
                        name="city"
                        value="New York"
                        onChange={this.radioSelect}
                        checked={this.state.radioSelValue === "New York"}
                      />
                      <label htmlFor="rb1" className="p-radiobutton-label">
                        New York
                      </label>
                    </div>
                    <div className="p-col-12">
                      <RadioButton
                        inputId="rb2"
                        name="city"
                        value="San Francisco"
                        onChange={this.radioSelect}
                        checked={this.state.radioSelValue === "San Francisco"}
                      />
                      <label htmlFor="rb2" className="p-radiobutton-label">
                        San Francisco
                      </label>
                    </div>
                    <div className="p-col-12">
                      <RadioButton
                        inputId="rb3"
                        name="city"
                        value="Los Angeles"
                        onChange={this.radioSelect}
                        checked={this.state.radioSelValue === "Los Angeles"}
                      />
                      <label htmlFor="rb3" className="p-radiobutton-label">
                        Los Angeles
                      </label>
                    </div>
                  </div>
                  <br />
                  <div className="p-grid">
                    <div className="p-card-subtitle">Checkbox Selection</div>
                    <div className="p-col-12">
                      <Checkbox
                        inputId="cb1"
                        value="New York"
                        onChange={this.checkboxSelect}
                        checked={this.state.checkboxSelValues.includes(
                          "New York"
                        )}
                      />
                      <label htmlFor="cb1" className="p-checkbox-label">
                        New York
                      </label>
                    </div>
                    <div className="p-col-12">
                      <Checkbox
                        inputId="cb2"
                        value="San Francisco"
                        onChange={this.checkboxSelect}
                        checked={this.state.checkboxSelValues.includes(
                          "San Francisco"
                        )}
                      />
                      <label htmlFor="cb2" className="p-checkbox-label">
                        San Francisco
                      </label>
                    </div>
                    <div className="p-col-12">
                      <Checkbox
                        inputId="cb3"
                        value="Los Angeles"
                        onChange={this.checkboxSelect}
                        checked={this.state.checkboxSelValues.includes(
                          "Los Angeles"
                        )}
                      />
                      <label htmlFor="cb3" className="p-checkbox-label">
                        Los Angeles
                      </label>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="p-col-12 p-md-6 p-lg-4">
            <div className="box">
              <Card rf_layout="gd3">
                <div className="p-card-body">
                  <div className="p-grid">
                    <div className="p-col-12">
                      <div className="p-card-subtitle">Drop Down Selection</div>
                      <Dropdown
                        value={this.state.dropdownSelValue}
                        options={[
                          { name: "New York", code: "NY" },
                          { name: "Rome", code: "RM" },
                          { name: "London", code: "LDN" },
                          { name: "Istanbul", code: "IST" },
                          { name: "Paris", code: "PRS" }
                        ]}
                        onChange={this.dropdownSelect}
                        style={{ width: "150px" }}
                        placeholder="Select a City"
                        optionLabel="name"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestForm;
