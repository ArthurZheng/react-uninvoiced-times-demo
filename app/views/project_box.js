import React from 'react';
import ProjectForm from './comment_form';
import ProjectList from './project_list';
import $ from 'jquery';

export default React.createClass({

  loadProjectsFromServer: function(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({projects: data.projects});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },

  // handleProjectSubmit: function(project){
  //
  //   var comments = this.state.data;
  //   project.id = Date.now();
  //   var newProject = comments.concat([project]);
  //   this.setState({data: newProject});
  //
  //   //TODO: sumbit to the server and refresh the list
  //   $.ajax({
  //     url: this.props.url,
  //     dataType: 'json',
  //     type: 'POST',
  //     data: project,
  //     success: function(data){
  //       this.setState({data:data.project});
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       this.setState({data: comments});
  //       console.error(this.props.url, status, err.toString());
  //     }.bind(this),
  //   });
  //
  // },

  getInitialState: function(){
    return { projects:[] };
  },

  componentDidMount: function(){
    this.loadProjectsFromServer();
    setInterval(this.loadProjectsFromServer, this.props.pollInterval);
  },

  render: function(){
    return(
      <div className="commentBox">
        <h1>Projects</h1>
        <ProjectList projects={this.state.projects} />
        <ProjectForm onProjectSubmit={this.handleProjectSubmit} />
      </div>
    );
  },
});
