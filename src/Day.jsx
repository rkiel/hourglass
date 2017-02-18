import React, {Component} from 'react';

class Day extends Component {
  render() {
    const id = "one";

    return (
      <td className="mdl-data-table__cell">
        <form action="#">
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" id={id} maxLength={5} size={5}/>
            <label className="mdl-textfield__label" htmlFor={id}>{this.props.placeholder}</label>
          </div>
        </form>
      </td>
    );
  }
}

export default Day;
