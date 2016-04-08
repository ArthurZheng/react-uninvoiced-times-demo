import React from 'react';

export default React.createClass({
  render: function(){
    var times = this.props.times.map(function(t){
      let roundedDayFromHours = (Math.round( (t.hours / 8) * 10 ) / 10);
      return (
        <tr key={t.date}>
          <td>{t.date}</td>
          <td>  -- {t.hours.toFixed(1)}</td>
          <td>  -- {roundedDayFromHours.toFixed(1)}</td>
        </tr>
      )
    });
    return(
      <div>
      <tr className="consultanttWeek info">
          <td>{this.props.weekStart} </td>
          <td>{this.props.consultant.name} </td>
          <td>{this.props.times.hours} </td>
          <td>{this.props.totalHours} </td>
          <td>{this.props.billableUnits} </td>
          <td>{this.props.unitType} </td>
          <td>{this.props.rate} </td>
          <td>{this.props.amount} </td>
          <td>{this.props.poNumber ? this.props.poNumber : 'N/A'} </td>
          <td>{this.props.amountRemaining ? this.props.amountRemaining : 'N/A'} </td>
          <td>{this.props.status} </td>
      </tr>
      <tr>
          <td>
            <table>
              <tbody>
                {this.props.projectID === 540 ? times : ''}
              </tbody>

            </table>
          </td>
      </tr>
</div>
    );
  },
});
