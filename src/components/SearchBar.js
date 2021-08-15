import React from 'react';

class SearchBar extends React.Component {

   state = { term: '' };

   onFormSubmission(event) {
      event.preventDefault();

      this.props.onSubmit(this.state.term);
   }

   render() {

      return (
         <div className="ui segment">
            <form className="ui form" onSubmit={(event) => this.onFormSubmission(event)}>
               <div className="field">
                  <label>Image Search</label>
                  <input type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value}) }/>
               </div>
            </form>
         </div>
      );
   }
}

export default SearchBar;