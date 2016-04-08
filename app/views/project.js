import React from 'react';
import ConsultantWeek from './consultant_week';

export default React.createClass({

  getInitialState: function(){
      return {opened: false};
  },

  showConsultantTimes: function(e){
    this.setState({opened: true});
    console.log('showConsultantTimes called');
  },

  render: function(){
    var opened = this.state.opened;
    var consultantWeeks = this.props.consultantWeeks.map(function(cw, i){
      return (
        <ConsultantWeek {...cw} key={i} opened={opened} />
      );
    });

    return(
      <div class="container">
        {this.props.name}
        <button onClick={this.showConsultantTimes} type='button' className='btn btn-info pull-right'>Show Consultant Times</button><br /><br />
        <table className="project table table-striped table-bordered">
          <thead>
            <tr className="success">
              <th>Week Start</th>
              <th>Consultant</th>
              <th>Hours</th>
              <th>Total Hours</th>
              <th>Billable Units</th>
              <th>Unit Type</th>
              <th>Rate</th>
              <th>Amount</th>
              <th>PO #</th>
              <th>Amount Remaining</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {consultantWeeks  }

          </tbody>
      </table>
    </div>
  );
},
});
