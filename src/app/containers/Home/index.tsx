import * as React from 'react';
import { Container, Form, Input } from 'reactstrap';
const style = require('./style.css');
import { Header } from 'components';
class Home extends React.Component<any, any> {
  public constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className={style.Home}>
        <Header />
        <div className={style.jumbo}>
          <Container fluid={true}>
            <div className={style.container}>
              <h1 className={style.heading}>You're picture perfect</h1>
              <h1 className={style.headingTwo}>vacation starts here.</h1>
                <div className="row">
                  <div className={style.flightInput}>
                    <Form className="form-horizontal">
                      <div className="form-group col-xs-12 pull-right">
                        <div className="col-xs-3">
                          <Input type="text" title="Where?"/>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
            </div>
          </Container>
        </div>
        <div id="works">
          <p>How it works?</p>
        </div>
      </div>
    );
  }
}

export { Home }
