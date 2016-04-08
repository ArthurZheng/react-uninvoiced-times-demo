import React from 'react';
import Project from './project';

export default React.createClass({
  render: function(){

    var projectNodes = this.props.projects.map(function(project){
      return (
        <Project {...project} key={project.projectID} />
      );
    });
    return (
      <div className="projectList">
        {projectNodes}
      </div>
    )
  },
});
