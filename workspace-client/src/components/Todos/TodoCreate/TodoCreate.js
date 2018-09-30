import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Divider, Grid, ListItem, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import i18n from 'i18next';

import TodoForm from '../TodoForm/TodoForm';

import Loading from '../../Shared/Loading';

const styleSheet = theme => ({
  rootContainer: {
    ...theme.mixins.gutters(),
    height: '100%',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: theme.palette.background.default,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class TodoCreate extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    todo: PropTypes.object.isRequired,
    isAdding: PropTypes.bool.isRequired,
    add: PropTypes.func.isRequired,
    modify: PropTypes.func.isRequired,
  }

  handleTitleChange = (event) => {
    const { modify } = this.props;
    modify({ title: event.target.value });
  }

  handleDescriptionChange = (event) => {
    const { modify } = this.props;
    modify({ description: event.target.value });
  }

  handleNotesChange = (event) => {
    const { modify } = this.props;
    modify({ notes: event.target.value });
  }

  handleAddClick = () => {
    const { add } = this.props;
    add();
  }

  render() {
    const { classes, todo, isAdding } = this.props;

    let addingContext;
    if (isAdding) {
      addingContext = (
        <Fragment>
          <Loading message={i18n.t('Todo:adding')} />
          <Divider />
        </Fragment>
      );
    }

    return (
      <div className={classes.rootContainer}>
        <Paper>
          {addingContext}
          <TodoForm
            title={todo.title}
            description={todo.description}
            notes={todo.notes}
            changeTitle={this.handleTitleChange}
            changeDescription={this.handleDescriptionChange}
            changeNotes={this.handleNotesChange}
          />
          <Divider />
          <ListItem justify='flex-end'>
            <Grid container justify='flex-end'>
              <Button variant='contained' color='primary' onClick={this.handleAddClick} className={classes.button} disabled={isAdding}>
                {i18n.t('Todo:add')}
              </Button>
            </Grid>
          </ListItem>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styleSheet)(TodoCreate);
