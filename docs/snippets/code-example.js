import axios from 'axios'
import { Model } from '@vuex-orm/core'

export default class User extends Model {
  static entities() {
    return {
      id: this.increments(null),
      description: this.attr(null),
      name: this.attr(null),
    }
  }
}