import React from 'react';
import marked from 'marked';
import ConsultantWeek from './consultant_week';

export default React.createClass({
  rawMarkup: function(){
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render: function(){
    var projectID = this.props.projectID;

    var consultantWeeks = this.props.consultantWeeks.map(function(cw){
      return (
        <ConsultantWeek {...cw} projectID ={projectID}/>
      );
    });

    return(
      <div class="container">
        {this.props.name}
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

            {consultantWeeks}

          </tbody>
      </table>
    </div>
  );
},
});
