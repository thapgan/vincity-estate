import React from "react"
import DisqusThread from "./DisqusThread"

class Disqus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: []
    };
    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }
  notifyAboutComment() {
    const toasts = this.state.toasts.slice();
    toasts.push({ text: "New comment available!" });
    this.setState({ toasts });
  }
  render() {
    const { post, disqusShortname } = this.props;    
    if (!disqusShortname) {
      return null;
    }

    // return (<h1>Disqus on</h1>);
    // //const post = postNode.frontmatter;
    // //const url = config.siteUrl + config.pathPrefix + postNode.fields.slug;
    return (
      <DisqusThread
        shortname={disqusShortname}
        identifier={post.title}
        title={post.title}
        url={post.url}
        category_id={post.category_id}
        onNewComment={this.notifyAboutComment}
      />
    );
  }
}

export default Disqus;