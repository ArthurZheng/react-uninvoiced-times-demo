import React from 'react';
import marked from 'marked';
import ConsultantWeek from './consultant_week';

export default React.createClass({
  rawMarkup: function(){
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render: function(){
    var consultantWeeks = this.props.consultantWeeks.map(function(cw){
      return (
        <ConsultantWeek {...cw} />
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
