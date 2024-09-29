import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ProfileBoxContainer extends Component {
  @action
  async toggleShow() {
    document
      .getElementById('profile-box-container')
      .classList.toggle('profile-box-show');
  }
}
