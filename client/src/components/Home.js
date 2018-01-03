import React, { Component } from 'react';
import { Header, Grid, Image } from 'semantic-ui-react';
import '../css/style.css';

class Home extends Component {
 state = { flipped: false, matched: false }

  flip = () => {

  }

  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Memory Match!</Header>
        <br />
        <Grid className='grid'>
          <Grid.Row centered colums={4}>
            <Grid.Column width={3}>

              <img className='img' src={require('../img/cat1.jpg')} />
            </Grid.Column>
            <Grid.Column width={3}>
              <img className='img' src={require('../img/cat1.jpg')} />
            </Grid.Column>
            <Grid.Column width={3}>
              <img className='img' src={require('../img/cat2.jpg')} />
            </Grid.Column>
            <Grid.Column width={3}>
              <img className='img' src={require('../img/cat2.jpg')} />
            </Grid.Column>
          </Grid.Row>
          <br />
            <Grid.Row centered colums={4}>
              <Grid.Column width={3}>
                <img className='img'
                    src={require('../img/cat3.jpg')}
                    onClick={this.flip}
                    />
              </Grid.Column>
              <Grid.Column width={3}>
                <img className='img' src={require('../img/cat3.jpg')} />
              </Grid.Column>
              <Grid.Column width={3}>
                <img className='img' src={require('../img/cat4.jpg')} />
              </Grid.Column>
              <Grid.Column width={3}>
                <img className='img' src={require('../img/cat4.jpg')} />
              </Grid.Column>
            </Grid.Row>
            <br />

        </Grid>
      </div>
    );
  }
}

export default Home;
