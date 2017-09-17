import * as React from 'react';
import { Button } from 'reactstrap';
const style = require('./style.css');

class Home extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.Home}>
        <p>Hello!</p>
        <Button color="primary">primary</Button>{' '}
      </div>
    );
  }
}

export { Home }
