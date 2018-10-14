import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { refresh, search } from '../../../../store/todos/actionCreators'
import TodoFilter from './TodoFilter'

class TodoFilterContainer extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    query: PropTypes.string.isRequired,
    refresh: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
  }

  render() {
    return (
      <TodoFilter
        isLoading={this.props.isLoading}
        query={this.props.query}
        refresh={this.props.refresh}
        search={this.props.search}
      />
    )
  }
}

const connector = connect(
  state => ({
    isLoading: state.todosState.meta.isLoading,
    query: state.todosState.filter.query,
  }),
  {
    refresh,
    search,
  },
)

export default connector(TodoFilterContainer)
