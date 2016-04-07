import React from 'react';
import Project from './project';

export default React.createClass({
  render: function(){

    var projectNodes = this.props.projects.map(function(project){
      return (
        <Project {...project} />
      );
    });
    return (
      <div className="projectList">
        {projectNodes}
      </div>
    )
  },
});
