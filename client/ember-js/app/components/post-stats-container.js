import Component from "@glimmer/component";

export default class PostStatsContainer extends Component {
  hasCreatedAtText() {
    if (this.args.postData) {
      return this.args.postData.createdAtText;
    }
    return false;
  }
}
