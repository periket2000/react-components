import React from 'react';

/*
* Call functions from component with call/apply for setting "this" as the component.
*/
var I18n = {
    load_t: function() {
        for( var i in this.state.languages ) {
            var data = require('../' + this.state.i18n_dir + '/' + this.state.languages[i] + '.json');
            if(data) {
                for (var attrname in data) {
                    this.state.i18n[attrname] = data[attrname];
                }
            }
        }
    },
    t: function(key) {
        return this.state.i18n[this.props.lang !== undefined ? this.props.lang : this.state.lang][key];
    }
};

export default I18n;