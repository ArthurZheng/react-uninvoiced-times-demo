import React from 'react';

export default React.createClass({
  render: function(){
    var times = this.props.times.map(function(t){
      return (
        <tr>
          <td>{t.date}</td>
          <td>{(t.hours / 24).toFixed(2)}</td>
        </tr>
      )
    });
    return(
      <tr className="consultanttWeek info">
          <td>{this.props.weekStart} </td>
          <td>{this.props.consultant.name} </td>
          <td>{this.props.hours} </td>
          <tr>
            <td colSpan="3">
              <table>
                <tbody>
                  {times}
                </tbody>

              </table>
            </td>
          </tr>
      </tr>

    );
  },
});
