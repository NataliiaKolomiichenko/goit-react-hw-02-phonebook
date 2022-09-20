import { Component } from 'react'
import PropTypes from 'prop-types'
import css from './Filter.module.css'

class Filter extends Component {

  static propTypes = {
        filter: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    }

  render() {
    return <label className={css.inputLabel}> Find contacts by name
        <input 
            className={css.input}
            type="text"
            name="filter"
            value={this.props.filter}
            onChange={this.props.onChange}
        />
    </label>
  }
}

export default Filter