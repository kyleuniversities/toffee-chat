import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SiteHeader extends Component {
  @action
  async blockUserChange() {
    alert('Toffeechat V1 web users shall only use Toffeechat as the Guest user')
  }
}
