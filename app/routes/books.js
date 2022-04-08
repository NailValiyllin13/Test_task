import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  model() {
  	let data = Ember.$.getJSON('https://teststand.t-mobis.ru/Books').then(function(data) {
  		return JSON.parse(data)
    });
    return data;
  }
});